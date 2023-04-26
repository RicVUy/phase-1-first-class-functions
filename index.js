function eatRice(){
    console.log("Eat that rice");
}
function eatVegetables(){
  console.log("Eat that vegetables");
}
function receivesAFunction(viand){
     eatRice();
     viand();
}
 function Monday() {
  receivesAFunction(eatVegetables);
 }
 
 function returnsANamedFunction (){
   /*let toDo;
      if (work === heavy){
        toDo = "watch tv";
      }
       else { (work === light)
        toDo = "washDishes";
       }*/
       console.log('I will not work');
   // receivesAFunction(viand);
   
   return function complain() {
     console.log("I am so tired to work!");
   };
    
 }
 const x = returnsANamedFunction();
 console.log(x);
 x();

 function returnsAnAnonymousFunction() {
     console.log('I will not study!');

     return function() {
      console.log('I will have a grade of F');
     };
 }
 const y = returnsAnAnonymousFunction();
 console.log(y);
y();