
let barBtn = document.querySelector(".bar_btn");
let nav = document.querySelector(".menu_block");
let postBlock = document.querySelector("main");
let closeBtn = document.querySelector(".close_btn");
barBtn.addEventListener("click", ()=>{
	nav.classList.add("show");
	postBlock.classList.add("show_margin");
	barBtn.classList.add("no_show");
	closeBtn.classList.add("show");
})
closeBtn.addEventListener("click", ()=>{
	nav.classList.remove("show");
	postBlock.classList.remove("show_margin");
	barBtn.classList.remove("no_show");
	closeBtn.classList.remove("show");
})
