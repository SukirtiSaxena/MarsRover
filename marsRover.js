
const {Move} = require("./marsRoverConstants.js");
const {myRoverFaceChange} = require("./directionChange.js");


const myRoverMovement = inputInstructions => {
    // Input Error Checks
    if (inputInstructions === undefined) throw new Error("Instructions are required");
    if (inputInstructions.boundary[0] < 0 || inputInstructions.boundary[1] < 0 || inputInstructions.myRover[0] < 0 || inputInstructions.myRover[1] < 0) 
        return "Input should be in positive coordinates";

    // Movement based on Input instructions    
    let err = 0;
    for (let i = 0; i < inputInstructions.movementInstructions.length; i++) {
        if(![Move.Right, Move.Move, Move.Left].includes(inputInstructions.movementInstructions[i])) return "Not a valid movement instruction";
        switch (inputInstructions.movementInstructions[i]) {
            case Move.Left : myRoverFaceChange(Move.Left, inputInstructions); break;
            case Move.Right: myRoverFaceChange(Move.Right, inputInstructions); break;
            case Move.Move: err = myRoverFaceChange(Move.Move, inputInstructions); if (err > 0) return "I am Doomed... Save Me!!"; else break;
        };
    };
    return [inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.myRover[2]];
};

module.exports = { myRoverMovement };