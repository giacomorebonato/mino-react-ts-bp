#React - Typescript boilerplate  
This is my first Typescript boilerplate. I have started to use Typescript after I have struggled to refactor
a a small project in Javascript and I didn't like Flow syntax.
So.. since we pass more time "maintaining code" instead of "writing new one" I thought that I wanted to give Typescript a try.

###Instructions  
1. ```npm install``` to install NPM dependencies and Typescript typings  
2. ```npm run dev``` starts an [ExpressJS](http://expressjs.com/) server with ts-node... Which means that you can use Typescript on server code too.

###Go Reactive with Mobx  
I liked the "Redux lessons", but I think that the approach is too much verbose and can become overwhelming in big projects.
If you don't know how Redux works, please read the code: it is really a simple (and ingenious) project and you shouldn't accept those things as "magic".
[Mobx](http://mobxjs.github.io/mobx) is very well documented and brings the "functional reactive" approach to ReactJS.
Key benefits:
- Type safety and intellisense with Typescript
- Define multiple stores with observer and computed properties
- Subscribe your component to the stores instead of using Flux (less dom comparison, faster performances)
- Write your code... Learn from your mistakes and be less tight to millions of dependency to check

###How to structure your store?  
Write your store class in the ```client/stores``` folder and initialize them in ```client/index.ts```.
The object exported by ```client/index.ts``` will be available to every component through [React context feature](https://facebook.github.io/react/docs/context.html).  
Why?  
State is decoupled from components and sometimes feels strange to pass a store into a very nested dom structure.
Then the component becomes "observer" only when the @observer annotation from mobx-react is added to them.

##React  
ReactJS is my framework of choice for the front-end but I did a really small example
so you can replace it with whatever you want.
```npm run build``` to create the bundle.
Webpack is configure for livereload (HMR), but I didn't test it.

###File structure  
I like the file structure [proposed here by Ryan Florence](https://gist.github.com/ryanflorence/110d4538bf98694538de) although this is not a Redux application.

###Tests  
I have chosen Ava since it comes with Typescript typings. I made a different tsconfig.test.json and it looks for all the ```__tests__``` subfolders containing tests.
Type ```npm run test``` to launch the only running test in the project.

##To do  
I want to make this a boilerplate for working with Firebase.