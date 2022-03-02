module.exports = function reverse (n) {
const num = parseFloat(n.toString().split('').reverse().join(''));
return num;
};
reverse(-538);

