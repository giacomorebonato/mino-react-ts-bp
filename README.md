#React - Typescript boilerplate  
This is my first Typescript boilerplate. I have started to use Typescript after I have struggled to refactor 
a a small project in Javascript and I didn't like Flow syntax.  
So.. since we pass more time "maintaining code" instead of "writing new one" I thought that I wanted to give Typescript a try.  

###Instructions
1. ```npm install``` to install NPM dependencies  
2. ```npm run install-typings``` to install the required Typescript typings  

###NodeJS and Express  
```npm run dev``` starts an [ExpressJS](http://expressjs.com/) server with ts-node... Which means that you can use 
one language everywhere.

###Go Reactive with Mobx  
I liked the "Redux lessons", but I think that the approach is too much verbose and can become overwhelming in big projects.  
If you don't know how Redux works, please read the code: it is really a simple a ingenious project and you shouldn't accept those things as "magic".  
[Mobx](http://mobxjs.github.io/mobx) is very well documented and brings the "functional reactive" approach to ReactJS.  
Key benefits:
- Type safety and intellisense with Typescript  
- Define multiple stores with observer and computed properties  
- Subscribe your component to the stores instead of using Flux (less dom comparison, faster performances)  
- Write your code... and be less tight to millions of dependency to check  

##React  
ReactJS is my framework of choice for the front-end but I did a really small example
so you can replace it with whatever you want.  
```npm run build``` to create the bundle.  
Webpack is configure for livereload (HMR), but I didn't test it.  

##Tests  
I have chosen Ava since it comes with Typescript typings. I made a different tsconfig.test.json and it looks for all the ```__tests__``` subfolders containing tests.  
Type ```npm run test``` to launch the only running test in the project.
