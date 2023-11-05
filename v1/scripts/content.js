let body = document.querySelector("body");
let btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.addEventListener("click", doATask);
body.appendChild(btn);

let speechRecognition = new webkitSpeechRecognition()
speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = "en-us";

let transcript = "";
speechRecognition.onresult = function(event) {
    transcript = "";
    for (let i =0;i<event.results.length; ++i){
        transcript+=event.results[i][0].transcript;
    }
};



function doATask(){

    if (btn.hasAttribute("listening")=== false){
        btn.setAttribute("listening", true);
        speechRecognition.start();
    }
    else{
        btn.removeAttribute("listening");
        speechRecognition.stop();
        const myPopup = new Popup({
            id: "my-popup",
            title: "Here is what you said:",
            content: transcript
        });
        myPopup.show();
    }


}

