export class Character {
  // public color: string;
  public _id: string;
  public customerId: string;

  constructor(public Body: string, public Head: string, 
    public Arms: string,public Legs: string) {
      
      // this.color = color;
    }
}
