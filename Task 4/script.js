class uber{
    constructor(kilometer, petrol, milage,updown, liter, rate){
      this.kilometer=kilometer;
      this.petrol=petrol;
      this.milage=milage;
      this.updown=updown;
      this.liter=liter;
      this.rate=rate;
    }
    getKilometer(){
      return this.kilometer;
    }
    getPetrol() {
      return this.petrol;
    }
    getMilage() {
      return this.milage;
    }
    getUpdown(){
       return this.kilometer*2;  
    }
  
    getLiter(){
       return  this.kilometer*2/this.milage;
    }
    getRate(){
    return this.kilometer*2/this.milage*this.petrol
    }
  }
    var calculate=new uber(50, 120, 10);
    console.log("Calculate the UberPrice")
    console.log("Enter the kilometer(only up) : ", calculate.getKilometer());
    console.log("Enter the Petrol Rate(today) : ", calculate.getPetrol());
    console.log("Enter the Milege(vehicle) : ", calculate.getMilage());
    console.log("You can pay the Price : ", calculate.getRate());