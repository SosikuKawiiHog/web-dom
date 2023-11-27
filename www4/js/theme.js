let switchmode = document.getElementById("switch");

switchmode.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "css/light-theme.css"){
        theme.href = "css/dark-theme.css";
    }
    else{
        theme.href = "css/light-theme.css";
    }
}