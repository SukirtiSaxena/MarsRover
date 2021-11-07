
// Rover Direction Change as per the input instructions
const { errorCheck } = require("./errorChecks.js");
const { Move, Direction ,rotation} = require("./marsRoverConstants.js");

const myRoverFaceChange = (roverMovement, input, err = 0) => {
    if (roverMovement !== Move.Move)  // Left or Right turn
        input.myRover[2] = (rotation.filter(e => e.turn === roverMovement))[0].face[input.myRover[2]];
    // if Move 
    else {
        switch (input.myRover[2]) {
            case Direction.North:
                input.myRover[1]++;
              return  errorCheck(input);
           
            case Direction.South:
                input.myRover[1]--; 
               return errorCheck(input);
         
            case Direction.East:
                input.myRover[0]++;
                return  errorCheck(input);
         
            case Direction.West:
                input.myRover[0]--;
                return  errorCheck(input);
        };
    };
};

module.exports = { myRoverFaceChange };