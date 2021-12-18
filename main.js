nosex = 0;
nosey = 0;
choice = null;
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/4yRPBWG9/clownnose.png");
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
    if (choice = "ci"){
        image(video, 0, 0, 300, 300);
        console.log("Image = video, 0, 0, 300, 300");
        fill(255, 0, 0);
        console.log("Fill = 255, 0, 0")
        stroke(255, 0, 0);
        console.log("Stroke = 255, 0, 0")
        circle(nosex, nosey, 20)
        console.log("Circle = Nose X"+ nosex + "Nose Y"+ nosey + "20")
        console.log("Drawing circle")
    }
    else if (choice = "cln"){
        image(video, 0, 0, 300, 300);
    console.log("Image = video, 0, 0, 300, 300");
    image(clown_nose, nosex, nosey, 30, 30);
    console.log("Drawing clown nose");
    }
    else{
        console.log("Enter any one option to proceed")
    }
}
function take_snapshot()
{
    save('Clown filter image screenhot');
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}
function drawcircle(){
    choice = "ci"
}
function drawclown_nose(){
    choice = "cln"
}