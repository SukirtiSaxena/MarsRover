#  Mars Rover Kata (JavaScript)

### General Info
#### The Task

For the Mars Mission, software has to be designed to manage robots and cool vehicles for space exploration! A programme has to be created to move rovers around the surface of Mars! Assuming that the Plateau is a square/rectangular grid, Rovers navigate the Plateau so they can use their special cameras and robot arms to collect samples back to Planet Earth.
Representation of a Rover’s Position on the Plateau
The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North,
South, West, East (the four cardinal compass points) respectively.
Example
0 0 N
This means the Rover is at the bottom-left corner facing in the North direction.

Instructing a Rover to Move Around the Plateau

To move a Rover around the Plateau, a string of letters is sent to a Rover.

Here are the letters and their resultant action:

L  : Spins the Rover 90 degrees Left without moving from the current coordinate point.

R  : Spins the Rover 90 degrees Right without moving from the current coordinate point.

M  : Moves the Rover forward by one grid point, maintaining the same heading (i.e. from where the Rover is facing (its orientation)).

N.B. Assume that the square directly North from (x, y) is (x, y+1).


#### INPUT


The first line inputted into the program represents the upper-right coordinates of the Plateau.

example : 

5 5

This Plateau has maximum (x, y) co-ordinates of (5, 5).

N.B. Assume that the lower-left coordinates is (0, 0).


Subsequent Lines of Input into the Program are Input to Rovers. This represents the instructions to move the rovers.

Each rover receives two lines of input. 

First Line of Input to a Rover : The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation). example : 1 2 N

Second Line of Input to a Rover : A string of letters representing the instructions to move the Rover around the Plateau. example : 'LMLMLMLMM'


Movement Rules

Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.



#### OUTPUT

For each Rover, the output represents its final position (final coordinates and where it is facing).


Example Test Case :

Lines of Input to the Program:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM


Expected Output:

1 3 N

5 1 E



#### SOLUTION

This 'Mars Rover Kata' task has been done in JavaScript.

Input is read from file : marsRoverInputFile.txt


1. Read the boundary position from line one of input file

2. Read myRover current cordinates and facing direction. Test if myRover is on the plateau and not clashing with any other rover.

3. Loop through the 'Movement instructions' String.

4. If 'L' change direction to 90 degree left

   If 'R' change direction to 90 degree right

   If 'M' , check for boundary conditions and for any collisions, if all ok, move 1 grid point towards current direction.

5. Return the final coordinates and direction of myRover.

6. Repeate for next Rover.


#### Unit Test cases:

Unit test cases are provided in marsRover.test.js

    √ Read input position and give output position for Rover 1.
    
    √ Read input position and give output position for Rover 2.
    
    √ If another Rover in the way send 'I am doomed' message.
    
    √ If  myRover falling off the plateau, send 'I am doomed' message.
    
    √ If invalid character in instructions set, send 'Not a valid movement instruction' message.
    
    √ If  negative input for boundary coordinates, send 'Boundary limit should be in positive coordinates' message.
    
    √ If  negative input for current Rover coordinates, send 'MyRover coordinates should be positive ' message.


#### ASSUMPTION

1. Plateau is rectangular / square and starting point is (0,0)


#### FUTURE CONSIDERATIONS:

1. Plateau shape may be other than rectangle/square.

## Technologies
npm  : Version 6.14.15

jest : Version 27.3.1


## Installation

$ git clone https://github.com/SukirtiSaxena/MarsRover.git

$ cd MarsRoverTask

$ npm install



## Collaboration


## FAQs
