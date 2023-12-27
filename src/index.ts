import {Dog} from "./Dog";
import ShelterDog from "./ShelterDog";

import {add, multiply, devide} from "./utils";


console.log("FROM INDEX FILE");


const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

console.log(add(6,45));
console.log(multiply(7,5));
console.log(devide(5,6));


const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Springs Shelter");