let hours = 0;
let minutes = 0;
let seconds = 0;
var timer = false;

const start = () => {
    timer = true;
    stopwatch();
}


const stop = () => {
    timer = false;
}

const reset = () => {

    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";

}



const stopwatch = () => {
    var hour_string = hours;
    var second_string = seconds;
    var minute_string = minutes;

    if (timer === true) {

        seconds = seconds + 1;

        if (seconds === 60) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes === 60) {
            hours = hours + 1;
            minutes = 0;
            seconds = 0;
        }

        if (seconds < 10) {
            second_string = "0" + second_string
        }

        if (minutes < 10) {
            minute_string = "0" + minute_string
        }

        if (hours < 10) {
            hour_string = "0" + hour_string
        }

        document.querySelector(".seconds").innerHTML = second_string;
        document.querySelector(".minutes").innerHTML = minute_string;
        document.querySelector(".hours").innerHTML = hour_string;


        setTimeout("stopwatch()", 1000);


    }


    // myColorArray = ["#f70776", "#f95959", "#f5c7f7", "#93e4c1", "#c06c84"];
}

// const changeColor = () => {
//     myColorArray = ["#f70776", "#f95959", "#f5c7f7", "#93e4c1", "#c06c84"];
//     const containers = document.getElementsByClassName("container");
//     let i = 0;

//     const changeBorderColor = () => {
//         if (i >= myColorArray.length) {
//             i = 0;
//         }
//         for (let j = 0; j < containers.length; j++) {
//             containers[j].style.borderColor = myColorArray[i];
//         }
//         i++;
//         setTimeout(changeBorderColor, 3000);
//     };

//     changeBorderColor();
// };

// changeColor();
