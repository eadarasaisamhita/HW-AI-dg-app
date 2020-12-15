song="";
leftWristeX =0;
leftWristeX =0;
rightWristeX =0;
rightWristeX =0;

function preload()
{
    song=loadSound("")
}

function setup()
{
  canvas=createCanvas(600,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  PoseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function draw()
{
  image(video,0,0,600,500);
}

function play() 
{
  song.play();
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("scoreRightWrist="+scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);
    
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
  }
}
