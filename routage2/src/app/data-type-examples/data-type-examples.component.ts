import { Component } from '@angular/core';

interface car{
  id?: number;  // kitxvis nishani nisnavs ? (facultatif)(peut etre)
  brand: string;
  model: string;
  isElectrical: boolean;
}

@Component({
  selector: 'app-data-type-examples',
  templateUrl: './data-type-examples.component.html',
  styleUrls: ['./data-type-examples.component.css']
})
export class DataTypeExamplesComponent {


    //data type
    //string
    public myStr: string = "chaine de caractere";
    //number
    public myNumber: number = 42;
    public mySecondNumber: number = 34.4;
    //boolean
    public myBool: boolean = true;
    //joker (on peut mettre tout type de donnée)
    public myJoker: any;
    //tableau   (on peut mettre tout type de donnée)
    public myArr: any[] = ["chaine",5,true];
    //tableau (avec que de chaine de caracter)
    public myStringArr: string[] = ["str1","str2","str4"];
  
    public myCarsArr : car[] = [{
      brand:"ford",
      model:"mustang",
      isElectrical:false,
    },
    {
      brand:"polestar",
      model:"polstar2",
      isElectrical:true,
      id:42
    },
    {
      brand:"tesla",
      model:"model X",
      isElectrical:true,
      id:45
    }]
 
}
