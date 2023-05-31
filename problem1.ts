const FunctionDefault = (name: string, number: number = 3): void => {

    for (let i = 0; i < number; i++) {
        console.log(name);
    }
}

FunctionDefault('Shimul', 10);
console.log('\n');
FunctionDefault('Shimul');