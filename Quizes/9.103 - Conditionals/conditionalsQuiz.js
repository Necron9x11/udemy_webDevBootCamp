
myAge=Number(prompt("What is your age?"));

if(myAge<0){
    alert("You are still just a twinkle in your fathers eye");
}


if(myAge===21){
    alert("So they say it's your birthday. Happy Birthday to you");
}

if(myAge%2>0){
    alert("your age is odd (and so are you...)");
}

if(Number.isInteger(Math.sqrt(myAge))){
    alert("You are a perfect square! And a doof to boot...");
}