export class Product{

    private pid:string;
    private pname:string;
    private price:string;

    constructor(pid:string,pname:string,price:string){
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
}