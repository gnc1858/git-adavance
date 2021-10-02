console.log("Here we are")

class Animal{
   constructor(name){
      this.name=name
   }

   presentAnimal(message){
     console.log(`The ${this.name} says : ${message}`)
   }

}


let eagle=new Animal("eagle");
eagle.presentAnimal("I love flying, I have sharp eyes")


