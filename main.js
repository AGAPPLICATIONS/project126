lwrx=0;
rwrx= 0;
lwry=0;
rwry=0;
lwscore=0;
rwscore=0;
songstatus="";
songstatus2="";
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
   songstatus2 = songfinal.isPlaying();
   if (lwscore> 0.2 ) {
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
        songstatus2=songfinal.isPlaying();
    songstatus=songfinal.isPlaying();
    if(songstatus == false && songstatus2 == false){
    songfinal.play();
        document.getElementById("songplaying").innerHTML= "Now Playing-"+songfinalname;
    }

    }


    
   }
   if(rwscore >0.2){
    circle(rwrx,rwry,20);

    inception.stop();
    songfinal.stop();
    harrypotterremix.stop();
    discomusiclol.stop();
    top.stop();
   if (songstatus2 == false) {
    if(rwry>0 && rwry<= 225){
        songfinal=inception;
        songfinalname="TOP GUN: MAVERICK(inception but with music error)";
        songstatus2= songfinal.isPlaying();
    }else if(rwry> 225 && rwry <= 450){
        songfinal=discomusiclol;
        songfinalname="HARRY POTTER REMIX(disco but roll with it haha)";
        songstatus2=songfinal.isPlaying();
    }
    songstatus2=songfinal.isPlaying();
    songstatus=songfinal.isPlaying();
    if(songstatus == false && songstatus2 == false){
    songfinal.play();
        document.getElementById("songplaying").innerHTML= "Now Playing-"+songfinalname;
    }
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
    rwscore = results[0].pose.keypoints[10].score;
    console.log(rwscore);
}
}