//Gear 2 Swipe Gesture Tutorial
//----------------------------------

//https://github.com/chuvidi2003/AcceleroMeterGear
$(window).load(function(){

	//This listens for the back button press
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back")
			tizen.application.getCurrentApplication().exit();
	});

	window.addEventListener('devicemotion', function(e) {
		ax = e.acceleration.x;
		ay = e.acceleration.y;
		az = e.acceleration.z;
		rotx = e.rotationRate.alpha ;
		roty = e.rotationRate.beta ;
		rotz = e.rotationRate.gamma ;
		
		document.getElementById("xaccel").innerHTML =  'AccX : ' +  ax;
		document.getElementById("yaccel").innerHTML = 'AccY : ' + ay;
		document.getElementById("zaccel").innerHTML = 'AccZ : ' + az;
		
		document.getElementById("rotx").innerHTML = 'Rot X : ' + rotx ;
		document.getElementById("roty").innerHTML = 'Rot Y : ' + roty ;
		document.getElementById("rotz").innerHTML = 'Rot Z : ' + rotz ;
	}); 

/*	window.addEventListener("deviceorientation", function(e){
		//document.getElementById("rotx").innerHTML ='alpha value '+ Math.round(e.alpha);
		//document.getElementById("roty").innerHTML = 'beta value '+ Math.round(e.beta);
		//document.getElementById("rotz").innerHTML = 'gamma value '+ Math.round(e.gamma);
	}, true);*/

});