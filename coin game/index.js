const flipButton = document.getElementById('flipButton');
    const stopButton = document.getElementById('stopButton');
    const pointsDisplay = document.getElementById('points');
    let points = 0;
    flipButton.addEventListener('click', function() {
        const isHeads = Math.random() < 0.5;
        if (isHeads) {
            points++;
            pointsDisplay.textContent = points;
            alert('You flipped heads! You win a point.');
        } else {
            alert('You flipped tails. Better luck next time!');
        }
    });


    stopButton.addEventListener('click', function() {
        alert('Game stopped. Final score: ' + points);
    });
let global='Lasha great mentor'
function local() {
    let local1='Best mentor Luka'
    function localuri() {
        let local2=123
    }
}