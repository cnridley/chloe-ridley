window.addEventListener('load', function () {
    // *** JS Typewriter Effect ***
    let i = 0;
    let target = document.getElementById("name");
    let target1 = document.getElementById('name1');
    let text = target.innerHTML;
    let text1 = target1.innerHTML;
    target.innerHTML = ' ';
    target1.innerHTML = ' ';
    let speed = 150; //speed duration of effect in millisec


    typeWriter(); //to call function
    function typeWriter() {
        if (i < text.length || text1.length) {
            target.innerHTML += text.charAt(i);
            target1.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter, speed)
        }
    }

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("github").style.color = "#2e5c82";
            document.getElementById("linkedIn").style.color = "#2e5c82";
        } else {
            document.getElementById("github").style.color = "white";
            document.getElementById("linkedIn").style.color = "white";
        }
    }

    AOS.init({
        duration: 1500,
      })

})