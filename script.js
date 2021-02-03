// let currentValueFirstClass = 0;
// let currentValueEconomy = 0;
// base values of the input fields 
document.getElementById('firstClass-input').value = 0;
document.getElementById('economy-input').value = 0;


// input value changer
function inputValueChanger(classType, changeType){
    if (changeType === 'increment'){
        document.getElementById(classType +'-increment').addEventListener('click',()=>{
            const inputValue = document.getElementById(classType + '-input').value;
            let currentCount = parseInt(inputValue);
                currentCount +=  1;
            document.getElementById(classType + '-input').value = currentCount;
        })
    } else if(changeType === 'decrement'){
        document.getElementById(classType +'-decrement').addEventListener('click',()=>{
            const inputValue = document.getElementById(classType + '-input').value;
            let currentCount = parseInt(inputValue);
                currentCount -=  1;
            document.getElementById(classType + '-input').value = currentCount;
        })
    }
}

inputValueChanger('firstClass', 'increment')
inputValueChanger('firstClass', 'decrement')
inputValueChanger('economy', 'increment')
inputValueChanger('economy', 'decrement')

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




// document.getElementById('economy-increment').addEventListener('click',()=>{
//     const inputValue = document.getElementById('economy-input').value;
//     let currentCount = parseInt(inputValue);
//         currentCount +=  1;
//     document.getElementById('economy-input').value = currentCount;
// })
// document.getElementById('economy-decrement').addEventListener('click',()=>{
//     const inputValue = document.getElementById('economy-input').value;
//     let currentCount = parseInt(inputValue);
//         currentCount -=  1;
//     document.getElementById('economy-input').value = currentCount;
// })

// document.getElementById('firstClass-increment').addEventListener('click',()=>{
//     const inputValue = document.getElementById('firstClass-input').value;
//     let currentCount = parseInt(inputValue);
//         currentCount +=  1;
//     document.getElementById('firstClass-input').value = currentCount;
// })
// document.getElementById('firstClass-decrement').addEventListener('click',()=>{
//     const inputValue = document.getElementById('firstClass-input').value;
//     let currentCount = parseInt(inputValue);
//         currentCount -=  1;
//     document.getElementById('firstClass-input').value = currentCount;
// })


