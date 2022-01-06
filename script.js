let angka= 0;      
	let pog = new Audio('pog.mp3');
	let achievement = new Audio('achievement.mp3');

	  function click_pog() {
            pog.currentTime = 0;
        var pog_click = document.getElementById('pog_image');
  pog_click.setAttribute("src", "1.png");
  document.getElementById('score').style.display = "none";
}
        function release() {
  var pog_reset = document.getElementById("pog_image");
  pog_reset.setAttribute("src", "2.png");
  document.getElementById('score').style.display = "block";
}
        function load()  {
        	 if(localStorage.getItem("counter")!=null)
                 {
                     counter = Number(localStorage.getItem("counter"));
                     document.getElementById("counterValue").innerHTML = counter;
                 }
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
        
  