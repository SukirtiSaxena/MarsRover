
const { Move } = require("./marsRoverConstants.js");
const { myRoverFaceChange } = require("./directionChange.js");
const { areCoordPositive, isRoverOnPlateau } = require("./errorChecks.js");


const myRoverMovement = input => {
    // Input Error Checks
    if (input === undefined) throw new Error("Instructions are required");
    if (areCoordPositive(input.boundary[0], input.boundary[1]))
        return "Input should be in positive coordinates";
    if (isRoverOnPlateau(input.boundary[0], input.boundary[1], input.myRover[0], input.myRover[1]))
        return "MyRover can not be placed outside the plateau boundary";

    // Movement based on Input instructions    
    let err = 0;
    for (let i = 0; i < input.movement.length; i++) {
        if (!(RegExp(/^[LRM]*$/).test(input.movement[i]))) return "Not a valid movement instruction";
        switch (input.movement[i]) {
            case Move.Left: myRoverFaceChange(Move.Left, input); break;
            case Move.Right: myRoverFaceChange(Move.Right, input); break;
            case Move.Move: err = myRoverFaceChange(Move.Move, input); if (err > 0) return "I am Doomed... Save Me!!"; else break;
        };
    };
    return [input.myRover[0], input.myRover[1], input.myRover[2]];
};

module.exports = { myRoverMovement };