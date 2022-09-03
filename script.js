let counter = 0;
let cbtn = document.querySelector(".counter");
let rbtn = document.querySelector(".reset");
let span = document.querySelector("span");

cbtn.onclick = () => {
    counter++;
    document.querySelector(".result").value = counter;
    if (counter < 34) {
        span.innerHTML =  `Subhanolloh`
    } else if (counter < 67 && counter > 33) {
        span.innerHTML =   `Alhamdulillah`
    } else if (counter < 99 && counter > 66) {
        span.innerHTML =   `Allohu akbar`
    } else if (counter == 99) {
        counter = 0;
    }
}
rbtn.onclick = () => {
    counter = 0;
    document.querySelector(".result").value = counter;
    span.innerHTML = `Subhanolloh`
}

