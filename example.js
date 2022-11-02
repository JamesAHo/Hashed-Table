// given 2 arrays 


// find item inCommon
// O(N^2) SOLUTION
// nested for loop
function CommonItem(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++){
            if(arr[i] === arr2[j]) return true
        }
    }
    return false
}
let array1 = [1,3,5];
let array2 = [2,4,5];
// output true
console.log(CommonItem(array1, array2))

// Better