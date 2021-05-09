   // *** JS Typewriter Effect ***

   let i = 0;
   let target = document.getElementById("name");
   let text = target.innerHTML;
   target.innerHTML = ' ';
   let speed = 180; //speed duration of effect in millisec

   typeWriter(); //to call function
   function typeWriter() {
       if (i < text.length) {
           target.innerHTML += text.charAt(i);
           i++;
           setTimeout(typeWriter, speed);
       }
   }
