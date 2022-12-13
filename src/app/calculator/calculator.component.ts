import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    number1 : number = 0;
    number2 : number = 0;
    private result  : number = 0;
    
   suma(){
    this.result  = this.number1 + this.number2;
   }
   
   subs(){
      this.result  = this.number1 - this.number2;
     /* if (this.number1 < this.number2)
          alert ("El argumento 1, no puede ser menor al argumento 2")
      else{
        this.result  = this.number1 - this.number2;
      }    
     */
    }
   
   mult(){
    this.result  = this.number1 * this.number2;
    }
   
    getResult(){
      return this.result;
    }
   


}
