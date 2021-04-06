import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as firebase from 'firebase';
import { User } from 'src/Class/Users';
import { ValidationserviceService } from 'src/Service/validationservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
UserName:string='';
ref:any;
user=new User();
UsersList:User[]=[];

  constructor(private router:Router,private Validation:ValidationserviceService) {

    this.ref = firebase.database().ref('Users')

    if (localStorage.getItem('user'))
    {
      this.user=JSON.parse(localStorage.getItem('user'));
      if(this.user.Mobile !='')
      {
        let navigationExtras:NavigationExtras={
          state:{
          user:this.user
    
          } 
        }
        this.router.navigate(['home'],navigationExtras,);
      }
     
    }

    else
    {
      this.GetAllUsers();
    }
   }

  ngOnInit() {
  }

  GetAllUsers()
  {
    this.ref.on('value',data => {
      
      console.log(data);
    this.UsersList=[];
    
  		data.forEach( data => {
        debugger
        let us=new User();
        us=data.val().User;
        us.Id=data.key;
      
        this.UsersList.push(us)
        
  		});
     
  	});
  }

  Login()
  {
debugger
    if(this.Validation.ValidateName(this.user.Name,true) && this.Validation.ValidateMobile(this.user.Mobile,true))
    {

    let users=this.UsersList.filter((itm)=>  itm.Mobile==this.user.Mobile)
    if(users.length>0)
    {
      this.user=users[0];
      localStorage.setItem('user',JSON.stringify(this.user))
    }
    else
    {
      localStorage.setItem('user',JSON.stringify(this.user))
      this.ref.push({
        User: this.user
      });
    }

    if(this.user.Mobile !='')
    {
      let navigationExtras:NavigationExtras={
        state:{
        user:this.user
  
        } 
      }
      this.router.navigate(['home'],navigationExtras,);  
    }
 

  }
}


}
