function greeting() {
    return 'hello ironhackers!';
}

if (typeof module !== undefined) {
    module.exports = greeting;
}