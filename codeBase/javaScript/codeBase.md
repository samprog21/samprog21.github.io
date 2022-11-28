

## what is javascript ?
#### high-level
- does not need to worry about memory management. 
#### Object-oriented
#### Multi_paradigm
- can use different styles of programming


## variable names
#### can only contain

- numbers (but can not start with numbers)
- letters
- underscores`-`
- dollar signs `$`
- use cammel case.

#### can not contain

- reserved js `keywords`
- dont use `name` keyword
- dont start with upper case numbers
- if its a constant write in UPPER Case
	```js
	let PI = 3.1415
```


## Objects and primitives

### value

- is either ==Object==
- or ==Primitive== data types
- if it is not Primitive its an Object.

### 7 primitive data types.

#### number
- in js a number is always floating point[^1] number.

#### String

#### Boolean

#### undefined
- Value is taken but  not defined

#### Null
- empty value

#### Symbol

#### Bigint

```ad-note
title: in js **Value** holds types not *variables*.

```

- ==typeof== operator shows type of value or variable.
```ad-note
title: a Bug
- in Js leggendary bug shows **(typeof null)** is an *Object*

```


[^1]: contains decimal


## let , const and var

#### let

- let is ==block scope==.

- *let* and *const* was introduced in ES6.
```ad-note
- **mutable** means its value can change.

```

#### const

- cant be changed
- i.e **Immutable**
- is static + 

#### var

- is **mutable**
- is ==function scope==

```ad-note
title: without declaration
- variable used without declaration i.e without using *let,const or var* makes that variable
**global scoped**
```js
firstName = `sam`;
```
```


## type conversion and Coercion

### type conversion
- is when we explicitly convert types
- from string to number
-  (==Number==(**input**));
- (==Number==(**“sam”**)); // *NaN* 
```ad-note
title: **Typeof** *NaN*
- is a number

```
- from number to string
- (*String*(**23**));

```ad-note
- `+` operator triggers conversion from Number to String
-  `-` operator triggers conversion from Strings to Number

```
```js
console.log(`i am` + 23 + `years old`); // i am 23 years old
console.log( `23` - `10` - 3 ); // 23103
console.log(`10` + 23 + `5`); // 38
```
 - type coersion is when javascript automatically converts types.


## 5 falsy values
- these values will be *false* when converted to Boolean
-  0
- empty string
- undefined
- null
- NaN


## Conditional Ternary operator

#### expression
- is something that produces **value**
	ex. ==13 + 5== , ==1994==

- ternary operator is used to replace if..else
```js
const drink = age >= 18 ? `wine` : `water` ;
// (Condition) ? (if..block) : (else..block) ;
```
- ternary operator can be used in template literals
- If..else cant be used in template literals.
```JavaScript
let age = 23;
console.log(`   I like to drink ${ age >= 18 ? 'wine' : 
 `water`}`);
```


## function expression
### Annonymous function 
```js
const calcAge = function(birthyear){
console.log(birthyear);
return 2037 - birthyear;
}
const age2 =calcAge(1988);
console.log(age2);
```

- function is a value that can be stored in a variable.
- function can be called above and declare later.


# Arrow Function

### Arrow function with single statement
```js
const maage = (clacAges) => 2037 - clacAges;
```
***

### Arrow function with multiple lines
```js

const yourAge = (cyage, birthyear) => {
	const agecalculator = birthyear + cyage;
	console.log(agecalculator);
	return agecalculator;
};
yourAge(1990,2000);
yourAge(1960,2020);
yourAge(1930,2060);

```


## example cutting fruits
```js
let fruitCutter = (jar1) => {
	return (jar1 = jar1 * 4);
};

let JuiceMaker = (kiwi, lichy) => {
	const kiwiPlate = fruitCutter(kiwi);
	const lichyPlate = fruitCutter(lichy);

	console.log(`Juices of ${kiwiPlate} 
	kiwi and ${lichyPlate} lichy is ready`);
};

JuiceMaker(3, 5);

```



### review
![](https://i.imgur.com/NOV1eX4.jpg)

***




# using ==new== keywords

```js
const years = new Array(1991,1984,1330);
console.log(years);
```

# replacing element in array

```js
const friends = ["sam" ,"john","mac","rine"];
console.log(friends);
friends[2]="romeo";
console.log(friends);
```

```ad-note
- Array can be mutated even if it was declared with *const* keyword.
- but entire array cant be replaced.

```


 # Adding elements

### push (==adds last==)

```js
const friends=['jake','james','jill'];
friends.push('zoya');
console.log(friends);
```

### unshift (==adds first==)

```js
const friends=['jake','james','jill'];
friends.unshift('Lombard');
console.log(friends);
```

 # remove Elements

### pop (removes last & ==returns==)

```js
const friends=['jake','james','jill'];
const popped = friends.pop();
console.log(friends);
console.log(popped);

```

### shift (removes first & ==returns==)

```js
const friends=['jake','james','jill'];
const shifted = friends.shift();
console.log(friends);
console.log(shifted);
```

#### includes method

- to check an element is available
- uses **strict** equality
- returns ==true== or **false**

```js
const friends=['jake','james','jill'];
console.log(friends.includes('jake'));
console.log(friends.includes('toy'));
console.log(friends.includes('toy'));
```

## bracket notation

```js
const jonas = {
firstname: 'sam',
lastname: 'oliver',
age: 2037-1991,
job:'developer',
friends:['anmmy','bulba','bath'],
};
console.log(jonas.age);
console.log(jonas['job']); // using barcket, key
const nameKey = 'name';
console.log(jonas['last'+ nameKey ]); //computed
```


## methods

```ad-note
title: Objects
- Objects can store all kinds of data or value
- *primitives*
- ==Arrays==
- another ==objects==
- ==functions== (which is called methods)

```

## functions inside objects(==methods==)

```js
const myDesk={
books:'oliver twist',
mobiles:'nokia',
pens:'rynolds',
//function is stored as key value pair as well
// start of function
myAge: function(birthyear){
return 2037 - birthyear;
},
// end of function
};
console.log(myDesk.myAge(1960));
// using bracket notation ->
console.log(myDesk['myAge'](1950));
```


## JavaScript is
- high level
	- no need for memory ==management==.
- prototype based object oriented
	- other than ==primitives== everything is object in JS
- multi paradigm
	- coding style 
		- procedural
		- object oriented
		- functional
- interpreted or
- just in time compiled
- Dynamic
	- can changed at runtimes
- single-threaded
-  garbage-collected
	- auto garbage collection
- with first class function
	- functions are treated as *values*
	- so it can pass and be returned from *functions*.
-  and non blocking
- event loop concurrency model
	- how to handle multiple tasks
		- threads are set of instructions
	- JavaScript is single threaded
	- can only handle single thread at a time
- JavaScript handles multiple threads with event loops


## JavaScript engine

![](https://i.imgur.com/p23BHrK.png)

## call stacks and heaps

![](https://i.imgur.com/3uNs03a.png)

- heap memory is unstructured memory

### compiler

![](https://i.imgur.com/0k1Dx4k.png)

- entire code is converted into machine code at once
- and written to a binary file
- computer executes binary file

### interpreter

![](https://i.imgur.com/bYBiPF9.png)

- it executes line by line
- interpreter  is slower than compiler

### JavaScript is ==Just-In-Time== compiled

![](https://i.imgur.com/WzQB0GD.png)

- source code is compiled into  machine code directly.
- there is no portable file
- then it is executed

## modern JIT of JavaScript

![](https://i.imgur.com/IcG8Kci.png)

- Optimization
![](https://i.imgur.com/ElqqzFC.png)

## JavaScript Runtime
![](https://i.imgur.com/jroi3gh.png)




# execution contexts and call stack

## execution context
- it is an environment where piece of JavaScript code
is executed.
- stores all necessary information for some code
to be executed.

<iframe frameborder="0" style="width:100%;height:757px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=000005&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7VtZc%2BI4EP41PIbyDX4MEGarNrOZqjzszqOwBWhiLK8srv31K9nyKRlzGSYVeEhwS9bR%2FfUndUv0zPFq942AaPkd%2BzDoGZq%2F65mTnmE4Q5v95YJ9KtCHlp5KFgT5QlYI3tF%2FUAg1IV0jH8aVihTjgKKoKvRwGEKPVmSAELytVpvjoNprBBZQErx7IJClfyOfLlOpaWpaUfAHRIul6NpyhuKVGfA%2BFgSvQ9FhzzDnySctXoGsMdFSvAQ%2B3pZE5kvPHBOMafpttRvDgCs301v63rShNB84gSE95gW6f9OM9fdvf%2F71Ct7m9j5688ZPxjBtZgOCNczmkYyW7jMV8UlGohokFO5UhgGzrLomD0zPp8twBPEKUrJnVbKGMl0LDNkD8bwtDGJbQrYs2WJgCyEQIFjkbRd6YF%2BEKk5Qi67QihOwbkdzzCbFcAa8tMD5d80NOIphIkYEJgjmf5b8KwEoLGpVFJsJeZNPceIZz6yCYUe7pGrxkrPg%2Fz0CAUWYNafhOXedAM9AkA1sRrJ6cAe9dVqxXsSMxexHswKmm3Q%2BaalkeQbZiH%2F11jP2b7RdIgrfo3TqW8YHTLakK6bZic674b4A%2FddZLsg95G1NAxRCIfcB%2BXhjzSDKLa71NbsqNBIprxlTgj9yx7S4slAQjHGASTJCczodj1%2BcvGapREs%2BvCTlHFvLZ6hAcRmtBxylEcOWDFlDBVlD6wqyRrsjt9gPxFHKsHO0g74A5hSsUMDNdBDgaV3B7oZ92B4VmxqyTR1nyj685gek3lKMLqdP3saCAB8xg2VvhZiDK2noXcw3xgHXV3cm16usZSogoNsKCOidsZbZxlqt3KM3cQ%2FFbAXQArhJln%2BPbQOO5RCSsoIwXAsEK0aumF9l2jvhc8RYx3GaUdgZ4gy7ijhHgThDgTizK8BZEuDm69DjS0%2F8BXAwnbquad4fB5ZxbxzY3RHPBhCU7C1ZjAG9ABAg4PVgn1ujrr7gqehHteB1BrubxC7XUNXRHpoLr64r50HVnVB1AxDuRsUDyc7lzVoRCaIwRip5hoovAAoeZxxiUpyHqNZlsWMDRvZVKLRBxu0s2aHKdtSsD0P%2FmWfbCu2UrH2m%2FXRbshJ3UW9NNgnO9MYQUK9YxyysA30p23ex%2F6qWtExGYMD2I5tqnyoDiR5%2BYJTshwSAngY1m8Z4TTwoapVzebUXndp7FJAFpNJ7CRzyWZ2PEFcCSGkv9gWYwnV5nukOey7TPWIjcdM9l65KMnwVsmiy1m3YQrdqYLDc89jDGLQ01DGd6HLe4IGh22DIbIpMTsWQVQdjvaGuMaTKOTwwdBcMnctDEoZuzUNyUPzA0I3WsqZk0slrmdXSUNcYkgPuB4ZuhCGnZvp6hHw0htyWhrrGkCqReVr%2B3NQa8ue%2FwAbEHkERVd0GOP4YL7k2UD0uDtCCgXLiMYxAwlP1LP5BHgieRcEK%2BT5%2FfUQgG6hIsnK4RVyRiWrtUc%2Be8LbWFItz%2BuLYX3G4WxfV%2FOEUX%2BpdPWbLrq%2FoihhNdRegu9srcrx%2BiJNYJB%2FHyGuIyyUiOZOwTDnSlgiL6Z3s%2F%2BEo6Q8ZsQrBz3LpZCdAlD7ty08%2FIEFMgxyMk8tpjU0lcftDir4n%2FRlDq99wIHwyAUpNHZthYhgC%2B1I14drNg64t1xn1FnBPW7wqv2ahyef1B72vVf1B6w9s%2BxyfgDtEUw%2BzxdPPUknREn%2FIGrrUj1IYHqjofgZ%2Fs2rbDUs%2Fe8vq9LWBW3zMqkvU272S69WjrZrryWGeoSnH1a2rymcRMYX87pH%2B6bYkiYffd0vSkPAzFEf3rsJzrK52KIacRRZmlpn5YeajzVyLY2zVDQ3tpna25YWWLSPZsQ4mdIkXOATBSyE9EMMW9V8xjoTwF6R0L2zBrXlg3b7uUt35sjhQW%2FvSfWONDJwbZ24NOesGNzBUxKcBM7J8O%2BX%2Bl9JvcmSpSWzUfGSpuBj%2FYo%2FHySXqhiNLwXkX3mxouyLtVqMKR3XXwbFlQuruHpShytcJ4BXJj1QQRyBUJl%2Faf5shgzmEW84W9d9msEmk3VS75u8d1fE5Y81%2BBKIY5RzzjotLQBpbVYOWsTLx7NPmjYzfZvU267ysdBbVpcEzflPCHotfnqXMXvy%2Bz3z5Hw%3D%3D"></iframe>

## EXECUTION context detail

### inside execution context

<iframe frameborder="0" style="width:100%;height:500px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=exc.drawio#R7Vtbc9o4FP4t%2B8BjMrblG48NKbsPu213Mp3dPgpbYBVjeWU5QH%2F9SpZkbMtAEjAlachMsI7ko9t3rhIjMFltfqcwT%2F4iMUpHjhVvRuB%2B5Diu67v8S1C2kgJsYEnKguJY0uwd4QH%2FQJI4VsQSx6hotWOEpAznbWJEsgxFrEWDlJJ1u9mcpO1Oc7hABuEhgqlJ%2FQfHLFGzAJa1q%2FgD4UWiunb9UL0yg9FyQUmZqQ5HDphXH1m9gpqZ4lQkMCbrBgl8HIEJJYTJp9VmglKxuHrZ5HvTPbX1wCnK2FNeCMJo%2BbX4%2B2v%2B6fun5ffp4%2FQ%2BDG5cR7J5hGmJ9Dyq0bKtXiIxyVw1Q5ShTd%2FGwJlubpkDs%2BvpchwhskKMbnkTxejGtkL5jsKQY%2FuyvN7tyNgPbj1JTRrbEXqKCBUOFjX73VLwB7Uaz1gZe2yszCOkuJqn46e8%2F7sZ5U8L8YSyR0xJthIz7i4f3%2FdcPEbljH%2FdrRPM0EMOI0Fbc6HitISt%2BNjubcFTAArFf85qQg2zzyVLcYYUPYZ0%2BZmzwUysmnVreW2iU1FFyxp4ligsEYsSxWOO0%2FRBjbQgqViPuznJ2BSucCrYFogJocIUVXIp%2FiXikUKcqbZKoh1PlSckJbSaObDuxZ%2FolFGyRLomRnNYVgso6VruHDWiBofJZMo%2FnL4Xfk2YHUD4XvA5Lmhjz%2FEM7Nnh2ETe2BoIeFqAGsB7iEjeg7ooEdvwjrfz4m08viTeQABufzribANxLMGFCbgl2q4Jjd8hd0bICcBNJpeEnKdt%2FM8DHDjudaAs%2FiD8O17KiIBEE0JUQkht%2BHD72dw3UiPRsyqTz1fiXzWCqvCtWbjftErbZukLopgvJKKKKOeOYsNTfdK%2B8wlCukCHGjp%2BP0AaAPAsc%2F81jaIUMvzYHl0fKFQPXwgWfpDGnwuctol1wzaLgpQ0QuqtpgfbYeRbbSDbjt9mJBfCYFRhtJ72CbB1fw3Yem4Ltw5w35Grglvvhcj1gjYjHTZfCrn%2BceS%2BG%2FEzxCmF7KWSoMEMum%2BbBpwTTTEQkjuQBQ97ACXdRbG4LWT5%2F5VEV9zIBfrAG3hWvqlWSdfXwfQGRSXDJOuJeDgLtGG6gg9d9iZrrxjS9quD9EdPgLplQHxrEFQfiLx7UQ3CYChUmzmf12fgN5jV9p0%2Ff2s8V9ZduPqqWFl3Xdm17Vfk4Eoze2jjrCf6E8Dqx%2BCF%2FAnXbnvCXgfJL%2FYn9EpdyJ8AZo7qipXv6%2FQnqjzUZfwJ3%2B93c3%2Bef6Ed77egie2GJtbPO%2B2p9fApavhyAdtb1cSu5dy6492ne6z0ZMXcFSW%2Fk0MbWjE%2FIbP2rpjPkK29jGIO3RaariDwA28hB%2FZLusj6dsVRxQyuSjEH51HMgY7t9CGI10lCD62YvV9AbpyWRzM%2BLja3tuu1ROd27Afv4nOC%2BGg%2BWnxC%2BzziA9pXdDy%2FE7kOLT59CWyZBCxymO3PN86VkIiMI6%2BCK%2BHeqAYH5abTtsKY1UlhAp3CVBVyCKImI3QF00ZddXeIf6d4AVlJxZW3g%2B0imO9rslawEZWuJdFvpYhxabgphMRmC%2FNNQvMEZoqlI2kilXoD%2BYgySY64rAiJqusw1ziZ6qmealXDKGc25%2Fx1T5W6kjCv7uQ1uhFXBtoDq3nxucyWmLMTPKX%2BuVGCYvYZo4hQKBLDNyzB0TJDheoIZ5hhPdNu28auHGwXSZVotJunBLLuNGNc5Cnc6uaVG%2BxYv%2BFVTiiDmUpndxLbnQx5VOvgXUMwnwPAI3%2Fj3bTC6t7E93HGPDLxxd3ELuOIZMX%2BhPrLB3zqaKNIXMHscuXicYQrJ0uNsOdMoDo%2FOBr1NGwmeIm97bOvKZyh9K6OnnSTGlRDBRGB1w4igBFD2OOwxyINFkIEe3X5U8%2BOgLfn7Kg%2BMtKEeZlFQryLBj5mPZg5eI6kMNPAh9Ka97XKFBuHI5h%2BUBUrHMfi9Tuu6vEPdTtWICkXJrJaUu9u5AlcwJIRFU7aRmyq0NEMQzXpfBCdTi3LGuZwZ08ka9uBiUIPmCh0h7rfC04%2FwXRMFPZrM6v6mGjlPlMp7gz3XLUjs%2B%2FiuvtbAah39QAdtx1c23VNgOprFBe5JAfMw0iK5ohPM%2BLeo1y0Lmr231AnJStw3HeJuKTVyhkVWnO%2BOrA5J4JNSeuAYAtAfelX54nDHn3oOybcaiV5dry5fWd6ZzLLC5Qh7majWLjOJRWBgAlEimD%2FrQ8euRTorajC60dnrea2bQ3XTDoHfdeFx0Mh07yf%2FmxkOnuQKRNufPlrbddFX0xQ0acfE%2FjYo06bF%2BdfO1RPtdoXUKSu01GkdbTTRKvT88sxO3y%2B4ebF3e%2F1ZGpr96tI8PF%2F"></iframe>


## the call stack
- all the variable declaration and function names
are stored in ==Global execution context==
- when a *function* is called its own ==execution context== is generated and placed before the **stack** of global execution context
- when <mark style="background: #BBFABBA6;">second</mark> function is called during this time first function is paused and second functions execution stack is created.
- this this because JavaScript is single threaded
and can run only one thread at a time.
- after <mark style="background: #FFB86CA6;">second</mark> function has finished its execution 
, it is removed from its execution context and memory is cleared
- then first function is resumed and its execution is finished
- after that it is removed from its execution context
and global execution is resumed



## scope concept

- **Scoping**: How our program's variables are organized and accessed. "Where do variables
 live?" or "Where can we access a certain variable, and where not?";

- **Lexical scoping**: Scoping is controlled by placement of functions and blocks in the code;

- **Scope**: Space or environment in which a certain variable is declared (variable environment in case of functions). 
- There is global scope, function scope, and block scope;

- **Scope of a variable**: Region of our code where a certain variable can be accessed.


## types of scope

- there are three types of scopes

1. global scope
2. function scope
3. block scope

## global scope

- all the variable declared out side of 
	
	- function block
	- other blocks `{ }` between any curly braces

- global scoped variables or variables declared out side of function blocks or `{ }` any other blocks ,can be accessed anywhere in our code.

## function scope

- variable declared inside the function block are called function scoped variables
- we cant access function scoped variable from outside of that block 
- parent function’s 

## scope chain

- all the inner scope has access to the outer scope
- but outer scope does not have access to inner scope
- sibling scope also can not access each other.
- ==let== and *const* are block scope
- **var** is function scope

## scope chain and call stack
![](https://i.imgur.com/Ussmtht.jpg) ^xuf96h


## hoisting

- **Hoisting**: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".
- BEHIND THE SCENES 
	- Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

- ![](https://i.imgur.com/JYlLXTI.jpg)

- function declaration[^1]  is hoisted because they are not defined by any `let` or `var` or `const` keyword.
- hence function created with function declaration can be used or called before they are initialized.
- function expression and Arrow functions are stored in variable.
- hence they can not be used if they are hoisted because,  `let` and `const` keywords have `uninitialized ` value or they are in `TDZ`(temporal dead zone).
- if they are stored in a variable using **var** keyword then if they are hoisted they will show 'undefined'.

[^1]: ![[JavaScript/books.js/js_info_book/js.info/snippets#^tyhu17]]

## How ==this== works

- this keyword/variable: Special variable that is created for every execution context (every function).
- Takes the value of (points to) the "owner" of the function in which the this keyword is used.
- this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

![](https://i.imgur.com/LLwqT5c.jpg)


## ==this== in action

- `this` inside object point to the owner object
- `this.method` points to method of that object
- `this` without owner object points to ==window== object.
- Arrow function does not have its own `this`
- `this` inside Arrow function 

#### 97.1 examples

```js
'use strict';

// **  function declaration this gives undefined   **
  
let newName = function (birthyear) {

 let age = 2022 - birthyear;

 console.log(this);

 console.log(age);

};

newName(1988);
```

#### 97.2 examples

```js

// **   function expression this gives undefined   **

function oldName() {

 console.log(this);

}

oldName();
```

#### 97.3 examples

```js

// **   Arrow function this gives window object     **

let middleName = (birthyear) => {

 let age = 3000 - birthyear;

 console.log(age);

 console.log(this);

};

middleName(1988);

```

#### 97.4 examples

```js

//** this inside an object (as property) gives that object */ 

  
let FatherName = {

 calcAge: function (birthyear) {

  let age = 3000 - birthyear;

  console.log(age);

  console.log(this);

 },

};


FatherName.calcAge(5000);

```

#### 97.5 examples

```js

  

//** this inside an object (as value) gives reference error **

let valueAge;

let motherName = {

 calcAge: (valueAge = function (birthyear) {

  let age = 3000 + birthyear;

  console.log(age);

  console.log(this);

 }),

};

motherName.calcAge.valueAge(1001);
```

```ad-note
title: `this`
- ==this== keyword points to object that called the method but not the object in which method was defined
- it is possible that calling a method Object may be different than the one which defined it.
```


## regular function Vs Arrow function

```ad-note
title: Arrow function
- as best practise never use arrow function as method.

```

#### example 98.1

```js
let FatherName = {
 firstname: 'sam',

 jonas: function () {

  let calcAge = () => {
console.log(`hey${this.firstname}`);
};
  calcAge();

 },

};

FatherName.jonas();
```

- **this** keyword
	- inside object
	- as key as arrow function
	- references to window object
	

-*this* keyword 
- inside object
- inside method
- defined with variable
- references to the Object.

```ad-note
title: arguments in this
- we cant add more arguments explicitly other than defined in function arguments in arrow function
- but can add in other functions

```


## DE structuring Arrays

### simple de structuring


```js
'use strict';

const restaurant = {

 name: 'Classico Italiano',

 location: 'Via Angelo Tavanti 23, Firenze, Italy',

 categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

 starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

 mainMenu: ['Pizza', 'Pasta', 'Risotto'],

};

//?     simple destructuring

let [first, second] = restaurant.mainMenu;

console.log(first, second); //* Pizza Pasta
```

### changing element in other Array

```js
'use strict';

const restaurant = {

 name: 'Classico Italiano',

 location: 'Via Angelo Tavanti 23, Firenze, Italy',

 categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

 starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

 mainMenu: ['Pizza', 'Pasta', 'Risotto'],

};

let myArr = restaurant.mainMenu;

  

console.log(myArr); //*  ['Pizza', 'Pasta', 'Risotto']

  

console.log(typeof myArr); //* object

  

console.log(myArr[0]); //* Pizza

  

console.log(restaurant.mainMenu[0]); //*

  

myArr[0] = 'khakhra'; //! changing element in new Array changes to original Array too.

  

console.log(myArr[0]); //* khakhra

  

console.log(restaurant.mainMenu[0]); //* khakhra

  
```

### switching elements content 

```js
'use strict';

const restaurant = {

 name: 'Classico Italiano',

 location: 'Via Angelo Tavanti 23, Firenze, Italy',

 categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

 starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

 mainMenu: ['Pizza', 'Pasta', 'Risotto'],

};

let [main, secondary] = restaurant.categories;

  

console.log(main, secondary);

  

[main, secondary] = [secondary, main];

  

console.log(main, secondary);
```

##  nested de structuring
 
![18:03](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/103%20Destructuring%20Arrays.mp4#t=1083.461553)


```js
  

let array1 = ['a', 'b', 'c', ['alpha', 'beta']];

let [one, two, , [three, four]] = array1;

console.log(one, two, three, four);
```


##  default values
![19:03](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/103%20Destructuring%20Arrays.mp4#t=1143.967434)

```js
  

let array3 = ['a', 'b', 'c', ['alpha', 'beta']];

let [sam = 'A', mac = 'B', john, brad] = ['charlie'];


console.log(sam, mac, john, brad); //* charlie B undefined undefined
```


# objects de structuring


## different property names  
![03:17](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/104%20Destructuring%20Objects.mp4#t=197.628726)
```js
let objA = { a: 'sam', b: 'ness', c: 'ohm' };

  

let { a: name, b: petName, d: surName = 'lol' } = objA;

  

console.log(name); //* sam

  

console.log(petName); //* ness

  

console.log(surName); //* lol // default name and default value
```

##  mutating variables
![07:20](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/104%20Destructuring%20Objects.mp4#t=440.859419)

```js
  

let a = 800;
let b = 1200;
let c = 50;

let objX = { A: 'sam', B: 'ness', C: 'ohm' };

console.log(a);

console.log(b);

//let { A: a, B: b, } = objX; //! problem in redclaring , so need to mutate

({ A: a, B: b, C: c = 80 } = objX);

console.log(a);

console.log(b);

console.log(c);
```


## nested object de structuring 
![10:12](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/104%20Destructuring%20Objects.mp4#t=612.722213)




## spread operator

#### example 105.1

```js
'use strict';

  

let array1 = [1, 2, 3, 4, 5, 6, 7];

  

//* spreading array ────────────────────────────────────────────────────────────────────────────────

  

const spreadedArray1 = [...array1];

  

for (let i = 0; i <= spreadedArray1.length - 1; i++) {

 console.log(spreadedArray1[i]);

}

console.log('-------');

// ────────────────────────────────────────────────────────────────────────────────
```

#### example 105.2

```js
'use strict';

  

let array1 = [1, 2, 3, 4, 5, 6, 7];

  

//* spreading in the end ────────────────────────────────────────────────────────────────────────────────

  

const spreadedArray2 = ['hello', ...array1];

  

for (let i = 0; i <= spreadedArray2.length - 1; i++) {

 console.log(spreadedArray2[i]);

}

console.log('-------');

  

// ────────────────────────────────────────────────────────────────────────────────
```

#### example 105.3

```js
  let array1 = [1, 2, 3, 4, 5, 6, 7];

//* spreading in the begining ────────────────────────────────────────────────────────────────────────────────

  

const spreadedArray3 = [...array1, 'bye'];

  

for (let i = 0; i <= spreadedArray3.length - 1; i++) {

 console.log(spreadedArray3[i]);

}

console.log('-------');
```


## spread operator in string  
[10:01](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/105%20The%20Spread%20Operator%20....mp4#t=601.768077)

- 

##  spread operator in function
[12:28](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/105%20The%20Spread%20Operator%20....mp4#t=748.620833)


## spread in objects 
[17:36](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/105%20The%20Spread%20Operator%20....mp4#t=1056.955715)



## rest parameters

```js
  

function add(...numbers) {

 let sum = 0;

  

 for (let i = 0; i <= numbers.length - 1; i++) {

  sum += numbers[i];

 }

 console.log(sum);

}

  

add(6, 5, 4);
```

## nullish Coalescing operator

- `??` operator 
- does not consider `null` or `empty string`  
 as falsie value.
- works same way as `or` operator.


## for…of…loop

```js
let array1 = [1, 2, 3, 4, 5, 6, 7];
for (const items of array1) {
 console.log(items, array1.indexOf(items));
}
```


## array.entries()

```js
  

let arrayX = ['sam', 'mango', 'lichy', 'banana'];

for (let [index, element] of arrayX.entries()) {

 console.log(index, '->', element);

 //console.log(you);

}
```


# enhanced object literals

## ES6 object literals enhancement

- can write variable name that has stored some object ,directly to store into other object.
```js
let someSmallObj={address:'A B newyork',}
let obj1= {
firstName:'sam',
someSmallObj, // here
}
console.log(obj1);


```

## computed properties name

```js
let obj ={
[1+2+3]:'sam',
[`${1+2+3+4}`]:'rome',
}
console.log(obj);
```

## enhanced functions name

- can write method like this

```js
  

let obj = {

 someFunc(a, b) {

  console.log(a + b);

 },

};

obj.someFunc(4, 5);
```


## optional chaining

- if certain property in a object or method does not exist 
- `error` msg can be avoided
-  using optional chaining
- it returns `undefined` if certain property is `null` or `undefined`.

```js
  

let obj = {

 obj1: {

  obj20: {

   obj30: 'sam',

   obj40(a, b) {

    console.log(a + b);

   },

  },

 },

};

console.log(obj.obj1.obj30?.obj40(4, 5));

obj.obj1.obj20.obj40(9,45);
```

## nullish coalescing operator and optional chaining

```js
'use strict';

  

//* nullish coaleasing operator & optional chaining ────────────────────────────────────────────────

let obj = {

 myMethod: function (a, b) {

  const myvalue = 'samsung';

  return a + b;

 },

};

console.log(obj.myMethod?.(4, 55) ?? 'method doesnt exist'); // 59

console.log(obj.myMethod2?.(4, 55) ?? 'method doesnt exist'); // method does not exist
```

## optional chaining in Array



## looping over Objects

```js

  

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {

 [weekdays[3]]: {

  open: 12,

  close: 22,

 },

 [weekdays[4]]: {

  open: 11,

  close: 23,

 },

 [weekdays[5]]: {

  open: 0, // Open 24 hours

  close: 24,

 },

};
  

const properties = Object.keys(openingHours);

//console.log(properties);

  

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {

 openStr += `${day}, `;

}

//console.log(openStr);

  

// Property VALUES

const values = Object.values(openingHours);

//console.log(values);

  

// Entire object

const entries = Object.entries(openingHours);

//console.log(entries);

  

// [key, value]

for (const [day, { open, close }] of entries) {

 console.log(day, open, close);

}
```



## sets

- format
```js
const mySet = new Set (['sam','john','marie','sam','marie']);
console.log(mySet);
```

- `const` variableName = **new** *set* `([‘array’])`;
- in array field we can add any iterables
- `Set` with `S` capital
- only displays items once
- repeated items are considered as single item.

## set methods

### has method

```js
'use strict';

  

const mySet = new Set(['sam', 'john', 'marie', 'sam', 'marie']);

console.log(mySet);

  

console.log(mySet.has('sam')); // true
```

### add and delete methods

```js

  'use strict';

const mySet = new Set(['sam', 'john', 'marie', 'sam', 'marie']);

mySet.add('ramu');

  

console.log(mySet);

  

mySet.delete('sam');

  

console.log(mySet);
```

- to delete all
```js

  'use strict';

const mySet = new Set(['sam', 'john', 'marie', 'sam', 'marie']);

mySet.clear();
console.log(mySet);
```

## iterating over sets

```js
const mySet = new Set(['sam', 'john', 'marie', 'sam', 'marie']);


for (const items of mySet) {

 console.log(items);

}
```

## use case of set iteration

```js
  

const mySet = new Set(['sam', 'john', 'marie', 'sam', 'marie']);

  

let newName = new Set(mySet); // creats object {['sam','john',....]}

  

console.log('without spread >>> ',newName);

  

let newName2 = [...new Set(mySet)]; // creates an Array ['john','marie','ramu']

  

console.log('with spread --> ',newName2);
```


# Name : 116 Maps_ Fundamentals.mp4

Topic: 000.index.vid.js

```toc
style: bullet | number | inline (default: bullet) min_depth: number (default: 2) max_depth: number (default: 6) title: string (default: undefined) allow_inconsistent_headings: boolean (default: false) delimiter: string (default: |) varied_style: boolean (default: false) 
```

#flashcards/js_vid

## [](file:///D:/Web_devlopement/front/Vanila.js/main%20js/09%20Data%20Structures,%20Modern%20Operators%20and%20Strings/116%20Maps_%20Fundamentals.mp4)

# New Map and Set

Till now, we’ve learned about the following complex data structures:

- Objects are used for storing keyed collections.
- Arrays are used for storing ordered collections.

But that’s not enough for real life. That’s why `Map` and `Set` also exist.

## Map

- [Map] is a collection of keyed data items, just like an `Object`. But the main difference is that `Map` allows keys of any type.

Methods and properties are:

- `new Map()` – creates the map.
- `map.set(key, value)` – stores the value by the key.
- `map.get(key)` – returns the value by the key, `undefined` if `key` doesn’t exist in map.
- `map.has(key)` – returns `true` if the `key` exists, `false` otherwise.
- `map.delete(key)` – removes the value by the key.
- `map.clear()` – removes everything from the map.
- `map.size` – returns the current element count.

For instance:

```javascript
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

- As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

`map[key]` isn’t the right way to use a `Map`

- Although `map[key]` also works, e.g. we can set `map[key] = 2`, this is treating `map` as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).

- So we should use `map` methods: `set`, `get` and so on.

**Map can also use objects as keys.**

For instance:

```javascript
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123
```

- Using objects as keys is one of the most notable and important `Map` features. The same does not count for `Object`. String as a key in `Object` is fine, but we can’t use another `Object` as a key in `Object`.

Let’s try:

```javascript
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
alert( visitsCountObj["[object Object]"] ); // 123
```

- As `visitsCountObj` is an object, it converts all `Object` keys, such as `john` and `ben` above, to same string `"[object Object]"`. Definitely not what we want.

How `Map` compares keys

- To test keys for equivalence, `Map` uses the algorithm [SameValueZero](https://tc39.github.io/ecma262/#sec-samevaluezero). It is roughly the same as strict equality `===`, but the difference is that `NaN` is considered equal to `NaN`. So `NaN` can be used as the key as well.

- This algorithm can’t be changed or customized.

Chaining

Every `map.set` call returns the map itself, so we can “chain” the calls:

```javascript
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

### Iteration over Map

For looping over a `map`, there are 3 methods:

- `map.keys()` – returns an iterable for keys,
- `map.values()` – returns an iterable for values,
- `map.entries()` – returns an iterable for entries `[key, value]`, it’s used by default in `for..of`.

For instance:

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
```

The insertion order is used

The iteration goes in the same order as the values were inserted. `Map` preserves this order, unlike a regular `Object`.

Besides that, `Map` has a built-in `forEach` method, similar to `Array`:

```javascript
// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```

## ==Object.entries==: Map from Object

When a `Map` is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

```javascript
// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
```

If we have a plain object, and we’d like to create a `Map` from it, then we can use built-in method ==Object.entries(obj)== that returns an array of key/value pairs for an object exactly in that format.

So we can create a map from an object like this:

```javascript
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

Here, `Object.entries` returns the array of key/value pairs: `[ ["name","John"], ["age", 30] ]`. That’s what `Map` needs.

## ==Object.fromEntries==: Object from Map

We’ve just seen how to create `Map` from a plain object with `Object.entries(obj)`.

There’s `Object.fromEntries` method that does the reverse: given an array of `[key, value]` pairs, it creates an object from them:

```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```

We can use `Object.fromEntries` to get a plain object from `Map`.

E.g. we store the data in a `Map`, but we need to pass it to a 3rd-party code that expects a plain object.

Here we go:

```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

A call to `map.entries()` returns an iterable of key/value pairs, exactly in the right format for `Object.fromEntries`.

We could also make line `(*)` shorter:

```javascript
let obj = Object.fromEntries(map); // omit .entries()
```

That’s the same, because `Object.fromEntries` expects an iterable object as the argument. Not necessarily an array. And the standard iteration for `map` returns same key/value pairs as `map.entries()`. So we get a plain object with same key/values as the `map`.

## Set

A `Set` is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

- `new Set(iterable)` – creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set.
- `set.add(value)` – adds a value, returns the set itself.
- `set.delete(value)` – removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
- `set.has(value)` – returns `true` if the value exists in the set, otherwise `false`.
- `set.clear()` – removes everything from the set.
- `set.size` – is the elements count.

The main feature is that repeated calls of `set.add(value)` with the same value don’t do anything. That’s the reason why each value appears in a `Set` only once.

For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

`Set` is just the right thing for that:

```javascript
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

The alternative to `Set` could be an array of users, and the code to check for duplicates on every insertion using [arr.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find). But the performance would be much worse, because this method walks through the whole array checking every element. `Set` is much better optimized internally for uniqueness checks.

### Iteration over Set

We can loop over a set either with `for..of` or using `forEach`:

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

Note the funny thing. The callback function passed in `forEach` has 3 arguments: a `value`, then _the same value_ `valueAgain`, and then the target object. Indeed, the same value appears in the arguments twice.

That’s for compatibility with `Map` where the callback passed `forEach` has three arguments. Looks a bit strange, for sure. But may help to replace `Map` with `Set` in certain cases with ease, and vice versa.

The same methods `Map` has for iterators are also supported:

- `set.keys()` – returns an iterable object for values,
- `set.values()` – same as `set.keys()`, for compatibility with `Map`,
- `set.entries()` – returns an iterable object for entries `[value, value]`, exists for compatibility with `Map`.

## Summary

`Map` – is a collection of keyed values.

Methods and properties:

- `new Map([iterable])` – creates the map, with optional `iterable` (e.g. array) of `[key,value]` pairs for initialization.
- `map.set(key, value)` – stores the value by the key, returns the map itself.
- `map.get(key)` – returns the value by the key, `undefined` if `key` doesn’t exist in map.
- `map.has(key)` – returns `true` if the `key` exists, `false` otherwise.
- `map.delete(key)` – removes the value by the key, returns `true` if `key` existed at the moment of the call, otherwise `false`.
- `map.clear()` – removes everything from the map.
- `map.size` – returns the current element count.

The differences from a regular `Object`:

- Any keys, objects can be keys.
- Additional convenient methods, the `size` property.

`Set` – is a collection of unique values.

Methods and properties:

- `new Set([iterable])` – creates the set, with optional `iterable` (e.g. array) of values for initialization.
- `set.add(value)` – adds a value (does nothing if `value` exists), returns the set itself.
- `set.delete(value)` – removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
- `set.has(value)` – returns `true` if the value exists in the set, otherwise `false`.
- `set.clear()` – removes everything from the set.
- `set.size` – is the elements count.

Iteration over `Map` and `Set` is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

# WeakMap and WeakSet

- As we know from the chapter [Garbage collection](https://javascript.info/garbage-collection), JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

For instance:

```javascript
let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory
```

- Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.

- For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.

Like this:

```javascript
let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]
```

- Similar to that, if we use an object as the key in a regular `Map`, then while the `Map` exists, that object exists as well. It occupies memory and may not be garbage collected.

For instance:

```javascript
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()
```

- `WeakMap` is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.

Let’s see what it means on examples.

## WeakMap

- The first difference between `Map` and `WeakMap` is that keys must be objects, not primitive values:

```javascript
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object
```

- Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

```javascript
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!
```

- Compare it with the regular `Map` example above. Now if `john` only exists as the key of `WeakMap` – it will be automatically deleted from the map (and memory).

- `WeakMap` does not support iteration and methods `keys()`, `values()`, `entries()`, so there’s no way to get all keys or values from it.

`WeakMap` has only the following methods:

- `weakMap.get(key)`

- `weakMap.set(key, value)`

- `weakMap.delete(key)`

- `weakMap.has(key)`

- Why such a limitation? That’s for technical reasons. If an object has lost all other references (like `john` in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified _when the cleanup happens_.

- The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen.

- So, technically, the current element count of a `WeakMap` is not known. The engine may have cleaned it up or not, or did it partially.

- For that reason, methods that access all keys/values are not supported.

Now, where do we need such a data structure?

## Use case: additional data

- The main area of application for `WeakMap` is an _additional data storage_.

- If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then `WeakMap` is exactly what’s needed.

- We put the data to a `WeakMap`, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.

```javascript
weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically
```

- Let’s look at an example.

- For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value.

- When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.

Here’s an example of a counting function with `Map`:

```javascript
// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

And here’s another part of the code, maybe another file using it:

```javascript
// 📁 main.js
let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;
```

Now, `john` object should be garbage collected, but remains in memory, as it’s a key in `visitsCountMap`.

- We need to clean `visitsCountMap` when we remove users, otherwise it will grow in memory indefinitely.
- Such cleaning can become a tedious task in complex architectures.

We can avoid it by switching to `WeakMap` instead:

```javascript
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

- Now we don’t have to clean `visitsCountMap`. After `john` object becomes unreachable, by all means except as a key of `WeakMap`, it gets removed from memory, along with the information by that key from `WeakMap`.

## Use case: caching

Another common example is caching. We can store (“cache”) results from a function, so that future calls on the same object can reuse it.

- To achieve that, we can use `Map` (not optimal scenario):

```javascript
// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj = {/* let's say we have an object */};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)
```

- For multiple calls of `process(obj)` with the same object, it only calculates the result the first time, and then just takes it from `cache`. The downside is that we need to clean `cache` when the object is not needed any more.

- If we replace `Map` with `WeakMap`, then this problem disappears. The cached result will be removed from memory automatically after the object gets garbage collected.

```javascript
// 📁 cache.js
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well
```

## WeakSet

`WeakSet` behaves similarly:

- It is analogous to `Set`, but we may only add objects to `WeakSet` (not primitives).

- An object exists in the set while it is reachable from somewhere else.

- Like `Set`, it supports `add`, `has` and `delete`, but not `size`, `keys()` and no iterations.

- Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in `WeakSet` may mean something about the object.

- For instance, we can add users to `WeakSet` to keep track of those who visited our site:

```javascript
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
```

- The most notable limitation of `WeakMap` and `WeakSet` is the absence of iterations, and the inability to get all current content.
- That may appear inconvenient, but does not prevent `WeakMap/WeakSet` from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.

## Summary

- `WeakMap` is `Map`-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

- `WeakSet` is `Set`-like collection that stores only objects and removes them once they become inaccessible by other means.

- Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

- That comes at the cost of not having support for `clear`, `size`, `keys`, `values`…

- `WeakMap` and `WeakSet` are used as “secondary” data structures in addition to the “primary” object storage.

- Once the object is removed from the primary storage, if it is only found as the key of `WeakMap` or in a `WeakSet`, it will be cleaned up automatically.



## Name : 141 Simple Array Methods.mp4

Topic: 000.index.vid.js

```toc
style: bullet | number | inline (default: bullet) min_depth: number (default: 2) max_depth: number (default: 6) title: string (default: undefined) allow_inconsistent_headings: boolean (default: false) delimiter: string (default: |) varied_style: boolean (default: false) 
```

#flashcards/js_vid

### [](file:///D:/Web_devlopement/front/Vanila.js/main%20js/11%20Working%20With%20Arrays/141%20Simple%20Array%20Methods.mp4)

# [[JavaScript/vid.js/dashboard.js]]

## my temp stamp

![05:52](file:///D:/Web_devlopement/front/Vanila.js/main%20js/11%20Working%20With%20Arrays/141%20Simple%20Array%20Methods.mp4#t=352.982703)

## note 1

- content 1

### ==slice method==

```javascript
alert( arr ); // 1,2,3,4,5
```

- The method ==arr.slice== is much simpler than similar-looking `arr.splice`.

The syntax is:

```javascript
arr.slice([start], [end])
```

- It returns a new array copying to it all items from index `start` to `end` (not including `end`).

- Both `start` and `end` can be negative, in that case position from array end is assumed.

- It’s similar to a string method `str.slice`, but instead of substrings it makes subarrays.

For instance:

```javascript
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
```

- We can also call it without arguments: `arr.slice()` creates a copy of `arr`.
- That’s often used to obtain a copy for further transformations that should not affect the original array.

### splice methods

- How to delete an element from the array?

- The arrays are objects, so we can try to use `delete`:

```javascript
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3
```

- The element was removed, but the array still has 3 elements, we can see that `arr.length == 3`.

- That’s natural, because `delete obj.key` removes a value by the `key`.

- It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

So, special methods should be used.

- The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

- The syntax is:

```javascript
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

- It modifies `arr` starting from the index `start`: removes `deleteCount` elements and then inserts `elem1, ..., elemN` at their place. Returns the array of removed elements.

This method is easy to grasp by examples.

Let’s start with the deletion:

```javascript
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]
```

- Easy, right? Starting from the index `1` it removed `1` element.

- In the next example we remove 3 elements and replace them with the other two:

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
```

- Here we can see that `splice` returns the array of removed elements:

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements
```

- The `splice` method is also able to insert the elements without any removals. For that we need to set `deleteCount` to `0`:

```javascript
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

- Negative indexes allowed

- Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

```javascript
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
```

### reverse

- The method [arr.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) reverses the order of elements in `arr`.

For instance:

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```

- It also returns the array `arr` after the reversal.


### Iterate: forEach

- The ==arr.forEach== method allows to run a function for every element of the array.

The syntax:

```javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

- For instance, this shows each element of the array:


```javascript
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

- And this code is more elaborate about their positions in the target array:

```javascript
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```

- The result of the function (if it returns any) is thrown away and ignored.


## Name : 143 for Each With Maps and Sets.mp4
Topic: 000.index.vid.js

```toc
style: bullet | number | inline (default: bullet) min_depth: number (default: 2) max_depth: number (default: 6) title: string (default: undefined) allow_inconsistent_headings: boolean (default: false) delimiter: string (default: |) varied_style: boolean (default: false) 
```

#flashcards/js_vid

### [](file:///D:/Web_devlopement/front/Vanila.js/main%20js/11%20Working%20With%20Arrays/143%20forEach%20With%20Maps%20and%20Sets.mp4)

#### ==map and set== for…each

```javascript

//  title --> forEach With Maps and Sets

  

//  title -->  Map

  

const currencies = new Map([

  ['USD', 'United States dollar'],

  ['EUR', 'Euro'],

  ['GBP', 'Pound sterling'],

]);

  

currencies.forEach(function (value, key, map)

{

  console.log(`${ key }: ${ value }`);

});

  

//  title -->  Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map)

{

  console.log(`${ value }: ${ value }`);

});

```

#### title --> Looping Arrays: forEach

```javascript
  

//  title --> Looping Arrays: forEach

  

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  

// for (const movement of movements) {

for (const [i, movement] of movements.entries())

{

  if (movement > 0)

  {

    console.log(`Movement ${ i + 1 }: You deposited ${ movement }`);

  } else

  {

    console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(movement) }`);

  }

}

  

console.log('---- FOREACH ----');

movements.forEach(function (mov, i, arr)

{

  if (mov > 0)

  {

    console.log(`Movement ${ i + 1 }: You deposited ${ mov }`);

  } else

  {

    console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(mov) }`);

  }

});
```


### ==arr.map==

- The ==arr.map== method is one of the most useful and often used.

- It calls the function for each element of the array and returns the array of results.

- The syntax is:

```javascript
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
```

- For instance, here we transform each element into its length:

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

#### jonas.ex

```javascript

// title --> the map Method

const eurToUsd = 1.1;

  

// const movementsUSD = movements.map(function (mov) {

//   return mov * eurToUsd;

// });

  

const movementsUSD = movements.map(mov => mov * eurToUsd);

  

console.log(movements);

console.log(movementsUSD);

  

const movementsUSDfor = [];

for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

  

const movementsDescriptions = movements.map(

  (mov, i) =>

    `Movement ${ i + 1 }: You ${ mov > 0 ? 'deposited' : 'withdrew' } ${ Math.abs(

      mov

    ) }`

);

console.log(movementsDescriptions);
```

![](https://i.imgur.com/yLWFeF0.jpg)

### sort(fn)

- The call to ==arr.sort()== sorts the array *in place*, changing its element order.

- It also returns the sorted array, but the returned value is usually ignored, as `arr` itself is modified.

For instance:

```javascript
let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2
```

- Did you notice anything strange in the outcome?

- The order became `1, 15, 2`. Incorrect. But why?

**The items are sorted as strings by default.**

- Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed `"2" > "15"`.

- To use our own sorting order, we need to supply a function as the argument of `arr.sort()`.

- The function should compare two arbitrary values and return:

```javascript
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
```

For instance, to sort as numbers:

```javascript
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
```

Now it works as intended.

- Let’s step aside and think what’s happening. The `arr` can be array of anything, right? It may contain numbers or strings or objects or whatever.

- We have a set of *some items*. To sort it, we need an *ordering function* that knows how to compare its elements. The default is a string order.

- The `arr.sort(fn)` method implements a generic sorting algorithm.

- We don’t need to care how it internally works (an optimized [quicksort] or [Timsort] most of the time).

- It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the `fn` which does the comparison.

- By the way, if we ever want to know which elements are compared – nothing prevents from alerting them:

```javascript
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
```

- The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.

- A comparison function may return any number

- Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.

That allows to write shorter functions:

```javascript
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // 1, 2, 15
```

- Arrow functions for the best

```javascript
arr.sort( (a, b) => a - b );
```

- This works exactly the same as the longer version above.

- Use `localeCompare` for strings

- Remember strings comparison algorithm? It compares letters by their codes by default.

- For many alphabets, it’s better to use `str.localeCompare` method to correctly sort letters, such as `Ö`.

For example, let’s sort a few countries in German:

```javascript
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vie
```

#### jonas.ex

```javascript

//  title --> Sorting Arrays

  

// Strings

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());

console.log(owners);

  

// Numbers

console.log(movements);

  

// return < 0, A, B (keep order)

// return > 0, B, A (switch order)

  

// Ascending

// movements.sort((a, b) => {

//   if (a > b) return 1;

//   if (a < b) return -1;

// });

movements.sort((a, b) => a - b);

console.log(movements);

  

// Descending

// movements.sort((a, b) => {

//   if (a > b) return -1;

//   if (a < b) return 1;

// });

movements.sort((a, b) => b - a);

console.log(movements);
```

### reverse

The method [arr.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) reverses the order of elements in `arr`.

For instance:

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```

It also returns the array `arr` after the reversal.

### split and join

- Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: `John, Pete, Mary`.

- But for us an array of names would be much more comfortable than a single string. How to get it?

- The ==str.split(delim)== method does exactly that. It splits the string into an array by the given delimiter `delim`.

- In the example below, we split by a comma followed by space:

```javascript
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
```

- The `split` method has an optional second numeric argument – a limit on the array length.
- If it is provided, then the extra elements are ignored. In practice it is rarely used though:

```javascript
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
```

Split into letters

- The call to `split(s)` with an empty `s` would split the string into an array of letters:

```javascript
let str = "test";

alert( str.split('') ); // t,e,s,t
```

- The call ==arr.join(glue)== does the reverse to `split`. It creates a string of `arr` items joined by `glue` between them.

For instance:

```javascript
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
```

### reduce/reduceRight

- When we need to iterate over an array – we can use `forEach`, `for` or `for..of`.

- When we need to iterate and return the data for each element – we can use `map`.

- The methods arr.reduce and ==arr.reduceRight== also belong to that breed, but are a little bit more intricate.

- They are used to calculate a single value based on the array.

The syntax is:

```javascript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

- The function is applied to all array elements one after another and “carries on” its result to the next call.

Arguments:

- `accumulator` – is the result of the previous function call, equals `initial` the first time (if `initial` is provided).

- `item` – is the current array item.

- `index` – is its position.

- `array` – is the array.

- As function is applied, the result of the previous function call is passed to the next one as the first argument.

- So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of `reduce`.

Sounds complicated?

- The easiest way to grasp that is by example.

- Here we get a sum of an array in one line:

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

- The function passed to `reduce` uses only 2 arguments, that’s typically enough.

- Let’s see the details of what’s going on.

1. On the first run, `sum` is the `initial` value (the last argument of `reduce`), equals `0`, and `current` is the first array element, equals `1`. So the function result is `1`.
2. On the second run, `sum = 1`, we add the second array element (`2`) to it and return.
3. On the 3rd run, `sum = 3` and we add one more element to it, and so on…

### concat

- The method ==arr.concat== creates a new array that includes values from other arrays and additional items.

The syntax is:

```javascript
arr.concat(arg1, arg2...)
```

- It accepts any number of arguments – either arrays or values.

- The result is a new array containing items from `arr`, then `arg1`, `arg2` etc.

- If an argument `argN` is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:

```javascript
let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

- Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

```javascript
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```

…But if an array-like object has a special `Symbol.isConcatSpreadable` property, then it’s treated as an array by `concat`: its elements are added instead:

```javascript
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
```


## Searching in array

Now let’s cover methods that search in an array.

### indexOf/lastIndexOf and includes

The methods [arr.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) and [arr.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

-   `arr.indexOf(item, from)` – looks for `item` starting from index `from`, and returns the index where it was found, otherwise `-1`.
-   `arr.includes(item, from)` – looks for `item` starting from index `from`, returns `true` if found.

Usually these methods are used with only one argument: the `item` to search. By default, the search is from the beginning.

For instance:



```javascript
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
```

Please note that `indexOf` uses the strict equality `===` for comparison. So, if we look for `false`, it finds exactly `false` and not the zero.

If we want to check if `item` exists in the array, and don’t need the exact index, then `arr.includes` is preferred.

The method [arr.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) is the same as `indexOf`, but looks for from right to left.


```javascript
let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
```

The `includes` method handles `NaN` correctly

A minor, but noteworthy feature of `includes` is that it correctly handles `NaN`, unlike `indexOf`:


```javascript
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)
```

That’s because `includes` was added to JavaScript much later and uses the more up to date comparison algorithm internally.

### find and findIndex/findLastIndex

Imagine we have an array of objects. How do we find an object with the specific condition?

Here the [arr.find(fn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method comes in handy.

The syntax is:

```javascript
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
```

The function is called for elements of the array, one after another:

-   `item` is the element.
-   `index` is its index.
-   `array` is the array itself.

If it returns `true`, the search is stopped, the `item` is returned. If nothing found, `undefined` is returned.

For example, we have an array of users, each with the fields `id` and `name`. Let’s find the one with `id == 1`:



```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
```

In real life arrays of objects is a common thing, so the `find` method is very useful.

Note that in the example we provide to `find` the function `item => item.id == 1` with one argument. That’s typical, other arguments of this function are rarely used.

The [arr.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method has the same syntax, but returns the index where the element was found instead of the element itself. The value of `-1` is returned if nothing is found.

The [arr.findLastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) method is like `findIndex`, but searches from right to left, similar to `lastIndexOf`.

Here’s an example:


```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3
```

### filter

The `find` method looks for a single (first) element that makes the function return `true`.

If there may be many, we can use [arr.filter(fn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

The syntax is similar to `find`, but `filter` returns an array of all matching elements:

```javascript
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
```

For instance:



```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```


## creating objects with reduce methods
```javascript

const sums = accounts

  .flatMap((acc) => acc.movements)

  .reduce(

    (sum, curr) =>

    {

      curr >= 0 ? (sum.deposite += curr) : (sum.withdrawal += curr);

      return sum;

    },

    { deposite: 0, withdrawal: 0 }

  );

//console.log(sums);

// ────────────────────────────────────────────────────────────────────────────────

//|>shorthand creating objects with reduce methods

//const sums_shorthand = accounts //*{deposite: 25180, withdrawal: -7340}

const { deposite, withdrawal } = accounts

  .flatMap((acc) => acc.movements)

  .reduce(

    (sums, curr) =>

    {

      sums[curr >= 0 ? 'deposite' : 'withdrawal'] += curr;

      return sums;

    },

    { deposite: 0, withdrawal: 0 }

  );

console.log(deposite); //* 25180

console.log(withdrawal); //* -7340

```


## Name : 160 flat and flat Map.mp4
Topic: 000.index.vid.js

```toc
style: bullet | number | inline (default: bullet) min_depth: number (default: 2) max_depth: number (default: 6) title: string (default: undefined) allow_inconsistent_headings: boolean (default: false) delimiter: string (default: |) varied_style: boolean (default: false) 
```

#flashcards/js_vid

### [](file:///D:/Web_devlopement/front/Vanila.js/main%20js/11%20Working%20With%20Arrays/160%20flat%20and%20flatMap.mp4)

## flat and flatMap

```javascript
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

  

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat(2));

  

//. flat

const overalBalance = accounts

  .map(acc => acc.movements)

  .flat()

  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

  

//. flatMap

const overalBalance2 = accounts

  .flatMap(acc => acc.movements)

  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2);
```


# Numbers


#### Conversion

```javascript
console.log(Number('23'));

console.log(+'23');

```

#### Parsing

```javascript
console.log(Number.parseInt('30px', 10));

console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));

console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));
```


#### Check if value is NaN

```javascript
console.log(Number.isNaN(20));

console.log(Number.isNaN('20'));

console.log(Number.isNaN(+'20X'));

console.log(Number.isNaN(23 / 0));
```


#### Checking if value is number

```javascript
console.log(Number.isFinite(20));

console.log(Number.isFinite('20'));

console.log(Number.isFinite(+'20X'));

console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));

console.log(Number.isInteger(23.0));

console.log(Number.isInteger(23 / 0));

```


## rounding numbers


#### Math and Rounding

```javascript
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2));

console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));

console.log(Math.max(5, 18, '23', 11, 2));

console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>

  Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0...(max - min) -> min...max

// console.log(randomInt(10, 20));

```

#### Rounding integers

```javascript
console.log(Math.round(23.3));

console.log(Math.round(23.9));

console.log(Math.ceil(23.3));

console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
```

```javascript

console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));

console.log(Math.floor(-23.3));
```


#### Rounding decimals

```javascript
console.log((2.7).toFixed(0));

console.log((2.7).toFixed(3));

console.log((2.345).toFixed(2));

console.log(+(2.345).toFixed(2));
```



## Remainder operator

#### The Remainder Operator
```javascript

console.log(5 % 2);

console.log(5 / 2); 

console.log(8 % 3);

console.log(8 / 3); 
```
```javascript

console.log(6 % 2);

console.log(6 / 2);

console.log(7 % 2);

console.log(7 / 2);
```

```javascript

const isEven = n => n % 2 === 0;

console.log(isEven(8));

console.log(isEven(23));

console.log(isEven(514));

```

#### row colors
```javascript

labelBalance.addEventListener('click', function ()

{

  [...document.querySelectorAll('.movements__row')].forEach(function (row, i)

  {

    // 0, 2, 4, 6

    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    // 0, 3, 6, 9

    if (i % 3 === 0) row.style.backgroundColor = 'blue';

  });

});

```


## ==BIG==int

#####  Working with BigInt
```javascript

console.log(2 ** 53 - 1);

console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);

console.log(2 ** 53 + 2);

console.log(2 ** 53 + 3);

console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n);

console.log(BigInt(48384302));
```


#####  Operations

```javascript
console.log(10000n + 10000n);

console.log(36286372637263726376237263726372632n * 10000000n);
```


#####  console.log(Math.sqrt(16n));

```javascript
const huge = 20289830237283728378237n;

const num = 23;

console.log(huge * BigInt(num));

```

#####  Exceptions

```javascript
console.log(20n > 15);

console.log(20n === 20);

console.log(typeof 20n);

console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');
```


#####  Divisions

```javascript
console.log(11n / 3n);

console.log(10 / 3);

```


# Dates

###### Create a date

```javascript
const now = new Date();

console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));

console.log(new Date('December 24, 2015'));



```

```javascript
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(2037, 10, 31));

console.log(new Date(0));

console.log(new Date(3 * 24 * 60 * 60 * 1000));
```

###### Working with dates

```javascript
const future = new Date(2037, 10, 19, 15, 23);

console.log(future);

console.log(future.getFullYear());

console.log(future.getMonth());

console.log(future.getDate());

console.log(future.getDay());

console.log(future.getHours());

console.log(future.getMinutes());

console.log(future.getSeconds());

console.log(future.toISOString());

console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);

console.log(future);

```

## Bankist app.dates

#### create current date and time

![](https://i.imgur.com/VpC01GX.png)


#### Add transfer date 

![](https://i.imgur.com/Uo2eyAD.png)

#### add transfer date

![](https://i.imgur.com/HI2P5nZ.png)


## operation with dates

#### Operations With Dates

```javascript
const future = new Date(2037, 10, 19, 15, 23);

console.log(+future);

const calcDaysPassed = (date1, date2) =>

  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days1);

```


## Timers


### setTimeout
![](https://i.imgur.com/riRQGus.png)
```javascript
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(

  (ing1, ing2) => console.log(`Here is your pizza with ${ ing1 } and ${ ing2 } 🍕`),

  3000,

  ...ingredients

);

console.log('Waiting...');

  

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

```

### setIntervals


![](https://i.imgur.com/k2ChKFU.png)

```javascript
setInterval(function ()

{

  const now = new Date();

  console.log(now);

}, 1000);
```


# DOM basics


![](https://i.imgur.com/Vcgz9Gq.jpg)


# selecting elements

![](https://i.imgur.com/5GgPpUo.jpg)

# adding elements

![](https://i.imgur.com/NwyJmgd.jpg)



#  styles, Attributes and classes


## styles

![](https://i.imgur.com/aubGgue.jpg)

![](https://i.imgur.com/nVars0q.jpg)

## attributes

![](https://i.imgur.com/qkfyaFr.jpg)

### non-standard attributes

![](https://i.imgur.com/6Q5Qt5f.jpg)

### data-attributes

![](https://i.imgur.com/hb7izzL.jpg)

### classes

![](https://i.imgur.com/hJG57Un.jpg)

#### D’ont use

![](https://i.imgur.com/Hvoq5LR.jpg)


# Implimenting smooth scroling

![](https://i.imgur.com/Td1r9l4.jpg)
