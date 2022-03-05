const app = document.getElementById("list");
const add = document.getElementById("add");
const insert = document.getElementById("info");

insert.onkeypress = () => {
    if (insert.value.length >= 28)
        return false;
};

insert.onpaste = () => {
    return false;
}


add.onclick = () => {
    if (insert.value.length <= 0)
        return false;

    let data = localStorage.getItem("todo");
    console.log(data);
    if (data == null) {
        let ele = [{
            "value": insert.value,
            "status":false
        }]        

        localStorage.setItem("todo", JSON.stringify(ele));
        load();
    } else {
        let jsdt = JSON.parse(data);
        jsdt.push({ "value": insert.value });
        localStorage.setItem("todo", JSON.stringify(jsdt));        
        load();
    }

    insert.value="";
}


function load() {
    app.innerHTML="";
    let data = JSON.parse(localStorage.getItem("todo"));
    data.reverse();
    for (let item of data) {
        let el = document.createElement("li");
        let d1 = document.createElement("div");
        
        if(item.status) 
            el.setAttribute("style","background-color:green");
        d1.innerHTML = item.value;
        el.appendChild(d1);

        let d2 = document.createElement("div");
        d2.innerHTML = '&times';

        d2.onclick=()=>{            
            let d = JSON.parse(localStorage.getItem("todo"));
            let newd = [];
            for(let i of d){
                if(i.value != d1.textContent){                                        
                    newd.push(i);
                }
            }
            localStorage.setItem("todo",JSON.stringify(newd));
            load();            
        }


        d1.onclick=()=>{
            let d = JSON.parse(localStorage.getItem("todo"));
           
            let newd = [];
            for(let i of d){
                if(i.value == d1.textContent){                                        
                    el.setAttribute("style","background-color:green");
                    i.status=true;
                }
                newd.push(i);
            }
            localStorage.setItem("todo",JSON.stringify(newd));            
        }


        el.appendChild(d2);

        app.appendChild(el);
    }
}

onload=()=>{
    if(localStorage.getItem("todo")!=null)
        load();
}