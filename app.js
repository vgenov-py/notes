function arrOrd(array) {
    const result = [];

    if (array[0] < array[1] && array[0] < array[2]) {
        result.push(array[0]);
        array.splice(array.indexOf(array[0]), 1);
    } else if (array[1] < array[0] && array[1] < array[2]) {
        result.push(array[1]);
        array.splice(array.indexOf(array[1]), 1);
    } else if (array[2] < array[1] && array[2] < array[0]) {
        result.push(array[2]);
        array.splice(array.indexOf(array[2]), 1);
    }
    console.log(result);
    console.log(array);

    // if (array[0] < array[1]) {
    //     result.push(array[0]);
    //     result.push(array[1]);
    // } else {
    //     result.push(array[1]);
    //     result.push(array[0]);
    // }

    result.push(Math.min(arra))

    return result;
}

console.log(arrOrd([18, 12, 9]));