const title = document.getElementById("paragraph");
const screen = document.getElementById("bigImage");
const images = document.getElementById("imgsContainer");

images.addEventListener("click", function(e){
    console.log(e);

    if (e.target.hasAttribute("src")){
        screen.src = e.target.src;
        title.textContent = e.target.name;   
    }

     

})