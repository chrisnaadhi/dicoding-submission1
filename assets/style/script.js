function getClassification() {
    // let getData = document.querySelector("#book-form");
    let getTitle = document.querySelector("#title");
    let getSubject = document.querySelector("#subject");
    let getAuthor = document.querySelector("#author")
    
    let classTitle = getTitle.value.slice(0, 1).toLowerCase();
    let classSubject = getSubject.value;
    let classAuthor = getAuthor.value.split(" ");
    let author = classAuthor[classAuthor.length-1].slice(0, 3).toUpperCase();
    
    class_number = "<p>"+classSubject+"<br>"+author+"<br>"+classTitle+"</p>";

    document.querySelector("#result").innerHTML = class_number;
};

function dropDown() {
    document.querySelector("#dropdown").classList.toggle("show");
}