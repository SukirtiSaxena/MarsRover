const { myRoverMovement } = require("./marsRover.js");
const { readFileSync } = require('fs');
const each = require('jest-each').default;
const inputValues = readFileSync('marsRoverInputFile.txt', 'utf8').split('\r\n');

describe("myRoverMovement", () => {
    let allRovers = [];
    for (let i = 1; i <= inputValues.length - 2; i += 2)
        allRovers.push(inputValues[i].split(" ").slice(0, -1));
    allRovers = allRovers.map(e => [parseInt(e[0]), parseInt(e[1])]);

    let boundary = inputValues[0].split(" ");
    boundary = [parseInt(boundary[0]), parseInt(boundary[1])];

    each([
        [i = 1, [1, 3, 'N']],                               //Read input position and give output position : i = input line from file, Expected Output = [1,3,'N']
        [i = 3, [5, 1, 'E']],                               // Read input position and give output position
        [i = 5, 'I am Doomed... Save Me!!'],                // Another Rover in my way
        [i = 7, 'Input should be in positive coordinates'], // negative input for current Rover coordinates
        [i = 9, 'I am Doomed... Save Me!!'],                // myRover falling off the plateau
        [i = 11, 'Not a valid movement instruction']        // If incorrect movement instructions
    ]).test('Read input position and give output position, if incorrect input throw error', (i, expected) => {

        let currentRover = inputValues[i].split(" ");
        currentRover = [parseInt(currentRover[0]), parseInt(currentRover[1]), currentRover[2]];

        input = {
            boundary: boundary,
            myRover: currentRover,
            movement: inputValues[i + 1],
            otherRovers: allRovers.filter(e => (e[0] !== currentRover[0] || e[1] !== currentRover[1]))
        };
        expect(myRoverMovement(input)).toEqual(expected);
    });

    test("If  negative input for boundary coordinates, send 'Boundary limit should be in positive coordinates' message ", () => {
        const input = {
            boundary: [-5, 5],
            myRover: [5, 2, 'N'],
            movement: 'LMLMLMLMM',
            otherRovers: [[5, 0], [4, 5]]
        };
        expect(myRoverMovement(input)).toEqual("Input should be in positive coordinates");
    });
});
