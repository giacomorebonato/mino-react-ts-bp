#React - Typescript boilerplate  
This is my first Typescript boilerplate. I have started to use Typescript after I have struggled to refactor 
a a small project in Javascript and I didn't like Flow syntax.  
So.. since we pass more time "maintaining code" instead of "writing new one" I thought that I wanted to give Typescript a try.  

###Instructions
1. ```npm install``` to install NPM dependencies  
2. ```npm run install-typings``` to install the required Typescript typings  

###NodeJS and Express  
```npm run dev``` starts a nodemon server with ts-node... Which means that  
1. You can use Typescript  
2. The server restart automatically on changes  

So again: one language everywhere.

##React  
ReactJS is my framework of choice for the front-end but I did a really small example
so you can replace it with whatever you want.  
```npm run build``` to create the bundle.  
Webpack is configure for livereload (HMR), but I didn't test it.  

##Tests  
I have chosen Ava since it comes with Typescript typings. I made a different tsconfig.test.json and it looks for all the ```__tests__``` subfolders containing tests.
