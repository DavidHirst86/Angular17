import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { Character } from './../character';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.css']
})
export class CharacterPreviewComponent implements OnInit {
	public temp: any[];
	public url_id:string;
	public character:Character;

  constructor(private router: Router, private data: DataService
    ,private http: HttpClient,private route: ActivatedRoute) {}

  		  

  ngOnInit() {
  	this.route.params.subscribe(params => {
			  this.url_id = params['id'];
			  this.data.getAllWithPipe()
      .subscribe((data: any[]) => {
        // Run code when data comes back from the web service.
        
        
        this.temp = data;
              for (let onlyCharacters of this.temp) {
    		if(onlyCharacters._id===this.url_id){
    			console.log("ok");
    			this.character=onlyCharacters;
    			console.log(this.character);
    			break;
				}
        // ...This code..
        
      });
      
      
      // This code will run before..
  }
				});
  	

}
