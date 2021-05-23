const photo_elements = document.querySelectorAll('.photo img'),
	  overlay_img = document.querySelector('.photo-overlay img'),
	  photo_overlay = document.querySelector('.photo-overlay'),
	  photo_arr = Array.from(photo_elements);
	  
let overlay = false,
	win_h = window.innerHeight,
	win_w = window.innerWidth;

photo_arr.forEach( el => {
	el.addEventListener('click', showPhoto);
});

function showPhoto() {
	let photo_w = this.offsetWidth,
		photo_h = this.offsetHeight;
	overlay_img.src = this.src;
	overlay_img.style.top = (win_h - photo_h) / 2 + "px";
	overlay_img.style.left = (win_w - photo_w) / 2 + "px";
	photo_overlay.style.display = 'block';
	overlay = true;
}

photo_overlay.addEventListener('click', el => {
	if(overlay == true){
		photo_overlay.style.display = 'none';
		overlay = false;
	}
});