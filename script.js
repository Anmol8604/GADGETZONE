const toggleBtn = document.getElementById('toggle');
toggleBtn.onclick = () => {
    document.body.classList.toggle('dark');
}

function changeMac1(c) {
    const image = document.getElementById("macbook-1");
    image.src = "macBook/MacBook_Air_" + c + ".png";
}
function changeMac2(c) {
    const image = document.getElementById("macbook-2");
    image.src = "macBook/MacBook_Air_Open_" + c + ".png";
}
function changeMac3(c) {
    const image = document.getElementById("macbook-3");
    image.src = "macBook/MacBook_Pro1_" + c + ".png";
}
function changeMac4(c) {
    const image = document.getElementById("macbook-4");
    image.src = "macBook/Macbook_Pro_" + c + ".png";
}


function changePhone1(c) {
    const image = document.getElementById("iphone-1");
    image.src = "iPhone/iPhone_" + c + ".png";
}
function changePhone2(c) {
    const image = document.getElementById("iphone-2");
    image.src = "iPhone/iPhone_Upright_L_" + c + ".png";
}
function changePhone3(c) {
    const image = document.getElementById("iphone-3");
    image.src = "iPhone/iPhone_Laying_" + c + ".png";
}
function changePhone4(c) {
    const image = document.getElementById("iphone-4");
    image.src = "iPhone/iPhone_Upright_R_" + c + ".png";
}


function changePad1(c) {
    const image = document.getElementById("pad-1");
    image.src = "iPad/iPad_Laying_L_" + c + ".png";
}
function changePad2(c) {
    const image = document.getElementById("pad-2");
    image.src = "iPad/iPad_Standing_R_" + c + ".png";
}
function changePad3(c) {
    const image = document.getElementById("pad-3");
    image.src = "iPad/iPad_Laying_R_" + c + ".png";
}
function changePad4(c) {
    const image = document.getElementById("pad-4");
    image.src = "iPad/iPad_Standing_L_" + c + ".png";
}


function changePod1(c) {
    const image = document.getElementById("air-pod-1");
    image.src = "airPods/Airpods_1__" + c + ".png";
}
function changePod2(c) {
    const image = document.getElementById("air-pod-2");
    image.src = "airPods/Airpods_41__" + c + ".png";
}
function changePod3(c) {
    const image = document.getElementById("air-pod-3");
    image.src = "airPods/Airpods_2__" + c + ".png";
}
function changePod4(c) {
    const image = document.getElementById("air-pod-4");
    image.src = "airPods/Airpods_4__" + c + ".png";
}