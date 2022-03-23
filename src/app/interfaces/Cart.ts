export interface Cart{
    id:number;
    name:string;
    price:number;
    count:number;

    getTotalPrice():number;
    plus():void;
    minus():void;
}