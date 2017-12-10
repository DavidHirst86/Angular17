import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { Character } from './../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterListComponent implements OnInit {
	public temp: any[];

  constructor(private router: Router, private data: DataService
    ,private http: HttpClient) { }
  

  ngOnInit() {

  	this.data.getAllWithPipe()
      .subscribe((data: any[]) => {
        // Run code when data comes back from the web service.
        console.log(data);

        this.temp = data;
        // ...This code..
        console.log("2");
      });
      // This code will run before...
      console.log("1");
  }

  public onDelete(event, character: Character): void {
    // console.log(event);
    event.stopPropagation();
    // console.log("onDelete");

    // Before server response

    this.http.post('http://angular2api1.azurewebsites.net/api/internships/delete/' + character._id,
      character, { responseType: 'text'} ).subscribe(data => {
        // After a server response
        this.temp = this.temp.filter(x => x._id !== character._id);
      });

      // Before server response
  }
  public onClick(character: Character) {
    // console.log("onClick");
    // console.log(this.data.temp);
    // console.log(beanie);
    this.router.navigate(['Character/', character._id]);
  }

}
