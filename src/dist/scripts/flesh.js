var spin = document.getElementsByClassName('spin');

spin[0].classList.remove("hidden");

var curr = 0

function flesh(){
    
    let divs = spin[curr].children;
    if (divs[1].classList.contains("hidden")){
        divs[2].classList.add("hidden")
        divs[1].classList.remove("hidden")
    }

    else{
        divs[1].classList.add("hidden")
        divs[2].classList.remove("hidden")
    }
}

function next(){
    if(curr==0)
        document.getElementsByClassName('arrowLeft')[0].classList.remove("hidden");
    if(curr==spin.length - 1){
        document.getElementsByClassName('arrowRight')[0].classList.add("hidden");
        document.getElementsByClassName('arrowRight')[1].classList.remove("hidden");
    }

    spin[curr+1].classList.remove("hidden");
    spin[curr].classList.add("hidden");
    curr++;

}

function prev(){
    if(curr==1)
        document.getElementsByClassName('arrowLeft')[0].classList.add("hidden");
    if(curr==spin.length - 1){
        document.getElementsByClassName('arrowRight')[1].classList.add("hidden");
        document.getElementsByClassName('arrowRight')[0].classList.remove("hidden");
    }
    spin[curr-1].classList.remove("hidden");
    spin[curr].classList.add("hidden");
    curr--;

}