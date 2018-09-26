//"use strict";

//FUNCTIONS
// ES5
var es5func = function (a, b) { return a * b }
// ES6
const es6func = (a, b) => { return a * b };
const es6funcDefaultParameters = (a = 3, b = 3) => { return a * b };
const es6funcSingleParameter = a => { return a * a };
const es6funcNoReturn = a => a * a;
console.log("ES5FUNC: " + es5func(4, 5));
console.log("ES6FUNC: " + es6func(4, 5));
console.log("ES6FUNCDEFAULTPARAMETERSNONE: " + es6funcDefaultParameters());
console.log("ES6FUNCDEFAULTPARAMETERSSOME: " + es6funcDefaultParameters(4, 5));
console.log("ES6FUNCSINGLEPARAMETER: " + es6funcSingleParameter(4));
console.log("ES6FUNCNORETURN: " + es6funcNoReturn(4));

//CLASSES & INHERITANCE
class Person {
	constructor(name) { this.name = name }
	hello() { return 'Hello, I am ' + this.name + '.' }
}
class Actor extends Person {
	hello() { return super.hello() + ' I am an actor.' }
}
const actor = new Actor('Jim Wilson')
console.log(actor.hello());

//MODULES
/*
import exportedObject1 as eo1 from "./ExamplesModule";
import exportedFunction1 as ef1 from "./ExamplesModule";
import exportedFunction2 as ef2 from "./ExamplesModule";
*/
const myModule = require('./ExamplesModule');
console.log("" + myModule.eo1.getName1);
console.log("" + myModule.eo1.getName2());
myModule.eo1.logName();
myModule.ef1();
myModule.ef2();

//ARRAYS
const numbers = [2, 4, 8, 10];
const numbersHalved = numbers.map(value => value / 2);
console.log("ARRAYMAP: " + numbersHalved);
const numbersAbove5 = numbers.filter(value => value > 5);
console.log("ARRAYFILTER: " + numbersAbove5);
const numbersSum = numbers.reduce((sum, value) => sum + value);
console.log("ARRAYREDUCE: " + numbersSum);
const numbersJoined = numbers.join(" / ");
console.log("ARRAYJOIN: " + numbersJoined);
const numbersSpread = [...numbers, ...numbers];
console.log("ARRAYSPREAD: " + numbersSpread);

//CALLBACK FUNCTIONS
const callback = (message) => { console.log(message); }
const func1 = (text, cb) => {
	cb(text);
};
func1("This is some text!!!", callback);

const callbackHell = () => {
	console.log('1. First function sets up second function');
	setTimeout(function () {
		console.log('2. Second function sets up third function');
		setTimeout(function () {
			console.log('3. Third function finishes');
		}, 2000);
	}, 2000);
};
callbackHell();

//PROMISES
const promise1 = new Promise((resolve, reject) => {
	return resolve({ message: '***Resolved***' });
	//return reject( new Error('***Rejected***') );
});
promise1
	.then((resolve) => console.log(resolve.message))
	.catch((reject) => console.log(reject.message));

const willIGetReward = new Promise((resolve, reject) => {
	true ? resolve({ reward: 'candy' }) : reject(new Error('***You do not deserve any reward***'))
});
willIGetReward
	.then(resolved => console.log('***You got ' + resolved.reward + '***'))
	.catch(rejected => console.log(rejected.message));

const callbackHellPromises = () => {
	new Promise((resolve) => {
		console.log('1. First function sets up second function!!!');
		setTimeout(resolve, 2000);
	})
		.then(() => new Promise((resolve) => {
			console.log('2. Second function sets up third function!!!');
			setTimeout(resolve, 2000);
		}))
		.then(() => new Promise(() => {
			console.log('3. Third function finishes!!!');
		}))
		.catch(error => {
			console.log('Error occured!!!');
		})
};
callbackHellPromises();

//ASYNC & AWAIT
const asyncAwait = async () => {
	try {
		await new Promise((resolve) => {
			console.log('1. First function sets up second function...');
			setTimeout(resolve, 2000);
		});
		await new Promise((resolve) => {
			console.log('2. Second function sets up third function...');
			setTimeout(resolve, 2000);
		});
		await new Promise((resolve) => {
			console.log('3. Third function finishes...');
		});
	}
	catch (error) {
		console.log('Error occured!!!');
	}
};
asyncAwait();

//CLOSURE
const add = (() => {
	let counter = 0;
	return function () { counter += 1; return counter }
})();
console.log("ADD: " + add());
//console.log(counter);

const counterModulePattern = () => {
	let counter = 0;
	return {
		increment: () => { counter++; },
		decrement: () => { counter--; },
		value: () => { return counter; }
	}
};
const counter1 = counterModulePattern();
const counter2 = counterModulePattern();
console.log(counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());
console.log(counter2.value());

//THIS
const globalScope = this;
console.log("GlobalScope: " + this);

const regularFunctionScope = function () { return this; };
console.log("RegularFunctionScope: " + regularFunctionScope());

const arrowFunctionScope = () => { return this; };
console.log("ArrowFunctionScope: " + arrowFunctionScope());

class Obj {
	constructor() { this.theClass = this; }
	func() { return this.theClass; }
	check() { return true; }
}
const obj = new Obj();
console.log("ConstructorScope: " + obj.theClass.check());
console.log("MethodScope: " + obj.func().check());

//BIND
const person1 = { name:"Steven" };
const greeting1 = function(place){ return "welcome " + this.name + ", to " + place; };
const person1Greeting = greeting1.bind(person1, "right here");
console.log(person1Greeting());

//CALL
const person2 = { name:"Stephen" };
const greeting2 = function(place){ return "welcome " + this.name + ", to " + place; };
const person2Greeting = greeting2.call(person2, "right here");
console.log(person2Greeting);

//APPLY
const person3 = { name:"Stephan" };
const greeting3 = function(place){ return "welcome " + this.name + ", to " + place; };
const person3Greeting = greeting3.apply(person3, ["right here"]);
console.log(person3Greeting);

//ARRAY FILTER CALLBACK FUNCTION
const names1 = ["Franco", "Alberto", "Miguel", "Jose", "Fernando", "Pepe", "Manuel"];
const names2 = ["Franco", "Alberto", "Miguel", "Jose", "Fernando", "Pepe"];
function myFilter(array, callback)
{
	let arrayFiltered = [];
	for(let index = 0; index < array.length; index++)
	{
		if(callback(array[index],index,array))
		{
			arrayFiltered.push(array[index]);
		}
	}
	return arrayFiltered;
}
const filter1 = (element, index, array) => {
	if (element.length > 4 || index % 2 == 0 || array.length % 2 == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
};
console.log(myFilter(names1, filter1));
console.log(names1.filter(filter1));
console.log(myFilter(names2, filter1));
console.log(names2.filter(filter1));