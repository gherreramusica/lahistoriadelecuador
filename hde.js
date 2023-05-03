


function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('txt').innerHTML = `${time} - ${date}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);

  var audio = document.getElementById('music');

  function playAudio() { 
    audio.play(); 
  }
  
  function pauseAudio() { 
    audio.pause(); 
  }
