import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'src/Class/Users';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  ref = firebase.database().ref('Users');
  UsersList:User[]=[];
  user=new User();
  
  constructor() { 
    this.GetAllUsers();
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
        this.user=new User();
        this.user=data.val().User;
        this.user.Id=data.key;
      
        this.UsersList.push(this.user)
  		});
     
  	});
  }

}
