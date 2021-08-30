let angka= 0;      
	let pog = new Audio('pog.mp3');
	let achievement = new Audio('achievement.mp3');

	  function click_pog() {
		document.getElementById("tombolA").style.display = "block";
   document.getElementById("tombolL").style.display = "block";
            pog.currentTime = 0;
        var pog_click = document.getElementById('pog_image');
  pog_click.setAttribute("src", "1.png");
}
        function release() {
  var pog_reset = document.getElementById("pog_image");
  pog_reset.setAttribute("src", "2.png");
}
        
	function maintheme() {
	var sample = document.getElementById("foobar");
sample.play();
}
	function score_reset() {
		angka = localStorage.removeItem("angka");
		Toastify({
className:"toastify-default",
  text: "You just reset the score",
  duration: 6000,
  gravity: "bottom", 
  position: "center", 
  }).showToast();
        }
        
        
      function load()  {
      	document.getElementById("tombolA").style.display = "none";
      	document.getElementById("tombolL").style.display = "none";
        	 if(localStorage.getItem("angka")!=null)
                 {
                     counter = Number(localStorage.getItem("angka"));
                     document.getElementById("counterValue").innerHTML = counter;
                 }
}







        