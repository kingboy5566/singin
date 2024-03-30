function sing(){
    event.preventDefault()

var first = document.getElementById('first').value
var last = document.getElementById('last').value
var email = document.getElementById('email').value
var password = document.getElementById('password').value
if(first && last && email && password){
    // console.log(first);
    // console.log(last);
    // console.log(email);
    // console.log(password);
   localStorage.setItem("fname",first)
   localStorage.setItem("lname",last)
   localStorage.setItem("email1",email)
   localStorage.setItem("pass",password)
   window.location.href="facebook.html"
}else{alert("plase enter datails")}
}


function singin(){
    var first1 = document.getElementById('name1').value

var password1 = document.getElementById('pass1').value

if(first1 === localStorage.getItem("fname") && password1 === localStorage.getItem("pass")){
    window.location.href="fpage.html"
}else{
    alert("plase enter right name and password")
}



}

// function submit(){
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var password = document.getElementById("password").value;

//     if( name && password){
//         console.log(name);
//         console.log(password);
//     }
// }










