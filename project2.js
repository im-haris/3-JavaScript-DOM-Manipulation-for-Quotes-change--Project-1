var openbtn = document.getElementById("open-btn");
var modalcon = document.getElementById("modal-container");
var closebtn = document.getElementById("close-btn");


openbtn.addEventListener("click", function(){

    modalcon.style.display = "block";

});

closebtn.addEventListener("click", function(){

    modalcon.style.display = "none";
} );

window.addEventListener("click", function(e) {
    if (e.target === modalcon)
        modalcon.style.display = "none";
});



