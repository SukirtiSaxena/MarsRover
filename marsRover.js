

const myRoverMovement = inputInstructions => {
    if (inputInstructions === undefined) throw new Error("Instructions are required");
    let err = 0;
    for (let i = 0; i < inputInstructions.movementInstructions.length; i++) {
        switch (inputInstructions.movementInstructions[i]) {
            case "L": myRoverFaceChange('L', inputInstructions); break;
            case "R": myRoverFaceChange('R', inputInstructions); break;
            case "M": err = myRoverFaceChange('M', inputInstructions); if (err > 0) return "I am Doomed... Save Me!!"; else break;
        };
    };
    return [inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.myRover[2]];
};

const myRoverFaceChange = (roverMovement, inputInstructions, err = 0) => {
    switch (inputInstructions.myRover[2]) {
        case "N":
            roverMovement === 'L' ? inputInstructions.myRover[2] = "W" :
                roverMovement === 'R' ? inputInstructions.myRover[2] = "E" :
                    roverMovement === 'M' ? (
                        inputInstructions.myRover[1] += 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        case "S":
            roverMovement === 'L' ? inputInstructions.myRover[2] = "E" :
                roverMovement === 'R' ? inputInstructions.myRover[2] = "W" :
                    roverMovement === 'M' ? (
                        inputInstructions.myRover[1] -= 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        case "E":
            roverMovement === 'L' ? inputInstructions.myRover[2] = "N" :
                roverMovement === 'R' ? inputInstructions.myRover[2] = "S" :
                    roverMovement === 'M' ? (
                        inputInstructions.myRover[0] += 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        case "W":
            roverMovement === 'L' ? inputInstructions.myRover[2] = "S" :
                roverMovement === 'R' ? inputInstructions.myRover[2] = "N" :
                    roverMovement === 'M' ? (
                        inputInstructions.myRover[0] -= 1,
                        err = errorCheck(inputInstructions.boundary[0], inputInstructions.boundary[1], inputInstructions.myRover[0], inputInstructions.myRover[1], inputInstructions.otherRovers)) :
                        err++;
            return err;
        default:
            return err++;
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