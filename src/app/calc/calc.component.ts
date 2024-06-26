import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  title= "Calculator";
  result = '';
  total = 'Error';
  isDisabled = true;
  startingZero = false;
  addNumber(num:number){
    if (isNaN(Number(this.result.slice(-1))) && this.result == '' && num == 0){

    }
    this.result+=num;
    this.calculateResult();
  }
  addOperation(op:string){
    if(!isNaN(Number(this.result.slice(-1))) && this.result != ''){
      this.result+=op;
    }
    
  }
  clear(){
    this.result = '';
    this.total = 'Error';
  }
  calculateResult() {
    try {
      this.total = eval(this.result);
    } catch {
      this.total = 'Error';
    }
  }
}
