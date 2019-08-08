let A = 0;
const arrowtoright = document.getElementById("arrowtoright");
const arrowtoleft = document.getElementById("arrowtoleft");
const coverimage = document.getElementById("coverimage");
const imagefilesarray = ["d6fdedbe166a8098036b05e994bfd360.png","sun2.jpg","undraw.png"];

coverimage.setAttribute("src" ,"./img/"+imagefilesarray[A]);

function setImage (i) {
    let imageNumber = (i % imagefilesarray.length);
    coverimage.setAttribute("src" ,"./img/"+imagefilesarray[imageNumber]);
}

function toleft() { 
    console.log('left click');
    A = A + 1;
    setImage(A); 
}

function toright() { 
    console.log('right click');
    A = A + imagefilesarray.length - 1;
    setImage(A);
 }

arrowtoright.addEventListener("click",toright);
arrowtoleft.addEventListener("click", toleft);