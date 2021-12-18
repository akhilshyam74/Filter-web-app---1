nosex = 0;
nosey = 0;
choice = null;
function preload(){

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    console.log("Creating canvas");
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    console.log("Creating Webcam")

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
   
}
function take_snapshot()
{
   
}
function modelLoaded(){
  
}
function gotPoses(results)
{
  
}
