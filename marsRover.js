

const myRoverMovement = inputInstructions => {
    if (inputInstructions === undefined) throw new Error("Instructions are required");

    let arr = [inputInstructions.boundary[0],   // arr[0] - Outer boundary 'x' coordinate
    inputInstructions.boundary[1],              // arr[1] - Outer boundary 'y' coordinate
    inputInstructions.movementInstructions,             // arr[2] - Movement Instruction set
    inputInstructions.myRover[0],               // arr[3] - myRover 'X' Coordinate  
    inputInstructions.myRover[1],               // arr[4] - myRover 'Y' Coordinate 
    inputInstructions.myRover[2],                       // arr[5] - myRover current facing direction
    inputInstructions.otherRovers                       // arr[6] - Other Rovers coordinates to check clashes/obstacles 
    ];

    let err = 0;
    for (let i = 0; i < arr[2].length; i++) {
        switch (arr[2][i]) {
            case "L": myRoverFaceChange('L', arr); break;
            case "R": myRoverFaceChange('R', arr); break;
            case "M": err = myRoverFaceChange('M', arr); if (err > 0) return "I am Doomed... Save Me!!"; else break;
        };
    };
    return [arr[3],arr[4],arr[5]];
};

const myRoverFaceChange = (roverMovement, arr, err = 0) => {
    switch (arr[5]) {
        case "N":
            roverMovement === 'L' ? arr[5] = "W" :
                roverMovement === 'R' ? arr[5] = "E" :
                    roverMovement === 'M' ? (
                        arr[4] += 1,
                        err = errorCheck(arr[0], arr[1], arr[3], arr[4], arr[6])) :
                        err = "Incorrect Movement Instructions";
            return err;
        case "S":
            roverMovement === 'L' ? arr[5] = "E" :
                roverMovement === 'R' ? arr[5] = "W" :
                    roverMovement === 'M' ? (
                        arr[4] -= 1,
                        err = errorCheck(arr[0], arr[1], arr[3], arr[4], arr[6])) :
                        err = "Incorrect Movement Instructions";
            return err;
        case "E":
            roverMovement === 'L' ? arr[5] = "N" :
                roverMovement === 'R' ? arr[5] = "S" :
                    roverMovement === 'M' ? (
                        arr[3] += 1,
                        err = errorCheck(arr[0], arr[1], arr[3], arr[4], arr[6])) :
                        err = "Incorrect Movement Instructions";
            return err;
        case "W":
            roverMovement === 'L' ? arr[5] = "S" :
                roverMovement === 'R' ? arr[5] = "N" :
                    roverMovement === 'M' ? (
                        arr[3] -= 1,
                        err = errorCheck(arr[0], arr[1], arr[3], arr[4], arr[6])) :
                        err = "Incorrect Movement Instructions";
            return err;
        default:
            return "Not a Valid Movement ";
    }
};

const errorCheck = (boundaryX, boundaryY, myRoverX, myRoverY, obstacles, err = 0) => {
    (0 <= myRoverX <= boundaryX && 0 <= myRoverY <= boundaryY) ? err : err++;
    for (let j = 0; j < obstacles.length; j++)
        if (obstacles[j][0] === myRoverX && obstacles[j][1] === myRoverY) { err++; };
    return err;
};

module.exports = { myRoverMovement };