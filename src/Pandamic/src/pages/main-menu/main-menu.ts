import { Component } from '@angular/core';
import { NavController, ToastController ,AlertController } from 'ionic-angular';
import { RuleBookPage } from '../rule-book/rule-book';
import { OptionsPage } from '../options/options';
import { SignUpPage } from '../sign-up/sign-up';
import { CreateGamePage } from '../create-game/create-game';
import { AddPlayerPage } from '../add-player/add-player';
import { GamePage } from '../game/game';
import { JoinGamePage } from '../join-game/join-game';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { Geolocation } from '@ionic-native/geolocation';
import {Game_Constants} from '../../providers/Game_Constants/gameconstants';



@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})

export class MainMenuPage {

  json_data : any ='';
  public player_current_location_lat : any = "";
  public player_current_location_long : any = "";
  constructor(public navCtrl: NavController ,
   public restApiProvider : RestApiProvider ,
   public toastCtrl: ToastController,
   private alertCtrl: AlertController,
   private localStr : LocalstorageProvider,
   private geolocation : Geolocation) {

   this.get_player_location();
   this.game_get_data();
  }


  create_Player(){

     //For Local Storage testing
    this.localStr.get_data(Game_Constants.player_name_string).then((val) => {
      console.log("palye name is:"+val);
      if(val==null || val == ''){
      var player_id: any = this.generateUUID();
        var data = {game_id :  Game_Constants.DEFAULT_GAME_ID.toString(), player_id : player_id.toString(),location : 
        {
          x:this.player_current_location_lat.toString() ,
           y:this.player_current_location_long.toString()} 
        };     
          console.log("post data is:"+JSON.stringify(data));  
         this.restApiProvider.post_player_data(data).then((result)=> {
         console.log("result data is:"+JSON.stringify(result));  
               this.localStr.save_data(Game_Constants.player_name_string,player_id);
               this.showToastMessage("Player is Created");
               this.game_get_data();
              }, (err) => {
                  this.showToastMessage("Some Issue with API or Internet");
              });
       }else {
          this.showToastMessage("Welcome Back : "+val);
       }
    });

  }

  //Generate and Unique ID key will be use as player user name
   generateUUID () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  get_player_location(){
   this.geolocation.getCurrentPosition().then((position) => {
      this.player_current_location_lat = position.coords.latitude;
      this.player_current_location_long = position.coords.longitude;
      console.log("Player location is :"+  this.player_current_location_long);

    }, (err) => {
      console.log(err);
    })
  }

  game_get_data(){
    this.restApiProvider.get_game_data(Game_Constants.DEFAULT_GAME_ID).then((result)=> {
      this.json_data = result;
    }, (err) => {
       console.log("data failed 1");
    });
  }

   showToastMessage(info : string) {
    let toast = this.toastCtrl.create({
      message: info,
      duration: 3000
    });
    toast.present();
  }

 showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

  goToRuleBook(params){
    if (!params) params = {};
    this.navCtrl.push(RuleBookPage);

  }goToOptions(params){
    if (!params) params = {};
    this.navCtrl.push(OptionsPage);
  }goToLogin(params){
    if (!params) params = {};

    // this.navCtrl.push(LoginPage);
    //  this.showToastMessage('Data is Not Availble Either check or internet or Server is not working');
   //this.showAlert();
  //After the Player Location Create the Player  
  this.create_Player();
  this.navCtrl.push(JoinGamePage, this.json_data);
  }goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }goToCreateGame(params){
    if (!params) params = {};
    this.navCtrl.push(CreateGamePage);
  }goToAddPlayer(params){
    if (!params) params = {};
    this.navCtrl.push(AddPlayerPage);
  }goToGame(params,){
    if (!params) params = {};
    this.navCtrl.push(GamePage,this.json_data);
  }goToJoinGame(params){
    if (!params) params = {};
    this.navCtrl.push(JoinGamePage);
  }
}
