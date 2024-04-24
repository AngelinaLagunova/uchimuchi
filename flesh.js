function flesh(id){
    let spin = document.getElementById(id);
    let divs = spin.children;
    if (divs[2].innerHTML=="Вонючий тофу"){
        divs[1].innerHTML = "<img src='img/sound.png'>";
        divs[2].innerHTML = "臭豆腐";
        divs[3].innerHTML = "chòudòufu";
    }

    else{
        divs[1].innerHTML = "";
        divs[2].innerHTML = "Вонючий тофу";
        divs[3].innerHTML = "<img src='img/tofu.jpg'>";
    }
}