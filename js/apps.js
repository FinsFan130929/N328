let element = document.getElementById("showData");

element.addEventListener("click", clicked);

let element2 = document.getElementById("showData2");

element2.addEventListener("click", clicked2);

let element3 = document.getElementById("showData3");

element3.addEventListener("click", clicked3);

let element4 = document.getElementById("showData4");

element4.addEventListener("click", clicked4);

let element5 = document.getElementById("showData5");

element5.addEventListener("click", clicked5);

let element6 = document.getElementById("showData6");

element6.addEventListener("click", clicked6);

let element7 = document.getElementById("showData7");

element7.addEventListener("click", clicked7);

let element8 = document.getElementById("showData8");

element8.addEventListener("click", clicked8);

let element9 = document.getElementById("showData9");

element9.addEventListener("click", clicked9);

let element10 = document.getElementById("showData10");

element10.addEventListener("click", clicked10);


function clicked10(event) {

    let response = event.target.getAttribute("infotext10");
    event.target.style = response;
    console.log("10")
}

function clicked9(event) {

    let response = event.target.getAttribute("infotext9");
    event.target.style = response;
    console.log("9")
}

function clicked8(event) {

    let response = event.target.getAttribute("infotext8");
    event.target.style = response;
    console.log("8")
}

function clicked7(event) {

    let response = event.target.getAttribute("infotext7");
    event.target.style = response;
    console.log("7")
}

function clicked6(event) {

    let response = event.target.getAttribute("infotext6");
    event.target.style = response;
    console.log("6")
}

function clicked5(event) {

    let response = event.target.getAttribute("infotext5");
    event.target.style = response;
    console.log("5")
}

function clicked4(event) {

    let response = event.target.getAttribute("infotext4");
    event.target.style = response;
    console.log("4")
}

function clicked3(event) {

    let response = event.target.getAttribute("infotext3");
    event.target.style = response;
    console.log("3")
}

function clicked2(event) {

    let response = event.target.getAttribute("infotext2");
    event.target.style = response;
    console.log("2")
}

function clicked(event) {

    let response = event.target.getAttribute("infotext");
    event.target.style = response;
    console.log("1")
}