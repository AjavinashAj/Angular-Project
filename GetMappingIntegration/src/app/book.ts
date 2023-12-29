export class Book {

    bookId:number;
    bookName:string;
    bookPrice:number;
    bookIsbn:string;

     constructor(a:number,b:string,c:number ,d:string){
        this.bookId = a;
        this.bookName = b;
        this.bookPrice = c;
        this.bookIsbn=d;
    }
}
