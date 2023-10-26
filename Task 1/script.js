class movie{
    constructor(title, studio, rating){
      this.title=title;
      this.studio=studio;
      
      if(rating==undefined)
      {
        this.rating="PG";
      }
      else
      {
        this.rating=rating;
      }
    }
     
    getPG(ipArr)
    {
      var arr=[];
      for(var i=0; i<ipArr.length; i++){
        if(ipArr[i].rating=="PG-13"){
          arr.push(ipArr[i]);
        }
      }


      return arr;
    }
  }


      let movie1=new movie("Fast & Furious", "Universal Pictures");
      let movie2=new movie("Blade", "Marvel");
      let movie3=new movie("Casino Royale", "Eon Productions", "PG-13");
    let r=[movie1, movie2, movie3]
    console.log(movie1.getPG(r));
      let flim=new movie;("Casino", "Eon Productions", "PG-13");
     