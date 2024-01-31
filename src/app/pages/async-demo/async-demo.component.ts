import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-async-demo',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './async-demo.component.html',
  styleUrl: './async-demo.component.scss'
})

export class AsyncDemoComponent {
  // btnClick() {
  //   this.normalFunction('1' + new Date());
  //   this.normalFunction('2' + new Date());

  //   this.delay(2000).then(() =>{
  //   console.log('3 ' + new Date());
  //     this.delay(2000).then(() =>{
  //     console.log('4 ' + new Date());
  //       this.delay(2000).then(() => {
  //         console.log('5 ' + new Date());
  //       });
  //     });
  //  });
  //  console.log('6 ' + new Date());
  // }

  async btnClick() {
    this.normalFunction('1' + new Date());
    this.normalFunction('2' + new Date());

    await this.delay(2000);
    console.log('3 ' + new Date());
    await this.delay(2000);
    console.log('4 ' + new Date());
  }
  
  normalFunction(text: string) {
    console.log(text);
  }
  async delay(ms: number) {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
