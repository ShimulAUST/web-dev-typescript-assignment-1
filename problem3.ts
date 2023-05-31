const ReverseAnArray = <T>(...restItems: T[]): T[] => {
    let arr: T[] = Array(restItems.length);
    let j = 0;
    for (let i = restItems.length - 1; i >= 0; i--) {
        arr[j] = restItems[i];
        j++;
    }
    return arr;
}

const reverseArray = ReverseAnArray('Shimul', 'Paul', 'Rudra', 'Voumik');
console.log(reverseArray);