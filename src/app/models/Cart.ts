import * as interfaces from "../interfaces/Cart";
export class Cart implements interfaces.Cart{
    public constructor(id: number,name: string,price: number){
        
        this.id = id;
        this.name = name;
        this.price = price;

    }
    plus(): void {
        if(this.count < 10){

            this.count ++;

        }
    }
    minus(): void {
        if(this.count > 0){

            this.count --;
            
        }
    }
    getTotalPrice(): number {
        if(this.count > 5){
            
            let res = this.price * this.count;
            res *= 0.95;
            return res;

        }
        else{
            
            let res = this.price * this.count;
            return res;

        }
    }
    id: number;
    name: string;
    price: number;
    count: number = 0;
}