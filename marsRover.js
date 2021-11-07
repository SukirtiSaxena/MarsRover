/* 'myRoverMovement' is the main function for the Mars Rover Task. 
Input is the complete set of instructions having plateau size, Rover coordinates and movement instructions
Output is the final position of current Rover if there is no error in the input. If any error in input instructions, it gives the error message.
*/

const { Move } = require("./marsRoverConstants.js");
const { myRoverFaceChange } = require("./directionChange.js");
const { areCoordPositive, isRoverOnPlateau } = require("./errorChecks.js");


const myRoverMovement = input => {
    // Input Error Checks
    if (input === undefined) throw new Error("Instructions are required");
    if (areCoordPositive(input.plateau[0], input.plateau[1]))
        return "Input should be in positive coordinates";
    if (isRoverOnPlateau(input.plateau[0], input.plateau[1], input.myRover[0], input.myRover[1]))
        return "MyRover can not be placed outside the plateau";
    if (!(RegExp(/^[LRM]*$/).test(input.movement))) return "Not a valid movement instruction";

    // Movement based on Input instructions    
    let err = 0;
    [...input.movement].forEach(m => {
        switch (m) {
            case Move.Left: myRoverFaceChange(Move.Left, input); break;
            case Move.Right: myRoverFaceChange(Move.Right, input); break;
            case Move.Move: err = myRoverFaceChange(Move.Move, input); break;
        };
    });
    if (err > 0) return "I am Doomed... Save Me!!";
    return [input.myRover[0], input.myRover[1], input.myRover[2]];
};

module.exports = { myRoverMovement };