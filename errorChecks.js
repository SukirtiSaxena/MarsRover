
// Check if myRover is on the Plateau (not falling off the plateau) and not clashing with any other Rover

const errorCheck = (plateauX, plateauY, myRoverX, myRoverY, obstacles, err = 0) => {
    ((0 <= myRoverX && myRoverX <= plateauX) && (0 <= myRoverY && myRoverY <= plateauY)) ? err : err++;
    [...obstacles].forEach(o => {
        (o[0] === myRoverX && o[1] === myRoverY) ? err++ : err;
    });
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