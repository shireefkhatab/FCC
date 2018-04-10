function permAlone(str) {
 
    var arr = str.split('');
    var counter = 0;
    
    // Swap function
    function swap(a, b){
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    // Generate function
    function generate(n){
        if (n === 1 && !/([a-zA-Z0-9])\1+/.test(arr.join(''))) {
            counter++;
        } else {
            for (var i = 0; i != n; i++) {
                // Call generate recursively
                generate(n - 1);
                // Call swap to alternate array indexs;
                swap(n % 2 ? 0 : i, n-1);
            } // end for

        } // end if

    } // end generate()

    // Call generate
    generate(arr.length);
    return counter;

} // end permAlone()

