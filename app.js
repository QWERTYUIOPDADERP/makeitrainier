function makeItRain() {
    //clear out everything
    let elements = document.getElementsByClassName("rain");
    for (element in elements) {
        element.innerHTML = '';
    }


    // setup variables
    let increment = 0,
        drops = [], //empty arrays
        backDrops = [],
        frontRow = document.querySelector('.rain.front-row'),
        backRow = document.querySelector('.rain.back-row');

    while (increment < 100) {
        //random number between 98 and 1
        let randomHundred = (Math.floor(Math.random() * (98 - 1 + 1) + 1)),
            //random number between 5 and 2
            randomFive = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

        //increment
        increment += randomFive;

        //generate 'raindrop' elements with randomized css attributes
        drops.push(`<div class="drop" style="left: ${increment}%; bottom: ${randomFive + randomFive - 1 + 100}%; animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"><div class="stem" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div><div class="splat" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div></div>`);

        backDrops.push(`<div class="drop" style="left: ${increment}%; bottom: ${randomFive + randomFive - 1 + 100}%; animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"><div class="stem" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div><div class="splat" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div></div>`);
    }

    // append each 'raindrop' element to the dom
    drops.forEach(drop => {
        frontRow.innerHTML += drop;
    });

    backDrops.forEach(drop => {
        backRow.innerHTML += drop;
    });

}

async function pointsCounter() {
    let element = document.getElementById('points');
    let counter = 0;

    const DEF_DELAY = 10;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
    }

    while(true){
    await sleep(10);
    counter++
    element.innerHTML = counter;
    }

}
