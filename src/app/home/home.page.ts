
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Class/Users';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ref;
  onlineCollection=firebase.database().ref('Online');
	user=new User;
	newmessage;
  messagesList;
  OnlineUsersName="";
  OnlineList:any[]=[]
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  subscription: any;
  OnlineCount:number=0;

  constructor(public navCtrl: NavController, public alert: AlertController,public activatedRoute:ActivatedRoute,public router:Router,private platform:Platform) {
    this.ref = firebase.database().ref('messages');
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.user=this.router.getCurrentNavigation().extras.state.user;
      }
    else
    {
      if(localStorage.getItem('user'))
      {
        this.user=JSON.parse(localStorage.getItem('user'));
      }
    }
    })
  }
  ionViewDidLoad(){
  	
  }
  ngOnInit()
  {
  if(localStorage.getItem('user'))
  {
    this.user=JSON.parse(localStorage.getItem('user'));
  }
   
    this.GetMessages();
    
    this.GetAllOnelineUsers();
  }

  GetMessages()
  {
    this.ref.on('value',data => {
      let tmp = [];
   //   console.log(data);
    
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				user: data.val().user,
  				message: data.val().message
  			})
  		});
      this.messagesList = tmp;
      
      
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight+10;
    } catch(err) { }                 
}


  send(){
    // add new data to firebase
   if(this.newmessage!='')
   {
     
    this.ref.push({
  		user: this.user,
  		message: this.newmessage
    });
    this.newmessage="";
   }
  
  }

  GetFirstName(str:string)
  {
   return str.toUpperCase().charAt(0);
  }


  ionViewDidEnter() {

    let data;
    if(localStorage.getItem('user'))
    {
     
      this.user=JSON.parse(localStorage.getItem('user'));
      this.InsertOnlineUsers();
    }

    this.subscription = this.platform.backButton.subscribeWithPriority(999,() => {
        if (confirm("are you sure to Exit App?")) {
          navigator['app'].exitApp();
        } 
    });

    
  }

   InsertOnlineUsers() {
    firebase.database().ref('Online/' + this.user.Mobile).set({
      user:this.user 
    });
  }
  ionViewWillLeave() {
    
    this.RemoveOnlineData();
    this.subscription.unsubscribe();
   
  }

  RemoveOnlineData()
  {

   let db= firebase.database().ref('Online/'+this.user.Mobile);
   db.remove();
  
  }

  GetAllOnelineUsers()
  {

    let db= firebase.database().ref('Online');
    db.on('value',data =>{
     this.OnlineCount=0;
     this.OnlineUsersName="";
      data.forEach( data => {   
        
        console.log(data.val().user.Name);
        
        this.OnlineUsersName+=data.val().user.Name+',';
        
        this.OnlineCount+=1;
     
          
      });
      this.OnlineUsersName=this.OnlineUsersName.substring(0, this.OnlineUsersName.length - 1);
      
    })
   
    
  }

}
