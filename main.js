// contact us
var inp = document.getElementById('in'),
inp1 = document.getElementById('in1'),
inp2 = document.getElementById('in2'),
count=document.getElementById('count');
inp.onfocus=function(){
    inp.placeholder=''
}
inp.onblur=function(){
    inp.placeholder='enter your name'
}
inp1.onfocus=function(){
    inp1.placeholder=''
}
inp1.onblur=function(){
    inp1.placeholder='enter your e-mail'
}
inp2.onfocus=function(){
    inp2.placeholder=''
}
inp2.onblur=function(){
    inp2.placeholder='message'
}
inp2.onkeyup=function(){
   count.textContent= 100- inp2.Value.lenght;
}
//contact us
$(document).ready(function(){
    //navbar
    $(".navbarr .navbar li ").click(function(e){
        e.preventDefault();
         $(this).addClass("active").siblings().removeClass("active");
    })
    fiid();
    function fiid(){
        $(".navbarr h3").fadeOut(1000,function (){
            $(".navbarr h3").fadeIn(1000);
            fiid();
        })
    }
    //navbar 
    // contact us 
    $(".input").blur(function(){
        if ($(this).val()== ''){
            $(this).next('br').next('span').fadeIn().delay(3000).fadeOut();
        }
    });
//contact us
})