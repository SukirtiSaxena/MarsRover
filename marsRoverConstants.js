/* Defining Constant Values in this file
*/

const Move = {
    Left: 'L',
    Right: 'R',
    Move: 'M'
};
const Direction = {
    North: 'N',
    South: 'S',
    East: 'E',
    West: 'W'
};
const rotation = [
    { turn: 'L', face: { 'N': 'W', 'S': 'E', 'E': 'N', 'W': 'S' } },
    { turn: 'R', face: { 'N': 'E', 'S': 'W', 'E': 'S', 'W': 'N' } }
];

module.exports = { Move, Direction, rotation };