const doraemon = document.getElementById("doraemon");
const tree = document.getElementById("tree");

function jump() {
    if (doraemon.classList != "jump") {
    doraemon.classList.add("jump");

    setTimeout(function () {
        doraemon.classList.remove("jump");
    }, 300);
 }
}

let isAlive = setInterval(function () {
// get current doraemon Y position
    let doraemonTop = parseInt(window.getComputedStyle(doraemon).getPropertyValue("top"));


    // get current tree X postion
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left")
);


//direct collision
if (treeLeft <50 && treeLeft >0 && doraemonTop >= 140){
    //collision
alert ("WALA NA FINISH NA!");
}
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});