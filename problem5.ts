const TypeGuardFunction = (param1: unknown): void => {
    if (typeof param1 === "string") {
        console.log(`The input ${param1} is a string.`);
    }
    else {
        console.log("Error! The input is not a string");
    }

}
TypeGuardFunction(5);
TypeGuardFunction("Shimul Paul");
TypeGuardFunction(true);