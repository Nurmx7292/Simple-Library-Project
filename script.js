let modal = document.querySelector(".modal");
let books = document.querySelector(".books")
function toAdd(){
    modal.style.display = "flex"
}
window.addEventListener("click",function(event){
    if(event.target==document.querySelector(".modal_overlay")){
    modal.style.display = "none";
    }
})
function status(event){
    if(event.innerHTML.trim()=="Read"){
        event.style.backgroundColor='red'
        event.innerHTML='Not read'
    }else{
        event.style.backgroundColor='greenyellow'
        event.innerHTML='Read'
    }
}
for(let i = 0; i<localStorage.length;i++){
    books.innerHTML+=`
    <div class="book" id="${localStorage.length}">
        <div class="title">
            ${JSON.parse(localStorage[i]).title}
        </div>
        <div class="title">
        ${JSON.parse(localStorage[i]).author}
        </div>
        <div class="definition">
        ${JSON.parse(localStorage[i]).definition}
        </div>
        <div class="buttons">
            <button class="status ${(JSON.parse(localStorage[i]).status)?"read":"not_read"}" onclick=status(this)>
            ${(JSON.parse(localStorage[i]))?"Read":"Not read"}"
            </button>
            <button class="remove" onclick=remove(event)>
                Remove
            </button>
        </div>
    </div>
    `
}
function addingBook(event){
    event.preventDefault();
    console.log(localStorage)
    localStorage.setItem(localStorage.length,JSON.stringify({
        title:document.querySelector("#title").value,
        author:document.querySelector("#author").value,
        definition:document.querySelector("#descr").value,
        status:document.querySelector("#isRead").checked
    }))    
    books.innerHTML+=`
    <div class="book" id="${localStorage.length}">
        <div class="title">
            ${document.querySelector("#title").value}
        </div>
        <div class="title">
        ${document.querySelector("#author").value}
        </div>
        <div class="definition">
        ${document.querySelector("#descr").value}
        </div>
        <div class="buttons">
            <button class="status ${(document.querySelector("#isRead").checked)?"read":"not_read"}" onclick=status(this)>
            ${(document.querySelector("#isRead").checked)?"Read":"Not read"}"
            </button>
            <button class="remove" onclick=remove(event)>
                Remove
            </button>
        </div>
    </div>
    `
    modal.style.display = "none";
}
function remove(event){
    // localStorage.removeItem(Number(event.target.parentElement.parentElement.getAttribute("id")));
    books.removeChild(event.target.parentElement.parentElement);
}