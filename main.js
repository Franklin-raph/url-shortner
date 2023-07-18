const userInput = document.querySelector("input[type='text']")
document.querySelector("button").addEventListener("click", ()=> {
    if(userInput.value.length === 0){
        return
    }else{
        document.querySelector(".link-container .body").innerHTML += `
                <div>
                    <div class="url-text-div">
                        <div>
                            <p>the very very long link</p>
                            <div>
                                <p>short link</p>
                                <div class="actions">
                                    <a href=${userInput.value} target="_blank">
                                      <i class="ri-external-link-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
})


{/* <i class="ri-clipboard-fill" onclick="copyLink(123)"></i>
<i class="ri-share-fill"></i>
function copyLink(generatedLink){
  navigator.clipboard.writeText(generatedLink)
} */}
