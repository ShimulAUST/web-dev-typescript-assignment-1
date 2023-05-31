type Person = {
    name: string,
    age: number
}

const PersonObject = (persons: Person[]): Person[] => {
    return persons.filter(
        person => person.age >= 18
    );
};

const outputObjects = PersonObject([{
    name: "Shimul",
    age: 8
}, {
    name: "Paul",
    age: 18
}, {
    name: "Rudra",
    age: 20
}

]);

console.log(outputObjects);
