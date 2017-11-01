## Interview challenge - Three.js & React. ##

### Summary of work and reflection

Project has been created using create-react-app and three.js. I first made an attempt to utilise the three-js & react-three-render however these libraries didn't work with React v16, with create-react-app had upgraded to.

I then completed a vanilla install of react, webpack & babel to use the renders. However, I wasn't able to get the binds to work in this setup.

I returned to explore the option of using react side by side with three.js and this worked. I created third layer, to ensure communication between the three.js component and react and once this was in place it was possible to develop features in line with the spec. 

In process of setting up the controller layer, I implemented a rudimentry publish / subscribe system using callbacks and an event emitter. Given further time and a good working knowledge of three.js more would have been completed, however this was my first foray into using three.js / webGL.

## Installation ##

The project uses create-react-app and can be run on a standalone development machine.

1st clone the repository:
> git clone https://github.com/BenKandelaars/automata.git

> cd automata

> npm install

2nd build and run the repo
> npm run start

## Notes ##
Whilst I'm familiar with tests, none were written in this case due to time constraints. 

The code is written to be extended and improved upon with focus taken to ensure the architecture didn't incur excessive technical debt. Repitition was removed from the code base as much as possible. The file structure is aimed at reflecting the architecture of application. 