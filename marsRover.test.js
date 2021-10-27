const { myRoverMovement } = require("./marsRover.js");

describe("myRoverMovement", () => {

    test("Read input position and give output position", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [1, 2, 'N'],
            movementInstructions: 'LMLMLMLMM',
            otherRovers: [[3, 3], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual([1, 3, 'N']);
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

    test("Read input position and give output position", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [3, 3, 'E'],
            movementInstructions: 'MMRMMRMRRM',
            otherRovers: [[3, 3], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual([5, 1, 'E']);
    });
    
    test("If invalid character in instructions set, send 'Not a valid movement instruction' message ", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [1, 2, 'N'],
            movementInstructions: 'LMLMLMLKMM',
            otherRovers: [[5, 0], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual("Not a valid movement instruction");
    });

    test("If  negative input for boundary coordinates, send 'Boundary limit should be in positive coordinates' message ", () => {
        const inputInstructions = {
            boundary: [-5, 5],
            myRover: [5, 2, 'N'],
            movementInstructions: 'LMLMLMLMM',
            otherRovers: [[5, 0], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual("Input should be in positive coordinates");
    });

    test("If  negative input for current Rover coordinates, send 'MyRover coordinates should be positive ' message ", () => {
        const inputInstructions = {
            boundary: [5, 5],
            myRover: [5, -4, 'N'],
            movementInstructions: 'LMLMLMLMM',
            otherRovers: [[5, 0], [4, 5]]
        };
        expect(myRoverMovement(inputInstructions)).toEqual("Input should be in positive coordinates");
    });
});