
// Rover Direction Change as per the input instructions
const { errorCheck} = require("./errorChecks.js");
const { Move,Direction} = require("./marsRoverConstants.js");

const myRoverFaceChange = (roverMovement, input, err = 0) => {
    switch (input.myRover[2]) {
        case Direction.North:
            roverMovement === Move.Left ? input.myRover[2] = Direction.West :
                roverMovement === Move.Right ? input.myRover[2] = Direction.East :
                    roverMovement === Move.Move ? (
                        input.myRover[1] += 1,
                        err = errorCheck(input.boundary[0], input.boundary[1], input.myRover[0], input.myRover[1], input.otherRovers)) :
                        err++;
            return err;
        case Direction.South:
            roverMovement === Move.Left ? input.myRover[2] = Direction.East :
                roverMovement === Move.Right ? input.myRover[2] = Direction.West :
                    roverMovement === Move.Move ? (
                        input.myRover[1] -= 1,
                        err = errorCheck(input.boundary[0], input.boundary[1], input.myRover[0], input.myRover[1], input.otherRovers)) :
                        err++;
            return err;
        case Direction.East:
            roverMovement === Move.Left ? input.myRover[2] = Direction.North :
                roverMovement === Move.Right ? input.myRover[2] = Direction.South :
                    roverMovement === Move.Move ? (
                        input.myRover[0] += 1,
                        err = errorCheck(input.boundary[0], input.boundary[1], input.myRover[0], input.myRover[1], input.otherRovers)) :
                        err++;
            return err;
        case Direction.West:
            roverMovement === Move.Left ? input.myRover[2] = Direction.South :
                roverMovement === Move.Right ? input.myRover[2] = Direction.North :
                    roverMovement === Move.Move ? (
                        input.myRover[0] -= 1,
                        err = errorCheck(input.boundary[0], input.boundary[1], input.myRover[0], input.myRover[1], input.otherRovers)) :
                        err++;
            return err;
        default:
            return err;
    }
};

module.exports = { myRoverFaceChange };