

class Input{
    constructor(title,note)
    {
        this.title=title;
        this.note=note;
    }
}
//If user add note to local storage
 showNotes();
let addBtn=document.getElementById("addBtn").addEventListener("click",function(e){
    let addTitle=document.getElementById("addTitle");
    let addNote=document.getElementById("addNote");
    let note=localStorage.getItem("notes");
    console.log(note);
    if(note==null)
        {
            noteObj=[];
        }
    else{
        noteObj = JSON.parse(note);
    }
    let myNote=new Input(addTitle.value,addNote.value);
    if((addTitle.value!="")&&(addNote.value!="")){
    noteObj.push(myNote);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addTitle.value="";
    addNote.value="";
    }
     showNotes();
});

//function to show element

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = ``;
    notesObj.forEach(function(Element,index){
       html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${Element.title}</h5>
                    <p class="card-text">${Element.note}</p>
                    <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>`; 
        let noteElem = document.getElementById("notes");
    noteElem.innerHTML = html;

    });
}

//finction to delete note
function deleteNote(index) {
    let note = localStorage.getItem("notes");
    if (note == null) {
        notesObj = [];
    } 
    else {
        notesObj = JSON.parse(note);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//search

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})
