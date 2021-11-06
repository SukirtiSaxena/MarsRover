
// Check if myRover is on the Plateau (not falling off the boundary) and not clashing with any other Rover

const errorCheck = (boundaryX, boundaryY, myRoverX, myRoverY, obstacles, err = 0) => {
    ((0 <= myRoverX && myRoverX <= boundaryX) && (0 <= myRoverY && myRoverY <= boundaryY)) ? err : err++;
    for (let j = 0; j < obstacles.length; j++)
        if (obstacles[j][0] === myRoverX && obstacles[j][1] === myRoverY) { err++; };
    return err;
};

// Check if Plateau size is in negative coordinates 
const areCoordPositive = (plateauX, plateauY) => {
    return (plateauX < 0 || plateauY < 0);
};

// Check if Rover is on the plateau 
const isRoverOnPlateau = (plateauX, plateauY, roverX, roverY) => {
    return !((0 <= roverX && roverX <= plateauX) && (0 <= roverY && roverY <= plateauY));
};

module.exports = {
    errorCheck,
    areCoordPositive,
    isRoverOnPlateau
};