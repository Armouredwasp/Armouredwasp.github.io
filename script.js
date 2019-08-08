let A = 0;
const arrowtoright = document.getElementById("arrowtoright");
const arrowtoleft = document.getElementById("arrowtoleft");
arrowtoright.addEventListener("click",toright);
arrowtoleft.addEventListener("click", toleft);
const coverimage = document.getElementById("coverimage");
const imagefilesarray = ["d6fdedbe166a8098036b05e994bfd360.png","sun2.jpg","undraw.png"];
const imgsnum = imagefilesarray.length;
coverimage.setAttribute("src" ,"./img/"+imagefilesarray[A]);

function toleft() {changeimage(-1)};

function toright() {changeimage(1)};

function changeimage(i) { if(!((A===0)&&(i===-1))&&!((A===imgsnum-1)&&(i===1))){
     A = A+i;
     console.log(A);
    coverimage.setAttribute("src" ,"./img/"+imagefilesarray[A])
}
}
