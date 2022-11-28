
let groupName=document.getElementById("fname")
let btn=document.querySelector("button")
let groupSelected=document.querySelector(".groups")
 btn.addEventListener("click",createGroup)
groupSelected.addEventListener("click",createListGroups)


function createGroup(){
       let body=document.body;
       let div=document.createElement("div")
       let h2=document.createElement("h2")
       let form=document.createElement("form")

       div.className="groups"
       alert("the group created")
    form.appendChild(div)
    div.appendChild(h2.appendChild(groupName))
        body.appendChild(form)

}
function createListGroups(){
    let body=document.body;
    let div=document.createElement("div")
    let h2=document.createElement("h2")
    h2.textContent="list"
    let form=document.createElement("form")
    form.className="listBox"
    let list=document.createElement("li")
    let ul=document.createElement("ul")
    ul.appendChild(list)
    list.appendChild("roro")
    div.appendChild(ul)
    div.appendChild(h2)
    form.appendChild(div)
    body.appendChild(form)
}
