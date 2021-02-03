// base values of the input fields. 
document.getElementById('firstClass-input').value = 0;
document.getElementById('economy-input').value = 0;


// input value changer function
function inputValueChanger(classType, changeType){
    const inputValue = document.getElementById(classType + '-input').value;
    let currentCount = parseInt(inputValue);
    let currentNewCount = currentCount;
    if (changeType === 'increment'){
        currentNewCount = currentCount +  1;
    }
    if (changeType === 'decrement' &&
        currentCount>0){
        currentNewCount = currentCount -  1;
    } 
    document.getElementById(classType + '-input').value = currentNewCount;
}

// firstClass increasing values. 
document.getElementById('firstClass-increment').addEventListener('click',()=>{
    inputValueChanger('firstClass','increment')
})

//firstClass decreasing values.
document.getElementById('firstClass-decrement').addEventListener('click',()=>{
    inputValueChanger('firstClass','decrement')
})

//economy increasing values.
document.getElementById('economy-increment').addEventListener('click',()=>{
    inputValueChanger('economy','increment')
})

//economy decreasing values.
document.getElementById('economy-decrement').addEventListener('click',()=>{
    inputValueChanger('economy','decrement')
})


// inputValueChanger('firstClass', 'decrement')
// inputValueChanger('economy', 'increment')
// inputValueChanger('economy', 'decrement')

// function inputValueChanger(classType, changeType){
//     if (changeType === 'increment'){
//         document.getElementById(classType +'-increment').addEventListener('click',()=>{
//             const inputValue = document.getElementById(classType + '-input').value;
//             let currentCount = parseInt(inputValue);
//                 currentCount +=  1;
//             document.getElementById(classType + '-input').value = currentCount;
//         })
//     } else if(changeType === 'decrement'){
//         document.getElementById(classType +'-decrement').addEventListener('click',()=>{
//             const inputValue = document.getElementById(classType + '-input').value;
//             let currentCount = parseInt(inputValue);
//                 currentCount -=  1;
//             document.getElementById(classType + '-input').value = currentCount;
//         })
//     }
// }

// inputValueChanger('firstClass', 'increment')
// inputValueChanger('firstClass', 'decrement')
// inputValueChanger('economy', 'increment')
// inputValueChanger('economy', 'decrement')
// function increment(classType){
//     document.getElementById(classType +'-increment').addEventListener('click',()=>{
//         const inputValue = document.getElementById(classType + '-input').value;
//         let currentCount = parseInt(inputValue);
//             currentCount +=  1;
//         document.getElementById(classType + '-input').value = currentCount;
//     })
// }

// function decrement(classType){
//     document.getElementById(classType +'-decrement').addEventListener('click',()=>{
//         const inputValue = document.getElementById(classType + '-input').value;
//         let currentCount = parseInt(inputValue);
//             currentCount -=  1;
//         document.getElementById(classType + '-input').value = currentCount;
//     })
// }

// increment('firstClass')
// increment('economy')

// decrement('firstClass')
// decrement('economy')



// document.getElementById('economy-decrement').addEventListener('click',()=>{
//     const inputValue = document.getElementById('economy-input').value;
//     let currentCount = parseInt(inputValue);
//         currentCount -=  1;
//     document.getElementById('economy-input').value = currentCount;
// })

