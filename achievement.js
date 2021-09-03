function angka_count() {
  pog.play();
            angka = Number(localStorage.getItem("angka"));
            console.log(angka);
            angka += 1;
            localStorage.setItem("achievement",document.getElementById("newbie-text"));             
            localStorage.setItem("achievement",newbie);             
            localStorage.setItem("angka",angka);             
            document.getElementById("score").innerHTML = angka;
if(angka === 1) {
	Toastify({
className:"toastify-default",
  text: "Hello new poggers",
  duration: 4000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 10) {
	var newbie = document.getElementById("newbie");
	  newbie.setAttribute("src", "trophy/bronze.png");
  document.getElementById("newbie-text").innerHTML = "Newbie";
	achievement.play();
	Toastify({
		avatar:"trophy/bronze.png",
className:"toastify-default",
  text: "Newbie",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
}).showToast();
	}
if(angka === 50) {
	var newbie = document.getElementById("starter");
	  starter.setAttribute("src", "trophy/silver.png");
  document.getElementById("starter-text").innerHTML = "Starter";
	
	achievement.play();
	Toastify({
		avatar:"trophy/silver.png",
className:"toastify-default",
  text: "Starter",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
}).showToast();
	}
	//200
	if(angka === 200) {
		var tap = document.getElementById("taptap");
	  tap.setAttribute("src", "trophy/gold.png");
  document.getElementById("taptap-text").innerHTML = "Tap tap tap";
	
	achievement.play();
	Toastify({
		avatar:"trophy/gold.png",
className:"toastify-default",
  text: "Tap tap tap",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
	//500
if(angka === 500) {
	var fast = document.getElementById("urfast");
	  fast.setAttribute("src", "trophy/platinum.png");
  document.getElementById("urfast-text").innerHTML = "ur fast...";
	
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "ur fast...",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
	}
if(angka === 550) {
	 	var rick = new Audio('rickroll.mp3');
            	rick.play();
	Toastify({
className:"toastify-rickroll",
  text: "Play rick roll",
  duration: 5000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
  rick.currentTime = 0;
	}
if(angka >= 999999999) {
	achievement.play();
	Toastify({
		avatar:"trophy/platinum.png",
className:"toastify-default",
  text: "POGGERS!",
  duration: 100,
  gravity: "bottom", 
  position: "center", 
}).showToast();
	}
} 
