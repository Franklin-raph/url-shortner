const userInput = document.querySelector("input[type='text']")
document.querySelector("button").addEventListener("click", ()=> {
    if(userInput.value.length === 0){
        return
    }else{
        document.querySelector(".url-text-div").innerHTML = `<a href=${userInput.value} target="_blank">bit.ly/${userInput.value.substring(0,3)}</a>`
    }
})