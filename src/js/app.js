import {
    pElement,
    h1Element,
    buttonElement
} from './domLoader'

let buttonClicked = true

buttonElement.addEventListener("click",() => {
    buttonClicked = !buttonClicked     
    if(buttonClicked){
        pElement.style.display = "block"
        pElement.style.color = "red"
    }else{
        pElement.style.color = "black"
        pElement.style.display = "none"
    }
}
)


