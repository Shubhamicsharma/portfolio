
const myNav = document.querySelector(".my-navbar");
const myNavList = document.querySelector(".nav-list");

window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
      myNav.classList.add("scrolled");
      myNavList.classList.add("scrolled");
  } else {
      myNav.classList.remove("scrolled");
      myNavList.classList.remove("scrolled");
  }
};




const ball = document.querySelector('.ball');

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.1;

// Update ball position
function animate() {
	//Determine distance between ball and mouse
	let distX = mouseX - ballX;
	let distY = mouseY - ballY;
	
	// Find position of ball and some distance * speed
	ballX = ballX + (distX * speed);
	ballY = ballY + (distY * speed);
	
	ball.style.left = ballX + "px";
	ball.style.top = ballY + "px";
	
	requestAnimationFrame(animate);
}
animate();

// Move ball with cursor
document.addEventListener("mousemove", function(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
});





window.onload = function() {
    Particles.init({
  
  // normal options
    selector: '.background',
    maxParticles: 130,
    sizeVariations:5,
    connectParticles: false,
    color:'#ffffff',
    
  // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
          color: '#ffffff',
          // connectParticles: true
        }
      }, {
        breakpoint: 625,
        options: {
          maxParticles: 75,
          // connectParticles: true
        }
      }, {
        breakpoint: 420,
        options: {
          maxParticles: 50 // disables particles.js
        }
      }
    ]

    
  });

  };





  document.getElementById('scrollBtnAbout').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  document.getElementById('scrollBtnEducation').addEventListener('click', function() {
    document.getElementById('education').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  
  document.getElementById('scrollBtnProjects').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  
  document.getElementById('scrollBtnSkills').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  