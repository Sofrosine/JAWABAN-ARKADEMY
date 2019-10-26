function findHighestProfit(arr) {
    let x = []
    for (let i = 0; i < arr.length; i++ ) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                x.push(arr[j] - arr[i]);
            }
            if(arr[i] === arr[j]) {
                x.push(arr[i] - arr[j]);
            }
            if(arr[i] < arr[j]) {
                x.push(Math.abs(arr[i] - arr[j]));
            }
            
            
        }
    }
    return x;
}