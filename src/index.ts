let myName: string = "Ivan Muhammad Mufid";
let userName: number = 123;
let isActive: boolean = true;

//multitype
let address: string | number | boolean;
address = "39A Casablanca";

//any
let myGrade = "A";

//common array
let favFood: string[];
favFood = ["Noodle", "Rice"];

//tuple array
let myTask: [string, number, boolean];
myTask = ["Ivan", 20, true];

//custom type object
type Friend = {
  name: string;
  age: number;
  isDead?: boolean; //using "?" means optional => not error if value doesn't exist
};
let myFriend: Friend;

myFriend = {
  name: "Bara",
  age: 22,
};

//function
function create() {
  return {
    message: "Hello Ivan",
  };
}
/*if you wanna return with a specifyc type..like string, number, boolean, etc
function create():string {
  return "Hello Ivan"
}
*/

//arrow function
const update = (): string => {
  return "Your name still Ivan";
};

const result = update();
/*if you wanna return as an object
const update = () => {
  return {
    message: "Your name still Ivan",
  };
}
*/

function add(x: number, y: number): void {
  const z = x + y;
  console.log("Your final result: " + z);
}

//interface
type GearTotal = 6 | 12 | 16 | "Zero Gear";
type Power = "Super" | "Normal";

type Gear = GearTotal | Power;
//you can use "&" it means yout must put both of type

interface Bike {
  brand: string;
  baseModel: string;
  modelName: string;
  transmission: Gear;
  unit: number;
}

interface Road extends Bike {
  tires: string;
}

interface Mountain extends Bike {
  suspension: string;
}

function trans(tBike: Road): void {
  console.log(
    `Your bike's brand is ${tBike.brand}, with a base model ${tBike.baseModel}, as a ${tBike.modelName}, in ${tBike.unit} unit, up to ${tBike.transmission} gear power, with ${tBike.tires} tires`
  );
}

const roadBike: Road = {
  brand: "polygon",
  baseModel: "mountain-bike",
  modelName: "polygon-mountain298",
  unit: 1,
  transmission: "Super",
  tires: "Soft",
};

console.log({ myName });
console.log({ userName });
console.log({ isActive });
console.log({ address });
console.log({ myGrade });
console.log({ favFood });
console.log({ myTask });
console.log({ myFriend });
console.log(create());
console.log(result);
add(10, 20);
trans(roadBike);
