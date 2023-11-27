//image is from https://laughingsquid.com/know-your-cephalopods/

function buildAppendages(numArms){
    //we store how many we are building
    return function(hasSuckers){
        let suckerState="with no suckers";
        if(hasSuckers==true){
            //if they have suckers they could still be tentacles or arms
            return function(suckerLocation){
                //if the sucker location is at the ends, tentacles
                if(suckerLocation=="ends"){
                    suckerState="with suckers at the ends"
                    return `${numArms} tentacles ${suckerState}`;
                }else{
                    //otherwise arms
                    return `${numArms} arms`;
                }
            }
        }else{
            //if no suckers, they are tentacles
            return `${numArms} tentacles ${suckerState}`;
        }
    }
}

let tentacles = buildAppendages(10)(true)("ends");
console.log(tentacles);
let arms = buildAppendages(8)(true)();
console.log(arms);

function buildCephalopod(speciesName){
    return function(hasShell){
        return function(description){
            return function(mood){
                return function() {
                    let output = {};
                    output.name = speciesName;
                    output.hasShell = hasShell;
                    output.arms = arguments[0];
                    output.tentacles = arguments[1];
                    output.description = description;
                    output.mood = mood;
                    return output;
                }
            }
        }
    }
}
/** 
* * Q1. update the buildCephalopod function to take in a description in a curried layer
* * (2 marks)
**
*/
/** 
* * Q2.  update the buildCephalopod function to take in a mood in a curried layer in the form of a number from 0 to 1
* * (2 marks)
*/

/** 
* * Q3.  Build 2 cephalopods from the image in the project using the functions listed above
* * (10 marks)
*/
        let spiida = buildCephalopod("spiida")(false) ("Master of camouflage") (0.5)(
            buildAppendages(8)(true)( ), 
            buildAppendages(2)(true)( ));
            console.log(spiida);

        let belemnoidea = buildCephalopod("belemnoidea")(false) ("You will get Hooked") (0.7)(
            buildAppendages(10)(true)(), 
            buildAppendages(0)(true)());
            console.log(belemnoidea);




/** 
* * Q4. Invent 2 cephalopods and make instances of them from the functions above
* * (10 marks)
*/
    let kunjaavaa = buildCephalopod("Kunjaavaa")(false) ("Gives me some food") (0.9)(
        buildAppendages(10)(true)(),
        buildAppendages(8)(true)("ends"));
        console.log(kunjaavaa);

    let  scooobaa = buildCephalopod("scooobaa")(false) ("Gives you Java Script Knowledge") (0.2)(
        buildAppendages(100000)(true)(), 
        buildAppendages(80000)(true)("ends"));
        console.log(scooobaa);


/**
* * Q5.  Make a function called petCephalopod, which will use the mood value of an instantiated cephalopod and math.random().  

* * petCephalopod must:
* * a.  return a phrase to be console logged
* * b.  if mood is equal to or greater than the math.random() use template literals to show the name of the cephalopod, its mood, and that it liked being petted
* * c.  if the mood is less than math.random(), return a phrase with the name of the cephalopod, showing the animal biting and being mad
* *(5 marks)
*/

function petCephalopod(cephalopod) {
    let randomValue = Math.random();
  
    if (cephalopod.mood >= randomValue) {
      return `${cephalopod.name} is in a good mood (${cephalopod.mood}) and enjoys being petted.`;
    } else {
      return `${cephalopod.name} is in a bad mood (${cephalopod.mood}) and bites you! Move away fast.`;
    }
  }
  
let  myPetcephalo = {name: "Sepiolida", hasShell:"No Shell", mood: 0.8  }

console.log(petCephalopod(myPetcephalo));
console.log(petCephalopod(kunjaavaa));


/**
* *Q6. run the petCephalopod function on each cephalopod you invented using apply, call and bind. Be sure to console log each result.
* *(20 marks)
*/


let kunjaavaaApply = petCephalopod.apply(null, [kunjaavaa]);
console.log(("Apply : "),kunjaavaaApply);
 

let scooobaaApply = petCephalopod.apply(null, [scooobaa]);
console.log(("Apply : "),scooobaaApply);
 
let kunjaavaacall = petCephalopod.call(null, kunjaavaa);
console.log(("Call : "),kunjaavaacall);
 

let scooobaacall = petCephalopod.call(null, scooobaa);
console.log(("Call : "),scooobaacall);
 
let BindKunjaavaa = petCephalopod.bind(null,kunjaavaa);
let BindOutput  = BindKunjaavaa();
console.log(("Bind :"),BindOutput);

let Bindscooobaa = petCephalopod.bind(null,scooobaa);
let BindOutput2  = Bindscooobaa();
console.log(("Bind :"),BindOutput2);