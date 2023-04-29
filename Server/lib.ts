/** LIBRARY SYSTEM
 ** Implement the Book feature
 ** Implement the Author feature 
 */ 



 type Gender = "MALE" | "FEMALE";
 type Category = "Non-Fiction" | "Fiction" | "Mystery" | "Romance";
//  type Authors = string[];

 class Authors {
    private authorFirstName: string;
    private authorLastName: string;
    private authorEmail: string;
    private authorPhoneNumber: string;
    constructor(authorFirstName: string, authorLastName: string, authorEmail: string, authorPhoneNumber: string){
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.authorEmail = authorEmail;
        this.authorPhoneNumber = authorPhoneNumber;
    }
 }

 class Books {
    private bookName: string;
    private bookAuthors: Authors;
    private quantity: string;
    private category: Category;
    private datePublished: Date;
    constructor(bookName: string, bookAuthors: Authors, quantity: string, category: Category, datePublished: Date){
        this.bookAuthors = bookAuthors;
        this.bookName = bookName;
        this.quantity = quantity;
        this.category = category;
        this.datePublished = datePublished;
    }

 }

 class Librarian {
     private firstName: string;
     private lastName: string;
     private email: string;
     private gender: Gender;
     private phoneNum: string;
 
     constructor(firstName: string, lastName: string, email: string, gender: Gender, phoneNum: string){
         this.firstName = firstName;
         this.lastName = lastName;
         this.email = email;
         this.gender = gender;
         this.phoneNum = phoneNum;
     }
 
 
     get fullName(): string{
         if(this.gender === "MALE"){
             return `Mr. ${this.firstName} - ${this.lastName}`;
         }else{
             return `Mrs. ${this.firstName} - ${this.lastName}`;
         }
       
     }
 }
 
 
 
 
 
 
 class Library {
     private name: string;
     private books: Array<Books>; //TODO
     private librarians: Librarian []; //TODO
 
     constructor(name: string){
         this.name = name;
         this.books = [];
         this.librarians = [];
     }
 
 
     // TODO
     assignLibrarian(librarian: Librarian){
         this.librarians.push(librarian);
         return this.librarians;
 
 
     }
 
     addBooks(){
 
     }
 
     addBook(name: string){
         this.books.push(name)
     }
 
     get libraryName(): string{
         return this.name;
     }
 
     get libraryBooks(): string[]{
         return this.books;
         
     }
 
     get librariansName(){
         return this.librarians;
     }
 
 
 }
 
 
 const mainLib = new Library("Main");
 
 const olaide = new Librarian('olaide', 'ojuolape', 'ojuolapeolaide92@gmail.com', "FEMALE", "+23429299269");
 const hanif = new Librarian('hanif', 'kanif ', 'hanif@gmail.com', "MALE", "+23429299269");
 const gwen = new Librarian('gwen', 'ochayan', 'gwen@gmail.com', "FEMALE", "+23429299269");
 const olympia = new Librarian('olympia', 'the great', 'olympia@gmail.com', "FEMALE", "+23429299269");
 
 
 
 
 const librarians = mainLib.assignLibrarian(olaide);
 // console.log(mainLib);
 mainLib.assignLibrarian(gwen);
 mainLib.assignLibrarian(hanif);
 mainLib.assignLibrarian(olaide);
 console.log(mainLib);
 
 mainLib.addBook("Singles don't do that");
 console.log(mainLib)