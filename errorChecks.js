/* This file is to check for errors :
 --> Check if myRover is on the Plateau and not falling off .
 --> Check if myRover is not clashing with any other Rover
 --> Check if Plateau size is provided in positive coordinates 
 --> Check if initial placement of Rovers are on the plateau and not outside the boundary.
 */

// Check if myRover is on the Plateau (not falling off the plateau) and not clashing with any other Rover
const errorCheck = (input, err = 0) => {
    ((0 <= input.myRover[0] && input.myRover[0] <= input.plateau[0]) &&
        (0 <= input.myRover[1] && input.myRover[1] <= input.plateau[1])) ? err : err++;
    [...input.otherRovers].forEach(o => {
        (o[0] === input.myRover[0] && o[1] === input.myRover[1]) ? err++ : err;
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