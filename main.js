prediction ="";
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = captured_image src ="' + data_uri +'"/>';
    })
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C4AbT9Ir_/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data= "You are making the" + prediction + "symbol";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "Thumbs Up"){
        document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if(results[0].label == "Victory"){
        document.getElementById("update_emoji").innerHTML = "&#9996";
        }
        if(results[0].label == "Ok"){
        document.getElementById("update_emoji").innerHTML = "&#128076";
        }
        if(results[0].label == "A"){
        document.getElementById("update_emoji").innerHTML = "&#9398";
        }
        if(results[0].label == "B"){
        document.getElementById("update_emoji").innerHTML = "&#9399";
        }  
        if(results[0].label == "C"){
        document.getElementById("update_emoji").innerHTML = "&#9400";
        } 
    }
}