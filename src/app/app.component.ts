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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>Lesson 2 First Code</h1> `,
})
export class AppComponent {
  title = 'Lesson 2';
}
