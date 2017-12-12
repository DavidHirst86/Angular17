import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Character } from './../character';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCharComponent implements OnInit {
  public character: Character;
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private data: DataService, private router: Router) {
			route.params.subscribe(params => {
      let id = params['id'];
      console.log("id: " + id);

      if (id) {
        // Here we learned that Object.assign can make a shallow copy of 
        // an object.
        this.character = Object.assign({}, this.data.getCharacter(id));
      } else {
        this.character = new Character('', '', '','');
      }
     });
}
  ngOnInit() {
  }
  onBodyChange(id){
    this.character.Body=id;
  }
  onHeadChange(id){
    this.character.Head=id;
  }
  onArmsChange(id){
    this.character.Arms=id;
  }
  onLegsChange(id){
    this.character.Legs=id;
  }

  public onMySubmit(form) {
    console.log(form);

    if (form.valid) {
      if (this.character._id) { // edit
        // this.data.temp.find(x => x.id === this.character.id) = this.character;
      } else { // new
        // Save data to the server
        this.character.customerId = 'CharCreator_1'
        this.http.post('http://angular2api1.azurewebsites.net/api/internships/create', 
        this.character, {responseType: 'text'}) // This api sends back text.
        .subscribe(data => {
          console.log(data);
        })
        // this.data.temp.push(this.character);
      }
      this.router.navigate(['beanies']);
    }
    else {
      // alert("Error, fix first");
    }
    
  }

}
