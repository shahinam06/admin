import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

 userId: string = '';
 userDetails: any;
 

  constructor(private userService : UserService, private activatedRoute: ActivatedRoute) { } //Router to get id

  ngOnInit(): void {

   this.activatedRoute.params.subscribe (data => {
    this. userId = data['id']; //put id inside square bracket
    console.log(this.userId);
    })

    this.userService.viewuser(this.userId).subscribe(data => {
      console.log(data);
      this.userDetails = data;
      
    })
  }

}


