# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
### Error it throws:
The kind of error that it throws is a scope block error.
### Why the Error is thrown:
The error is thrown because we have a variable being declared that is in the scope of the if statment and then the same variable in the else statement trying to reassign it. You cannot do this because when you try to ressign it there is nothing to reassign it to.
### A Fix To Avoid This Error:
A fix to avoid this error can be to assign the variable currentStatus outside of the the if statment, then reassign it in the if and else statement. Then you would be able to console.log(currentStatus);
### Fix Below:
```js 
const react = (isReuben) => {
    let currentStatus = ''
    if (isReuben) {
        currentStatus = 'Everything is just fine'
    } else {
        currentStatus = 'Time to panic'
    };
    console.log(currentStatus)
};
react(true)
```


### Question 2
### What The Code Logs:
What the code will log is Micheal Jordan. This is because there is a object named bestPlayer, the value of the key **name** is first Lebron James, in bestPlayer, Then we **assign** bestPlayer to a variable named theGoat. We then **reassign** the bestplayer name value to Micheal Jordan, So when we finally call on theGoat name it is going to give out Micheal Jordan since theGoat is **holding bestPlayer**, and we **reassigned bestPlayer** name value to Micheal Jordan.


### Question 3
### What it will log: 
First it will log **Paul is the hardest working person in the room.** because we are calling shoutout first, it also will return Pauls name because it is grabbing the variable that is inside the same fucntion. Second it will log **Laisha is also the hardest working person in the room.** because we are loging it second after the shoutOut(), it logs it second. It also uses Laisha because it is grabbing a variable from outside the function since it won't be able to grab a variable that is inside the function since it is in the function shoutOut's scope.


### Question 4
### Rest Perameters Purpose:
The purpose of the rest parameter is so that the function could be able to hold as many arguments as you want to put it as a array. 

### How Do You Turn A Parameter Into A Rest Parameter And Use Them In a Function?
We can do this by adding 3 dots ... before the variable in the parameters in a function **(...variable)**. We can then use the rest parameter by calling the function and inputing as many arguments as you want. 
### Example Code:
```js
const sumNum = (...nums) => {
    let sumOfNums = 0;
    for (let i = 0; i < nums.length; i++) {
        sumOfNums += nums[i];
    }
    console.log(sumOfNums);
};
sumNum(1, 2, 10); // 13
sumNum(5); // 5
sumNum(100, 200, 800, 1, 1, 1); // 1103;
```
### Explaination:
In the code above we are calling a function sumNum. We are using the rest parameter on the variable nums (...nums). We then can call the function and input as many arguements as we want. We input many numbers as arguements, it then inputs it in the function parameters as an array ex. [1, 2, 10], and then what the function is doing is irrating through each array indices and adding the values to a variable called sumOfNums which starts off with the value 0. We then console.log(sumOfNums) and we get all the sum of all the values we input as arguments.  


### Question 5
### What is a scope:
Scope is just how acessible your variables, and functions are in your code. 
### An Analogy:
You can think of scope like a video game. Some people have access to resources that are available everywhere, but for some of the more rare resources, you have to go to a certain part of the map to obtain them.
### Code: 
```js
const num1 = 2;
const sumOfNums = () => {
    const num2 = 1;
    console.log(num1 + num2);
}

sumOfNums(); // outputs 3
console.log(num2 + num1); // Outputs error can't find num2
```
### Code Explaination: 
In the code above, we create a variable called num1 and assign the value 2 to it. We then create a function called sumOfNums, and in the function, create a variable called num2 and assign the value 1 to it. Then we log the sum of num1 and num2 in the function. When we call the function sumOfNums, it outputs to 3, and there is no error because it can grab the variable num2 from within the same function **(block scope)** and the variable num1 from outside of the function **(module scope)**. When we try to log the sum of num1 and num2 outside the function, we get an error, saying that it can't find num2. This is because num2 is in the function **(block scope)** and we won't be able to retrieve that variable. We can only call on variables that are within our scope or outside of our scope.



### Question 6
### What are modules?
Modules is a way where you can store your code into sepreate files, and then export certain parts of the code like, functions or variables and import them to other files, instead of writing the code in the same file.
### What are the benefits: 
The benefits of modules are having all your code orginized so that you know which files does certain tasks. If you don't use modules then it would be hard to look for certain lines of code or get lost in the file.
### Example: 
Lets say you have a file named money.js and you have another file called money-count.js. In money you have a function named dollars, and you want to use that function in money-count, well you can do that! You first need to export your function, to do this you can
```js 
module.exports = dollars;
```
 in money.js to export the function. Then to import the function you go to money-count.js and use 
```js
const dollars = require('./money.js')
```
this would import the dollars function from money.js to money-count.js so it can be used. 

### Question 7
### The values held by fruits and fruitMinusOne:
The values that would be held by fruits would still be the same so 
```js
['apple', 'banana', 'cherry', 'date'];
```
The values that would be held by fruitMinusOne would be:
```js 
['apple', 'banana', 'cherry'];
```
This is because in removeLastPurely we are making a copy of the array and then returning that copy so when you call on fruitsMinusOne that is holding removeLastPurely(fruits) it is returning the copy of the array which got the last index removed with the .pop() method. This is why when you call on fruits by itself, it will still log the same elements because we didn't affect the original array just the copy.

### Why it is necessary to make a copy of the array:
It is necessary to make a copy of an array in order to make a pure function because in a pure function the input or array that you give in should not be changed, and in making a copy of the array you aviod changing the array. 

### Why do we want a pure function?
You would want to aviod mutating the array because maybe you would like to use that array and all the elements in it somewhere else, and if you were to mutate that array and you are using the same array in another functions it might mess up some other code you might have in some other functions. 
### Question 8
### What data types would you use to represent a single item in the cart?
I would use a string as a key and the value assigned to 1 for the single itme in the cart. This is because if the user just wants that one item but wants to buy mulitple of them then they would just be able to change the value of the key to 2. 
### What data type(s) would you use to represent the entire shopping cart?
I would use a object to represent the entire shopping cart. This is because we would be able to hold mutiple keys which would be the all the items that the user wants to buy and hold a value of a number for the amount of them that the user wants to buy. It also alows us to change the value of the items if the user decides to buy mutiple of the same item. 
### Example:
```js
const shoppingCart = {
    babytoy: 1,
    jacket: 1,
    pen: 2,
};
```

