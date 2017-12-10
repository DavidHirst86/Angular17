import { Injectable } from "@angular/core";
import { Character } from './character';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  // temp = [
  //   {id: '1', color: 'Burgundy', size: 6, fabric: 'Cotton'} as Beanie,
  //   {id: '2', color: 'Blue', size: 3, fabric: 'Wool'} as Beanie,
  //   {id: '3', color: 'Yellow', size: 4, fabric: 'Diamond'} as Beanie,
  // ];
  localData: Character[] = [];

  // DI - Angular will inject an httpclient object.
  constructor(private http: HttpClient) { 
    
  }

  public test(): void {
    alert("Hello from dataservice");
  }

  public getAllWithPipe(): Observable<Character[]> {
    // pipe and map, taps into the result from the webservice and can change
    // the data before passing it back inside an observable to whoever called it.
    return this.http.get(
      'http://angular2api1.azurewebsites.net/api/internships/getall').pipe(
        map((response: any[]) => {
          this.localData = response.filter(x => x.customerId === 'CharCreator_1');
          return this.localData;

        }));
  
  }

  public getAll(): Observable<Character[]> {
    return this.http.get(
      'http://angular2api1.azurewebsites.net/api/internships/getall') as Observable<Character[]>;
  }

  public getCharacter(id: string): Character {
    return this.localData.find(x => x._id === id);
  }

  // public createNewCharacter(): Character {
  //   return new character('', undefined, '');
  // }
}