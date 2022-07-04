import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //automatically imports
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl('')
    })
  }

  createUser(){
     console.log(this.addUserForm.value)
     this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      console.log("User Created");
      this._snackBar.open("User Created Successfully");
     }, err => {
      console.log(err);
      this._snackBar.open("Unable to create user")
     })
  }

}
