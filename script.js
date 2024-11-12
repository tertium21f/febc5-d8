function changeColor() {
    document.getElementById("greetings").style.color = "blue"
}

function hideBtn() {
    document.querySelector("#title-text").classList.add("title")
}

//document.getElementById("changeBtn").addEventListener("click",changeColor)
// บนล่างทำได้เหมือนกัน แต่แนะนำบนมากกว่า
// document.getElementById("changeBtn").onclick = function(){
//     document.getElementById("greetings").style.color = "blue"
// }
// document.getElementById("hideBtn").addEventListener("click",hideBtn)
// document.getElementById("hideBtn").addEventListener("click",changeColor)
// document.getElementById("results")


// function addElement() {
//     let newElement = document.createElement("p");
//     newElement.innerHTML = "Hello World";
//     let result = document.getElementById("results");
//     result.appendChild(newElement);
//   }

function addElement() {
    let newElement = document.createElement("p"); //สร้าง tag P ขึ้นมาก่อน
    let input = document.getElementById("todo").value // ดึงข้อมูลใน input todo
    newElement.innerHTML = input //
    let result = document.getElementById("results");
    result.appendChild(newElement);
    document.getElementById("todo").value = "" //ทำให้เป็นค่าว่าง
}

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
        let result = document.getElementById("results");
        for (let i = 0; i < json.length; i++) {
            let newElement = document.createElement("p");
            newElement.innerHTML = json[i].title;
            result.appendChild(newElement);
        }
    });
