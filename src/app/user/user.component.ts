import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const resolverData = this.activatedRoute.snapshot.data['users']
    this.users = resolverData.data;
  }

}
