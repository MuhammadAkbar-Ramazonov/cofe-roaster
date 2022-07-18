var elOpenModelBtn = document.querySelector(".js-modal-btn");
var elOpenModel = document.querySelector(".modal")
var elcloseModel = document.querySelector(".modal-btn") 

elOpenModelBtn.addEventListener("click", function(){
    elOpenModel.classList.add("modal-open");
});

elOpenModel.addEventListener("click", function(){
    elOpenModel.classList.remove("modal-open");
})