var name,email,loc,contact,pass;
async function user()
{
    var random = await fetch("https://randomuser.me/api");
    var data= await random.json();
    var user= await data.results[0];
    console.log(user)
    userInfo(user);
}
function userInfo(user)
{
    d=new Date(user.dob.date).getDate();
    m=new Date(user.dob.date).getMonth()+1;
    y=new Date(user.dob.date).getFullYear();
    name=user.name.title+" "+user.name.first+" "+user.name.last;
    email=user.email;
    dob=d+"-"+m+"-"+y;
    loc=user.location.city
    contact=user.cell;
    pass=user.login.password;
    img=user.picture.large;
    document.querySelector(".img").src=img;
}
user();
function Uname()
{
    document.querySelector(".card-title").innerHTML="Hi,My name is";
    document.querySelector(".card-text").innerHTML=name;
}
function Uemail()
{
    document.querySelector(".card-title").innerHTML="My email address is";
    document.querySelector(".card-text").innerHTML=email;
}
function Udob()
{
    document.querySelector(".card-title").innerHTML="My birthday is";
    document.querySelector(".card-text").innerHTML=dob;
}
function Uloc()
{
    document.querySelector(".card-title").innerHTML="My address is";
    document.querySelector(".card-text").innerHTML=loc;
}
function Ucont()
{
    document.querySelector(".card-title").innerHTML="My phone number is";
    document.querySelector(".card-text").innerHTML=contact;
}
function Upass()
{
    document.querySelector(".card-title").innerHTML="My password is";
    document.querySelector(".card-text").innerHTML=pass;
}
Uname();