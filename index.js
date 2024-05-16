

let ON = document.querySelector ('.ON ');
let light = document.querySelector ('.light ');
let OFF = document.querySelector (' .OFF ');

ON.addEventListener("click", function(){
    light.src = 'https://i.ibb.co/qjSGTLb/light-bulb-on.png'
})
OFF.addEventListener("click", function(){
    light.src = 'https://i.ibb.co/SKpnxzn/light-bulb-off.png'
})
