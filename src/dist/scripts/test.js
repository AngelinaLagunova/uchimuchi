var form = document.getElementById('testForm');
var count = 0;
document.getElementById('testForm').addEventListener('submit', function(event) {

    event.preventDefault();

        if (form.test1.value.toLowerCase()!="мясо в кислом соусе по-западнохунаньски"){
            
            form.test1.classList.add("red");
            form.sub.classList.add("red2");
            console.log("ok");
        }
            
        else{
            form.test1.classList.add("green");
            form.sub.classList.add("green2");
            count++;

        }
});

form.test1.onfocus = function() {
    form.test1.classList.remove('red');
    form.sub.classList.remove('red2');
    form.test1.classList.remove('green');
    form.sub.classList.remove('green2');
};

function next(){
    let test1 = document.getElementsByClassName("test")[0];
    let test2 =  document.getElementsByClassName("test")[1]
    if(count>=2){
        test1.classList.add("hidden");
        test2.classList.add("hidden");
        document.getElementsByClassName("test2")[0].classList.remove("hidden");
        document.getElementsByClassName("next")[0].classList.add("hidden");


    }
    else{
        if(test1.classList.contains("hidden")){
            test1.classList.remove("hidden");
            test2.classList.add("hidden");
        }
        else{
            test2.classList.remove("hidden");
            test1.classList.add("hidden");
        }
    
    }
}

var form2 = document.getElementById('testForm2');

document.getElementById('testForm2').addEventListener('submit', function(event) {

    event.preventDefault();

        if (form2.test2.value!="毛氏红烧肉"){
            
            form2.test2.classList.add("red");
            form2.sub2.classList.add("red2");
            console.log("ok");
        }
            
        else{
            form2.test2.classList.add("green");
            form2.sub2.classList.add("green2");
            count++;

        }
});

form2.test2.onfocus = function() {
    form2.test2.classList.remove('red');
    form2.sub2.classList.remove('red2');
    form2.test2.classList.remove('green');
    form2.sub2.classList.remove('green2');
};