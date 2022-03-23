//Error (init The Fields)!!!
// class Person1 {
//     public id:number;
//     public name:string;
//     public active:boolean;
//     public fullName:string;
//     public emailAddress:string;
// }

import { ModuleWithProviders } from "@angular/core";

/*****************************************************/

// class Person1 {
//     public id:number;
//     public name:string;
//     public active:boolean;
//     public fullName:string;
//     public emailAddress:string;

//     public constructor(id:number,name:string,active:boolean,fullName:string,emailAddress:string){
//         this.id = id,
//         this.name = name;
//         this.active = active;
//         this.fullName = fullName,
//         this.emailAddress = emailAddress;
//     }
// }

/*****************************************************/

/*****************************************************/

//Use export Keyword For Use This class In Another Classes And Files

// export class Person  {
//     public id:number;
//     public name:string;
//     public active:boolean;
//     public fullName:string;
//     public emailAddress:string;

//     public constructor(id:number,name:string,active:boolean,fullName:string,emailAddress:string){
//         this.id = id,
//         this.name = name;
//         this.active = active;
//         this.fullName = fullName,
//         this.emailAddress = emailAddress;
//     }
// }

/*****************************************************/

import * as Models from '../interfaces/Person';
export class Person implements Models.Person {
    public id:number;
    public name:string;
    public active:boolean;
    public fullName:string;
    public emailAddress:string;

    public constructor(id:number,name:string,active:boolean,fullName:string,emailAddress:string){
        this.id = id,
        this.name = name;
        this.active = active;
        this.fullName = fullName,
        this.emailAddress = emailAddress;
    }
}

/*****************************************************/
