/*
This test file takes input from a text file marsRoverInputFile.txt
'marsRoverInputFile.txt' will be in below format
5 5         <-- X and Y coordinates for the plateau size
1 2 N       <-- X and Y coordinates for the Rover
LMLMLMLMM   <-- String of instructions for Rover movement where L: Left turn, R: Right Turn, M: Move forward 
3 3 E       <-- X and Y coordinates for second Rover
MMRMMRMRRM  <-- String of instructions for second Rover movement.
...         <-- Further Rovers position and movement instructions can be added in similar format

Various coordinates and movement instructions have beenadded in the file for testing purpose
*/

const { myRoverMovement } = require("./marsRover.js");
const { readFileSync } = require('fs');
const each = require('jest-each').default;
const inputValues = readFileSync('marsRoverInputFile.txt', 'utf8').split('\r\n');

describe("myRoverMovement", () => {
    let allRovers = [];
    for (let i = 1; i <= inputValues.length - 2; i += 2)
        allRovers.push(inputValues[i].split(" ").slice(0, -1));
    allRovers = allRovers.map(e => [parseInt(e[0]), parseInt(e[1])]);

    let plateau = inputValues[0].split(" ");
    plateau = [parseInt(plateau[0]), parseInt(plateau[1])];

    // Tests for correct input
    each([
        [i = 1, [1, 3, 'N']],                     //Read input position and give output position : i = input line from file, Expected Output = [1,3,'N']
        [i = 3, [5, 1, 'E']],                     // Read input position and give output position
    ]).test('Read input position and movement instructions and output final position of the Rover', (i, expected) => {
        let currentRover = inputValues[i].split(" ");
        currentRover = [parseInt(currentRover[0]), parseInt(currentRover[1]), currentRover[2]];
        input = {
            plateau: plateau,
            myRover: currentRover,
            movement: inputValues[i + 1],
            otherRovers: allRovers.filter(e => (e[0] !== currentRover[0] || e[1] !== currentRover[1]))
        };
        expect(myRoverMovement(input)).toEqual(expected);
    });

    // Tests for error in inputs
    each([
        [ 'there is another Rover in the way', 'I am Doomed... Save Me!!',i=5],                             
        [ 'there is negative input for current Rover coordinates','MyRover can not be placed outside the plateau',i=7],      
        [ 'myRover falling off the plateau', 'I am Doomed... Save Me!!',i=9],                          
        [ 'incorrect movement instructions', 'Not a valid movement instruction',i=11]                      
    ]).test("If %s, give error message , '%s' ", (errmsg, expected,i) => {

        let currentRover = inputValues[i].split(" ");
        currentRover = [parseInt(currentRover[0]), parseInt(currentRover[1]), currentRover[2]];

        input = {
            plateau: plateau,
            myRover: currentRover,
            movement: inputValues[i + 1],
            otherRovers: allRovers.filter(e => (e[0] !== currentRover[0] || e[1] !== currentRover[1]))
        };
        expect(myRoverMovement(input)).toEqual(expected);
    });

    // This test does not take input from file.
    test("If  negative input for plateau coordinates, send 'plateau limit should be in positive coordinates' message ", () => {
        const input = {
            plateau: [-5, 5],
            myRover: [5, 2, 'N'],
            movement: 'LMLMLMLMM',
            otherRovers: [[5, 0], [4, 5]]
        };
        expect(myRoverMovement(input)).toEqual("Input should be in positive coordinates");
    });
});
