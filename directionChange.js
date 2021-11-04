
// Rover Direction Change as per the input instructions
const { errorCheck} = require("./errorChecks.js");
const { Move,Direction} = require("./marsRoverConstants.js");

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

module.exports = { myRoverFaceChange };