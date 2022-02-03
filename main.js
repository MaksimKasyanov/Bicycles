let progress = document.getElementById('progressbar');
let totalWidth = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressWidth = (window.pageYOffset / totalWidth) * 100;
	progress.style.width = progressWidth + "%";
}