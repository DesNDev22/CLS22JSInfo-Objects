//Create an empty object user.
let emptyObject = {}
//Add the property name with the value John.
emptyObject.name = 'John'
//Add the property surname with the value Smith.
emptyObject.surname = 'Smith'
//Change the value of the name to Pete.
emptyObject.name = 'Pete'
//Remove the property name from the object.
delete emptyObject.name

//Check for emptiness
const isEmpty = object => {
    let empty = true
    for (key in object) {
        empty = false
    }
    return empty
}

let schedule = {}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0

for (key in salaries) {
    sum += salaries[key]
}
alert(sum)

//Multiply numeric property values by 2
const multiplyNumeric = object => {
    for (key in object) {
        typeof(object[key]) == "number" ? object[key] *= 2 : ''
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
/*
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/