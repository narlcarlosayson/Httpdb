
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from '../services/db.service';
import { IPerson } from '../interfaces/iperson';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

 


@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})

export class RemovepersonComponent implements OnInit {
  @Output() modifyClicked = new EventEmitter<any>();

  baseURL = 'https://appsdev-red11.firebaseio.com';
  rootNode = 'people';

  peopleCollection: Array<IPerson> = [];

  constructor(private dbservice: DbService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() { 
     this.dbservice.getAllData(`${this.baseURL}/${this.rootNode}.json`)
     .subscribe(
       (response) => {
         this.peopleCollection = response;
        } ,
       (error) => console.log(error)
     );
  }

  removeData(dataID) {
    // console.log(dataID);
    this.dbservice.deleteData(`${this.baseURL}/${this.rootNode}/${dataID}.json`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    );
  }

//-----------------------------------------------------




//-----------------------------------------------------
}