class person{
    constructor(...name){
      this.firstName=name[0];
      this.lastName=name[1];
      this.age=name[2];
      this.email=name[3];
      this.mobilno=name[4];
    }
    getFirstName(){
      return this.firstName;
    }
    getLastName(){
      return this.lastName;
    }
    
    getAge(){
      return  this.age;
      
    }
    getEmail(){
      return  this.email
    }
    
    getMobilNo(){
    return  this.mobilno;
    }
  }
    
    var biodata=new person("Meera", "GJM", 27, "meeragjm95@gmail.com", 8976054321);
    console.log("FirstName :", biodata.getFirstName());
    console.log("LastName :", biodata.getLastName());
    console.log("Age :", biodata.getAge());
    console.log("Email :", biodata.getEmail());
    console.log("MobilNo :" ,biodata.getMobilNo());