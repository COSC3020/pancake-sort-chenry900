function flip(array, n) {
    var change = new Array(n);
    var c = n - 1;
    for (var i = 0; i < n; i++) {
        change[c] = array[i];
        c = c - 1;
    }
    for (var i = 0; i < n; i++) {
        array[i] = change[i];
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var largest = 0, size = array.length;
    for(var i = size; i > 1; i--)
        {
            largest = 0;
            for (var b = 1; b < i; b++) {
                if(array[largest] < array[b])
                    largest = b;
            }
            if (largest != 0)
                flip(array, largest +1);
            flip(array, i);
        }
    return array;
}
