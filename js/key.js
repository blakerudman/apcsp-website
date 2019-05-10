document.onkeypress = function (e) {
    e = e || window.event;
    document.getElementById("p1").innerHTML = "Key Pressed: " + String.fromCharCode(e.keyCode);
}
