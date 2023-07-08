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
}
function draw(){
    image(video,0,0,550,450);
}