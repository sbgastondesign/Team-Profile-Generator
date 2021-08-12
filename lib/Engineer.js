const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github, officeNumber)
    super(name, id, email);
    this.github = github;
    this.officeNumber = officeNumber;
}

module.exports = Engineer;