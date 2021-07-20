import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'task1';
  symbols: string = ' ';
  sub: Subscription;

 constructor() {
   this.sub = interval(3000).subscribe(() =>
     this.symbols = this.randomStr());
 }

    randomStr() {
    const random = '0123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm';
    let rndStr = '';
    for(let i = 0; i < 5; i++) {
    const rndNumber = Math.floor(Math.random() * random.length);
    rndStr += random.substring(rndNumber, rndNumber + 1);
    }
    return rndStr;
    }

    palindrome() {
    return this.symbols === this.symbols.split('').reverse().join('');
    }

    onlyNumber() {
    return isNaN(Number(this.symbols));
    }

    strZero() {
    return this.symbols.split('').some(element => Number(element) === 0);
    }

    stop () {
    this.sub.unsubscribe();
    }
}


function takeUntil(stopPlay$: any): any {
    throw new Error('Function not implemented.');
}

