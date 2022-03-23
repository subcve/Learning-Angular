// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angular-app';
// }

/******************************************************/

// import { Component } from "@angular/core";

// @Component({
//   selector:'app-root',
//   template:'<h1>Hello World !</h1>',
// })
// export class AppComponent{
//   title = 'angular-app'
// }

/******************************************************/

// import { Component } from "@angular/core";

// @Component({
//   selector:'app-root',
//   template:'<h1>Hello World !</h1>',
//   styles:[
//     'h1 {text-align: center;}',
//     'h1 {color:red;}',
//   ]
// })
// export class AppComponent{
//   title = 'angular-app'
// }

/******************************************************/

// import { Component } from "@angular/core";

// @Component({
//   selector:'app-root',
//   templateUrl:'./app.component.html',
//   styleUrls:['./app.component.css'],
// })
// export class AppComponent{
//   title = 'angular-app'; //How Compiler Write => public title : string  = 'angular-app'
//   public constructor(){
//     Last initial And Value
//     this.title = `test`;
//   }
// }

/******************************************************/

//For Use ngModel => Should Be Write Folowing Codes In app.module.ts

//import { FormsModule } from '@angular/forms';
//imports: [
//  FormsModule,
//  ...,
//  ..,
//],

// import { Component } from "@angular/core";

// @Component({
//   selector:'app-root',
//  template:`
//     <label>Enter Your Text : </label>
//     <input type="text" [(ngModel)]="title">
//     <h1>{{ title }}</h1>
//  `,
// })
// export class AppComponent{
//   title = ""
// }

/******************************************************/

// import { Component } from "@angular/core";

// @Component({
//   selector:'app-root',
//   templateUrl:'./app.component.html',
//   styleUrls:['./app.component.css',],
// })
// export class AppComponent{
//   constructor() {
//     this.title = "Preview"
//   }
//   public title:string; //should be Init (In Constractor)
// }

/******************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//         <li *ngFor="let item of Items">{{ item }}</li>
//     </ul>
// `,
// })
// export class AppComponent {
//   constructor() {
//     this.title = "Perview";
//sign a Field
//     this.Items =[];
//       for (let index = 1; index <= 10; index++) {
//         this.Items.push(`Person` + index);
//       }
//     }
//   public title:string;
//   public Items:string[];
// }

/******************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <label>Display</label>
//     <input type="checkbox" [(ngModel)]="display">
//     <ul *ngIf="display">
//         <li *ngFor="let item of Items">{{ item }}</li>
//     </ul>
// `,
// })
// export class AppComponent {
//   constructor() {
//     this.display = true;
//     this.Items = [];
//     this.title = 'Perview';
//     for (let index = 1; index <= 10; index++) {
//       this.Items.push(`Person` + index);
//     }
//   }
//   public title: string;
//   public Items: string[];
//   public display: boolean;
// }

/******************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <label>Display</label>
//     <input type="checkbox" [(ngModel)]="!display">
//     <ul [hidden]="display">
//         <li *ngFor="let item of Items">{{ item }}</li>
//     </ul>
// `,
// })
// export class AppComponent {
//   constructor() {
//     this.display = true;
//     this.Items = [];
//     this.title = 'Perview';
//     for (let index = 1; index <= 10; index++) {
//       this.Items.push(`Person` + index);
//     }
//   }
//   public title: string;
//   public Items: string[];
//   public display: boolean;
// }

/******************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: ` <h1>Lesson 2 First Code</h1> `,
// })
// export class AppComponent {
//   title = 'Lesson 2';
//}

/******************************************************/

//Person1 Not Found ...

// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   template: ` <h1>{{person.name}}</h1><h1>{{person.age}}</h1>`,
// })
// export class AppComponent {
//   public constructor(){
//     this.person = new Person1()
//   }
//   public person:Person1;
// }

/******************************************************/

// import { Component } from '@angular/core';
// Use This Code For Founding Person1
// import { Person1 } from './models/Person1';
// @Component({
//   selector: 'app-root',
//   template: ` <h1>{{person.name}}</h1>`,
// })
// export class AppComponent {
//   public constructor(){
//     this.person = new Person1()
//   }
//   public person:Person1;
// }

/******************************************************/

// import { Component } from '@angular/core';
// import { Person } from './models/Person';

// @Component({
//   selector: 'app-root',
//   template: ` <h1>{{person.name}}</h1>`,
// })
// export class AppComponent {
//   public constructor(){
//     this.person = new Person(1,'Peyman',true,'PeymanAbedi','Peyman@Abedi.com')
//   }
//   public person:Person;
// }

// /******************************************************/

// import { Component } from '@angular/core';
// import * as Intefaces from './interfaces/Cart';
// import * as Models from './models/Cart';
// import * as Intefaces from './interfaces/Person'
// @Component({
//   selector: 'app-root',
//   template: ` <table class="table table-dark table-striped">
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th>Price</th>
//         <th>Count</th>
//         <th>Total</th>
//         <th>Func</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr *ngFor="let item of Items">
//         <td>{{ item.id }}</td>
//         <td>{{ item.name }}</td>
//         <td>{{ item.price }}</td>
//         <td>{{ item.count }}</td>
//         <td>{{ item.getTotalPrice() }}</td>
//         <td>
//           <button
//             type="button"
//             class="btn btn-success"
//             (click)="item.plus()"
//           >
//             +
//           </button>
//           &nbsp;
//           <button
//             type="button"
//             class="btn btn-danger"
//             (click)="item.minus()"
//           >
//             -
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td colspan="5">PayAmount</td>
//         <td>{{getSubTotal()}}</td>
//       </tr>
//     </tbody>
//   </table>`,
// })
// export class AppComponent {
//   public constructor() {
//     this.Items = [
//       new Models.Cart(1, 'Product1', 10),
//       new Models.Cart(2, 'Product2', 20),
//       new Models.Cart(3, 'Product3', 30),
//     ];
//   }
//   getSubTotal():number{
//     let total = 0;
//     for (let index = 0; index < this.Items.length; index++) {

//       let currentItem = this.Items[index];
      
//       total += currentItem.getTotalPrice();
//     }
//     return total;
//   }
//   public Items: Intefaces.Cart[];
// }

/***********************************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector:'app-root',
//   template:`
//     <h1>Two Way Binding</h1>
//     <h2>{{input1}}</h2>
//     <input type="text" class="form-controle" [(ngModel)]="input1">
//     <hr>
//     <h1>One Way Binding</h1>
//     <h2>{{input2}}</h2>
//     <input type="text" class="form-controle" [ngModel]="input2">
//     &nbsp;
//     <button type="button" class="btn btn-primary">Submit</button>
//   `
// })
// export class AppComponent{
//   input1 = 'input1';
//   input2 = 'input2';
// }

/************************************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector:'app-root',
//   template:`
//     <h1>Two Way Binding</h1>
//     <h2>{{input1}}</h2>
//     <input type="text" class="form-controle" [(ngModel)]="input1">
//     <hr>
//     <h1>One Way Binding</h1>
//     <h2>{{input2}}</h2>
//     <input type="text" class="form-controle" [ngModel]="input2">
//     &nbsp;
//     <button type="button" class="btn btn-primary" (click)="changeInput()">Submit</button>
//   `
// })
// export class AppComponent{
//   input1 = 'input1';
//   input2 = 'input2';
//   changeInput():void{
//     this.input2 = 'Message Changed !!!'
//   }
// }


/************************************************************************/

// import { Component } from '@angular/core';

// @Component({
//   selector:'app-root',
//   template:`
//   <ng-container>{{message}}</ng-container>
//   `
// })
// export class AppComponent{
//   message = 'Hello World'
// }

/************************************************************************/

import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:`
  <h1>{{message}}</h1>
  `
})
export class AppComponent{
  message = 'Lesson 3'
}