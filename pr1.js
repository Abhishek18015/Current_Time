let a;
let time;
let date;
options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + " :" + a.getMinutes() + " :" + a.getSeconds()
    document.getElementById(`time`).innerHTML = time + "<br> on " + date;
}, 1000);
console.log(time);