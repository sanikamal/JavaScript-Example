// Using Function Closures with Timers

// Use an anonymous function as first parameter to the setInterval() or setTimeout() method call:

intervalId=setInterval(function() {
x+=5;
var left = x + "px";
document.getElementById("redbox").style.left=left;
},100);


// function bing() {
//     alert('Bing!');
//     }
//     setTimeout(bing, 3000);