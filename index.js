const textLoading = document.querySelector(`.page-reloading`);
const imageBackground = document.querySelector(`.back-image`);

let textload = 0;

let pageReloadInterval = setInterval(burring, 30);

function burring(){
    textload++
    if(textload> 99){
        clearInterval(pageReloadInterval);
        
    }
    textLoading.innerText = textload;
    textLoading.style.opacity = scale (textload, 0, 100, 1, 0);
    imageBackground.style.filter = `blur(${scale (textload, 0, 100, 30, 0)}px)`;

    // console.log(textload);
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }