lwrx=0;
rwrx= 0;
lwry=0;
rwry=0;

top="";
inception="";
peterpantheme="";
harrypotterremix="";
discomusiclol="";
function preload(){
top = loadSound('TOP2.wav');
inception= loadSound('inception2.mp3');
peterpantheme = loadSound('music2.mp3');
harrypotterremix = loadSound('music.mp3');
discomusiclol = loadSound('music3.mp3');
}
function setup(){
    canvas= createCanvas(550,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet= ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function draw(){
    image(video,0,0,550,450);
}
function modelloaded(){
    console.log("Model is loaded");
}
function gotposes(results){
if(results.length > 0){
    console.log(results);
    lwrx=results[0].pose.leftWrist.x;
    rwrx= results[0].pose.rightWrist.x;
    lwry= results[0].pose.leftWrist.y;
    rwry= results[0].pose.rightWrist.y;
    console.log(lwrx,lwry, rwrx, rwry);
}
}