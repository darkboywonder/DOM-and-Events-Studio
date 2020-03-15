// Write your JavaScript code here.
// Remember to pay attention to page loading!
/*
    1. Use the window load event to ensure all elements have loaded before attaching event handlers.
    you can use:
        window.addEventListener('load', function () {
            // code goes here
        });
    or:
        window.onload = function () {
            // code goes here
        };

    Because the script is loaded in the header, we can't use the option below because it will load before the dom loads:
        (function () {
            // code goes here
        })();
 */

window.addEventListener('load', function () {
    const takeOffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const flightScreen = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    // 2a.
    takeOffButton.addEventListener('click', function () {
        let isConfirmed = confirm('Is the shuttle ready for takeoff?');

        if (isConfirmed) {
            //2b,c,d
            flightStatus.innerHTML = 'Shuttle in flight';
            flightScreen.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10,000';
        }
    });
});