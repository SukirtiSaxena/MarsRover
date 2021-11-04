
// Check if myRover is on the Plateau (not falling off the boundary) and not clashing with any other Rover

const errorCheck = (boundaryX, boundaryY, myRoverX, myRoverY, obstacles, err = 0) => {
    ((0 <= myRoverX && myRoverX <= boundaryX) && (0 <= myRoverY && myRoverY <= boundaryY)) ? err : err++;
    for (let j = 0; j < obstacles.length; j++)
        if (obstacles[j][0] === myRoverX && obstacles[j][1] === myRoverY) { err++; };
    return err;
};

module.exports = { errorCheck };