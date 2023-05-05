// Funcion para obtener la hora y fecha
function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('txt').innerHTML = `${time} - ${date}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);


// Funcion para el music player

  var audio = document.getElementById('music');

  function playAudio() { 
    audio.play(); 
  }
  
  function pauseAudio() { 
    audio.pause(); 
  };
  
// Funcion para el nav desplegable

  function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " show";
    } else {
      x.className = "menu";
    }
  }



