let hour = document.querySelector("#hour");
let minute  = document.querySelector("#minute");
let second = document.querySelector("#second");
let times = document.querySelector("#times");

let time = () => {
    let currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    if (currentHour < 12  && currentHour > 0){
        times.innerText = "AM"
    } else{
        currentHour -= 12
        times.innerText = "PM"
    };


    hour.textContent =currentHour.toString().padStart(2,0) + " :";
    minute.textContent =currentMinute.toString().padStart(2, 0) +" :";
    second.textContent = currentSecond.toString().padStart(2,0) ;

   

}
setInterval(time,1000);
time();