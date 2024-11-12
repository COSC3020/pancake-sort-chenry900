function flip(array, n) {
    var change[n]
    var c = n - 1;
    for (i = 0; i < n; i++)
        change[c] = array[i];
        c = c - 1;
    for (i = 0; i < n; i++)
        array[i] = change[i];
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var largest = array[0], smallest = array[0], size = array.length();
    var swap = 0;
    for(i = 0; i < array.length(); i++)
        if(largest < array[i])
            largest = array[i];
        if(smallest > array[i])
            smallest = array[i];
    while(largest != smallest)
        for(i = 0; i < size; i++)
            if(largest < array[i])
            {
                largest = array[i];
                swap = i;
            }
        flip(array, (swap + 1));
        size = size-1;
    return array;
}
