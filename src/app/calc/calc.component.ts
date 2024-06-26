import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  title= "Calculator";
  result = '0';
  total = 'Error';
  isDisabled = true;
  startingZero = true;
  addNumber(num:number){
    const lastChar = this.result.slice(-1);

    // Replace '0' with the new number if the result starts with '0' and it's not followed by a number or a dot
    if (this.result === '0' || (lastChar === '0' && isNaN(Number(this.result.slice(-2, -1))) )) {
      //removes the prev number 
      this.result = this.result.slice(0, -1);
    }
    this.result += num;
    this.calculateResult();
  }

  addOperation(op:string){
    if(!isNaN(Number(this.result.slice(-1))) && this.result != ''){
      this.result+=op;
    }
    
  }
  clear(){
    this.result = '0';
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
