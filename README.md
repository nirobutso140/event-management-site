# Features of social event management project
1. Service Section : Service section has 6 different type of service
2. Curtomer Review : Customer review section has a image and customer review as description
3. Our Gallery : Gallery section has 6 different type of image 
4. Email and Password Authentication : My site has a register page and login page register form create user on firebase and validation user password and the login form check user whether he/she do registration.
5. Privet Route : Create privet route to specific route, User can't access these route if they are not login


# Ans the Questions
1. A : {}
Explain : declare a variable called greeting using the let keyword.
assign an empty object {} to the greeting variable.
Finally, use console.log() to print the contents of the greeting variable to the console.
As a result, when you run this code, it will log an empty object {} to the console.

2. C : "12"
Explain : The code provided defines a JavaScript function sum that takes two parameters a and b and returns their sum using the + operator.

However, when call the sum function with sum(1, "2");, passing 1 as the first argument and "2" as the second argument. The second argument is a string "2", not a number.

In JavaScript, when use the + operator with a string and a number, it performs string concatenation instead of numeric addition. So, in this case, it will concatenate the number 1 with the string "2", resulting in the string "12"

3. A : ['🍕', '🍫', '🥑', '🍔']
Explain : An array named food is declared with four food emoji elements: "🍕", "🍫", "🥑", and "🍔".
An object named info is created with a property favoriteFood initialized to the first element of the food array, which is "🍕".
The info.favoriteFood property is then reassigned to "🍝".
Finally,  log the food array to the console.

4. B : Hi there, undefined
Explain : There is a function called sayHi that takes a parameter name.
Inside the function, it attempts to create a string using a template literal, attempting to include the name parameter in the string.
Finally, it logs the result of calling sayHi() to the console.
However, when you call sayHi() without providing an argument, the name parameter inside the function will be undefined. This will lead to a string like "Hi there, undefined" being returned.

5 . C : 3
Explain : In this code start with a variable count initialized to 0 and an array nums containing four elements [0, 1, 2, 3].

then use the forEach method to iterate through each element of the nums array and execute a callback function for each element. In this case, the callback function checks if the current num is truthy (not equal to 0) and increments the count variable if it is.

Here's the breakdown of the forEach loop:

For num = 0, the condition if (num) evaluates to false, so count remains 0.
For num = 1, the condition if (num) evaluates to true, so count is incremented to 1.
For num = 2, the condition if (num) evaluates to true, so count is incremented to 2.
For num = 3, the condition if (num) evaluates to true, so count is incremented to 3.
After the forEach loop completes, count is 3, which is the number of truthy values in the nums array.

[Social Event Management site live link](social-event-management-a24af.web.app)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
