// import { HttpClient } from '@angular/common/http';
// import { DataService } from './../data.service';
// import { Beanie } from './../beanie';
// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { ActivatedRoute, Router } from "@angular/router";

// @Component({
//   selector: 'app-beanie',
//   templateUrl: './beanie.component.html',
//   styleUrls: ['./beanie.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class BeanieComponent implements OnInit {
//   // model = new Beanie('Burgundy', 7, 'Cotton');
//   public beanie: Beanie;
  
//   constructor(private route: ActivatedRoute, private http: HttpClient,
//     private data: DataService, private router: Router) {
//     // Here we are retrieving the id from the url via the ActivatedRoute object
//     route.params.subscribe(params => {
//       let id = params['id'];
//       console.log("id: " + id);
      
//       // Class exercise:
//       // Access the dataservice object and retrieve the beanie object
//       // based on the id.
//       // Success 1: Get access to dataservice object here.
//       // Success 2: Print out the object with the id from the url.

//       // We have the id and the array of beanies
//       // Here we specify the type Beanie to the local variable beanie.
//       if (id) {
//         // Here we learned that Object.assign can make a shallow copy of 
//         // an object.
//         this.beanie = Object.assign({}, this.data.getBeanie(id));
//       } else {
//         this.beanie = new Beanie('', undefined, '');
//       }

//       // Populate the view with the data in the returned beanie object.

//     });
//   }

//   ngOnInit() {
//   }

//   // Optional type system
//   public onMySubmit(form) {

    

    
//     console.log("beanie", this.beanie);
//     // console.log("beanie array", this.data.temp);
//     // console.log(this.model);
//     console.log(form);

//     // Check if form is valid.
//     if (form.valid) {
//       if (this.beanie._id) { // edit
//         // this.data.temp.find(x => x.id === this.beanie.id) = this.beanie;
//       } else { // new
//         // Save data to the server
//         this.beanie.customerId = 'CharCreator_1'
//         this.http.post('http://angular2api1.azurewebsites.net/api/internships/create', 
//         this.beanie, {responseType: 'text'}) // This api sends back text.
//         .subscribe(data => {
//           console.log(data);
//         })
//         // this.data.temp.push(this.beanie);
//       }
//       this.router.navigate(['beanies']);
//     }
//     else {
//       // alert("Error, fix first");
//     }
    
//   }
// }
