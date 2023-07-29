lwrx=0;
rwrx= 0;
lwry=0;
rwry=0;
lwscore=0;
songstatus="";
top="";
inception="";
peterpantheme="";
harrypotterremix="";
discomusiclol="";
songfinal="";
songfinalname="";
function preload(){
top = loadSound('TOP2.wav');
inception= loadSound('inception2.mp3');
songfinal = loadSound('music2.mp3');
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
    fill("red");
    stroke("orange");
   songstatus= songfinal.isPlaying();
   if (lwscore> 0.2) {
    circle(lwrx,lwry,20);
    inception.stop();
    songfinal.stop();
    harrypotterremix.stop();
    discomusiclol.stop();
    top.stop();
 
  
    if (songstatus == false) {
        if(lwry> 0 && lwry <= 225){
            songfinal= discomusiclol;
            songfinalname="Discomusic";
            songstatus=songfinal.isPlaying();
        }
        else if(lwry > 225 && lwry <= 450){
            songfinal=inception;
            songfinalname="Inception:time remix";
            songstatus=songfinal.isPlaying();
        }
        songfinal.play();
        document.getElementById("songplaying").innerHTML= "Now Playing-"+songfinalname;

    }


    
   }
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
    lwscore= results[0].pose.keypoints[9].score;
    console.log(lwscore);
}
}