

// var form = document.querySelector('#new-item')
// var list = document.querySelector("#list")
// var input = document.querySelector("#Items")

// form.addEventListener("submit",function(elem){
//     elem.preventDefault()
    


//     const item = document.createElement("div"    )
//         item.innerText= input.value
// item.classList.add("list-item")

// list.appendChild(item)

// input.value = " "
// item.addEventListener("click",function(){
//     item.remove()
// })

// })

var form = document.querySelector('#new-item')
var list = document.querySelector("#list")
var input = document.querySelector("#Items")

form.addEventListener("submit", function(elem){
    elem.preventDefault()

    const item = document.createElement("div")
    item.innerText = input.value
    item.classList.add("list-item")

    list.appendChild(item)
    input.value = ""

    item.addEventListener("click", function(){
        item.style.animation = "fadeOut 0.4s ease forwards"
        setTimeout(() => {
            item.remove()
        }, 400)
    })
})
