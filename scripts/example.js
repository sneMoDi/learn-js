const person = {
    fullName() { // Using shorthand method syntax for object methods
        return `${this.firstName} ${this.lastName}`; // Using template literals for cleaner string concatenation
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: person.fullName // Assigning the fullName function from person to person1
};

const person2 = {
    firstName: "Mary",
    lastName: "Doe",
    fullName: person.fullName // Assigning the fullName function from person to person2
};

// Now invoking the function directly from person1
console.log(person1.fullName()); // This will return "John Doe"
