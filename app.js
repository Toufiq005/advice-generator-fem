const advice = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');



function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceDeta => {
        const adviceObj = adviceDeta.slip;
        advice.textContent = adviceObj.advice;
        adviceId.textContent = adviceObj.id
    })
}