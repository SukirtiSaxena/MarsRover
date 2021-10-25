/*
Lines of Input to the Program:
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
Expected Output:
1 3 N
5 1 E
*/

const { myRoverMovement } = require("./marsRover.js");

describe("myRoverMovement", () => {
    test("Read input position", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [1, 2, 'N'],
            movementInstructions: 'LMLMLMLMM',
            otherRovers: [[3, 3], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual([5, 5, 'LMLMLMLMM', 1, 3, 'N', [[3, 3], [4, 5]]]);
    });

    test("If another Rover in the way send 'I am doomed' message ", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [1, 2, 'N'],
            movementInstructions: 'LMLMLMLMM',
            otherRovers: [[5, 0], [1, 3]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual("I am Doomed... Save Me!!");
    });

    test("If  myRover falling off the plateau, send 'I am doomed' message ", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [5, 5, 'N'],
            movementInstructions: 'LMLMLMLMM',
            otherRovers: [[5, 0], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual("I am Doomed... Save Me!!");
    });

    test("Read input position", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [3, 3, 'E'],
            movementInstructions: 'MMRMMRMRRM',
            otherRovers: [[3, 3], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual([5, 5, 'MMRMMRMRRM', 5, 1, 'E', [[3, 3], [4, 5]]]);
    });

});