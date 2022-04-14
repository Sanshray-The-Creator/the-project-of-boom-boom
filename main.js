songnice = "";
songgood = "";
leftwrist_x = 0;
leftwrist_y = 0;
rightwrist_x = 0;
rightwrist_y = 0;

function preload(){
    songnice = loadSound("music.mp3");
    songgood = loadSound("music3.mp3");
}

function setup(){
   canvas = createCanvas(500, 400);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   posenet = ml5.poseNet(video, modelLoaded);
   posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Model Is Loaded!")
}

function gotPoses(results){
    if(results.length > 0){
       console.log(results);
       leftwrist_x = results[0].pose.leftWrist.x;
       leftwrist_y = results[0].pose.leftWrist.y;
       rightwrist_x = results[0].pose.rightWrist.x;
       rightwrist_y = results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function Play_song(){
    songnice.play();
    songgood.play();
    songnice.setVolume(1);
    songgood.setVolume(0.5);
    songnice.rate(1);
    songgood.rate(0.5);
}