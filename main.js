video="";
status="";

function preload(){
}

function setup(){
    webcam=createCapture(VIDEO);
    webcam.hide();
    webcam.size(480,380);

    canvas=createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(webcam,0,0,480,380);
}

function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";

    object_name=document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("Model is loaded");
    status=true;
}