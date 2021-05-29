canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
var Roverwidth=50,Roverheight=45;
var Roverx=10,Rovery=10;
background_image_array=["mars.jpg", "Img1.jpg", "Img2.jpg", "Img3.jpg", "Img4.jpg", "Img5.jpg"];
randomnumber=Math.floor(Math.random()*6);
background_image=background_image_array[randomnumber];
rover_image="rover.png";
function add(){
  Rover_image=new Image();
  Rover_image.onload=uploadrover;
  Rover_image.src=rover_image;

  bg_image=new Image();
  bg_image.onload=uploadbg;
  bg_image.src=background_image;
}

function uploadbg(){
    ctx.drawImage(bg_image, 0,0, canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(Rover_image, Roverx,Rovery, Roverwidth,Roverheight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress=e.keycode;
    if (keypress=="37") {
     Left();
     console.log("left");
    }

    if (keypress=="38") {
        Up();
        console.log("up");
       }

       if (keypress=="39") {
        Right();
        console.log("right");
       }

       if (keypress=="40") {
        Down();
        console.log("down");
       }
}
function Up() {
    if (Rovery>=0){
Rovery = Rovery-10;
uploadbg();
uploadrover();
console.log(Roverx, Rovery);
}
}
function Down() {
    if (Rovery<=700){
    Rovery = Rovery+10;
    uploadbg();
    uploadrover();
    console.log(Roverx, Rovery);
}
    }
    function Left() {
        if (Roverx>=0){
        Roverx = Roverx-10;
        uploadbg();
        uploadrover();
        console.log(Roverx, Rovery);
    }
        }
        function Right() {
            if (Roverx<=900){
            Roverx = Roverx+10;
            uploadbg();
            uploadrover();
            console.log(Roverx, Rovery);
        }
            }

    
