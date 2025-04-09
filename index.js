const btn_start = document.getElementsByClassName("start")[0];
const btn_stop = document.getElementsByClassName("stop")[0];
const btn_restart = document.getElementsByClassName("restart")[0];
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("ms");

var m = 0;
var s = 0;
var ms = 0;
var control;

btn_start.onclick = function(){
    control = setInterval(chronometer,10);
    btn_start.disabled = true;
    btn_restart.disabled = false;
    btn_stop.disabled = false;
}

btn_restart.onclick = function(){
    clearInterval(control);
    btn_start.disabled = false;
    btn_restart.disabled = true;
    btn_stop.disabled = true;

    m = 0;
    s = 0;
    ms = 0;

    milliseconds.textContent = String(ms).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0") + ":";
    minutes.textContent = String(m).padStart(2, "0") + ":";
}

btn_stop.onclick = function(){
    clearInterval(control);
    btn_start.disabled = false;
    btn_restart.disabled = false;
    btn_stop.disabled = true;
}

function chronometer(){
    ms++;

    if(ms > 99){
        ms = 0;
        s++;
    };

    if(s > 60){
        s = 0;
        m++;
    }

    milliseconds.textContent = String(ms).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0") + ":";
    minutes.textContent = String(m).padStart(2, "0") + ":";
}