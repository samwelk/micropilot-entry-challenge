function numberOfZeros(array) {
    var zeros = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeros.push(array[i]);
        }
    }
    console.log(zeros.length);
}

numberOfZeros([1, 0, 5, 6, 0, 2]);