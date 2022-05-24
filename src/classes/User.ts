class User{
   name:string;
   email:string;
   password:string;
   phoneNumber:string;
   address:string;
   booksIds:[];

   constructor(name:string,email:string,password:string,phoneNumber:string,address:string,booksIds:[]){
      this.name = name;
      this.email = email;
      this.password = password;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.booksIds = booksIds;
   }

   login(user:string,password:string) {
      
   }

   logout(){

   }

}

module.exports = User;