const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
  const btn = buttons[i]
  
  btn.addEventListener('click', function(event) {
    event.target.classList.toggle('active');
  });
}

const output = document.querySelector('.output');
const input = document.querySelector('.input');

const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function (){
    console.log("Zacznij mówić");

};
//w evencie przetrzymuje to co mowimy
recognition.onresult = function (event){
    const currentText = event.resultIndex;
    //dostep do tekstu
    const transcript = event.results[currentText][0].transcript;
    input.textContent = transcript;
    outLoud(transcript);
};



output.addEventListener('click', ()=>{
recognition.start();
});

function outLoud(message){
    const utterance = new SpeechSynthesisUtterance();
    utterance.text= message;
    utterance.pitch = 1;  // a little lower
    utterance.rate = 1;   // a little faster
    utterance.volume = 1; // a little quieter
    window.speechSynthesis.speak(utterance);
};