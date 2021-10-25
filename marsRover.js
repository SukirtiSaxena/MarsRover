

const myRoverMovement = inputInstructions => {
    if (inputInstructions === undefined) throw new Error("Instructions are required");

    let arr = [inputInstructions.boundary[0],    //arr[0]
    inputInstructions.boundary[1],           // arr[1]
    inputInstructions.movementInstructions,  // arr[2] 'LMLMLMLMM'
    inputInstructions.myRover[0],            // arr[3] myRoverX - initial 1
    inputInstructions.myRover[1],            // arr[4] myRoverY - initial 2
    inputInstructions.myRover[2],            // arr[5] myRoverFace - initial 'N'
    inputInstructions.otherRovers            // arr[6] Other Rovers coordinates to check clashes/obstacles - [[3,3],[4,5]]
    ];

    let err = 0;
    for (let i = 0; i < arr[2].length; i++) {
        switch (arr[2][i]) {
            case "L": myRoverFaceChange('L', arr); break;
            case "R": myRoverFaceChange('R', arr); break;
            case "M": err = myRoverFaceChange('M', arr); if (err > 0) return "I am Doomed... Save Me!!"; else break;
        };
    };
    return arr;
};

const myRoverFaceChange = (roverMovement, arr, err = 0) => {

    switch (arr[5]) {
        case "N":
            if (roverMovement === 'L') arr[5] = "W";
            if (roverMovement === 'R') arr[5] = "E";
            if (roverMovement === 'M') {
                arr[4] += 1;
                err = errorCheck  (arr[0],arr[1],arr[3],arr[4],arr[6]);
            };
            return err;
        case "S":
            if (roverMovement === 'L') arr[5] = "E";
            if (roverMovement === 'R') arr[5] = "W";
            if (roverMovement === 'M') {
                arr[4] -= 1;
                err = errorCheck  (arr[0],arr[1],arr[3],arr[4],arr[6]);
            };
            return err;
        case "E":
            if (roverMovement === 'L') arr[5] = "N";
            if (roverMovement === 'R') arr[5] = "S";
            if (roverMovement === 'M') {
                arr[3] += 1;
                err = errorCheck  (arr[0],arr[1],arr[3],arr[4],arr[6]);
            };
            return err;
        case "W":
            if (roverMovement === 'L') arr[5] = "S";
            if (roverMovement === 'R') arr[5] = "N";
            if (roverMovement === 'M') {
                arr[3] -= 1;
                err = errorCheck  (arr[0],arr[1],arr[3],arr[4],arr[6]);
            };
            return err;
        default:
            return "Not a Valid Movement ";
    }
};

const errorCheck = (boundaryX,boundaryY,myRoverX,myRoverY,obstacles,err = 0) => {
    (0 <= myRoverX <= boundaryX && 0 <= myRoverY <= boundaryY) ? err : err++;
    for (let j = 0; j < obstacles.length; j++)
        if (obstacles[j][0] === myRoverX && obstacles[j][1] === myRoverY) { err++; };
return err;
};


module.exports = { myRoverMovement };