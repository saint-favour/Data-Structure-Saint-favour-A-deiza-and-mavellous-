const two = [2,4,8]
function isEmpty(array) {
    let length = 0
    for(let item in array){
        length++
    }
    if(length === 0){
        return true;
    }else{
        return false
    }
}

console.log(isEmpty())

function isfull() {
    
    let length = 6
    for(let item in two){
        length++
    }
    if(length === 6){
        return true;
    }else{
        return false
    }
}

console.log(isfull())

function isAdd(){
    if(isEmpty == true && isfull == true){
       return true
    }else{
        return false
    }
}

console.log(isAdd())





// function isFull(arr, maxLength) {
//     let length = 0;
//     let maxLength = 6

//     for(let item in arr) {
//         length++;
//     }
//     if(length === maxLength) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isFull())



