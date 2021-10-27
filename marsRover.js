
const { Move,Direction} = require("./marsRoverConstants.js");

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

const myRoverFaceChange = (roverMovement, inputInstructions, err = 0) => {
    switch (inputInstructions.myRover[2]) {
        case Direction.North:
            roverMovement === Move.Left ? inputInstructions.myRover[2] = Direction.West :
                roverMovement === Move.Right ? inputInstructions.myRover[2] = Direction.East :
                    roverMovement === Move.Move ? (
                        inputInstructions.myRover[1] += 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        case Direction.South:
            roverMovement === Move.Left ? inputInstructions.myRover[2] = Direction.East :
                roverMovement === Move.Right ? inputInstructions.myRover[2] = Direction.West :
                    roverMovement === Move.Move ? (
                        inputInstructions.myRover[1] -= 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        case Direction.East:
            roverMovement === Move.Left ? inputInstructions.myRover[2] = Direction.North :
                roverMovement === Move.Right ? inputInstructions.myRover[2] = Direction.South :
                    roverMovement === Move.Move ? (
                        inputInstructions.myRover[0] += 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        case Direction.West:
            roverMovement === Move.Left ? inputInstructions.myRover[2] = Direction.South :
                roverMovement === Move.Right ? inputInstructions.myRover[2] = Direction.North :
                    roverMovement === Move.Move ? (
                        inputInstructions.myRover[0] -= 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        default:
            return err;
    }
};

// Check if myRover is on the Plateau (not falling off the boundary) and not clashing with any other Rover
const errorCheck = (boundaryX, boundaryY, myRoverX, myRoverY, obstacles, err = 0) => {
    (0 <= myRoverX <= boundaryX && 0 <= myRoverY <= boundaryY) ? err : err++;
    for (let j = 0; j < obstacles.length; j++)
        if (obstacles[j][0] === myRoverX && obstacles[j][1] === myRoverY) { err++; };
    return err;
};

module.exports = { myRoverMovement };