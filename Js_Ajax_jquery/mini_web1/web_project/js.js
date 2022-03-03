onload = () => {
    let menuar = [];
    let mainlist = document.getElementById("menu");
    let title = [{ "title": "Introduction", "link": "./data/intro" }, { "title": "What you should already know", "link": "./data/why" }, { "title": "JavaScript and Java", "link": "./data/js&java" }, { "title": "Hello World", "link": "./data/hw" }, { "title": "Variables", "link": "./data/var" }, { "title": "Variables Declaration", "link": "./data/vard" }, { "title": "Variables Scope", "link": "./data/varscope" },];

    for (let i = 0; i < title.length; i++) {
        let le = document.createElement("li");
        le.innerHTML = title[i].title;

        le.onclick = () => {
            for (let j = 0; j < title.length; j++)
                menuar[j].removeAttribute("style");

            le.setAttribute("style", "background-color:rgb(74, 214, 137)");
            let ajx = new XMLHttpRequest();
            ajx.onreadystatechange=()=>{
                if(ajx.readyState==4 && ajx.status==200){
                    document.getElementById("target").innerHTML = ajx.responseText;            
                }
            }
            ajx.open("GET", title[i].link, true);
            ajx.send();
            
        }

        menuar[i] = le;
        mainlist.appendChild(menuar[i]);
    }
    menuar[0].click();
}