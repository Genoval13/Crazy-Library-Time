document.addEventListener("DOMContentLoaded", (ev) => {
    const thunderButton = document.getElementById("Thunder");
    const missileButton = document.getElementById("Missile");
    const grenadeButton = document.getElementById("Grenade");
    const synthButton   = document.getElementById("Synth");
    const el = document.getElementsByClassName("Molly")[0];

    thunderButton.addEventListener("click", (ev) => {
        thunder.load().play();

        let domNode = anime({
            targets : el,
            translateY: 300,
            duration: 5000
        })
        thunderButton.addEventListener("click", (ev) => {
            thunder.stop();
        })
    })

    missileButton.addEventListener("click", (ev) => {
        missile.load().play();

        let domNode = anime({
            targets: el,
            translateX: [
              { value: 100, duration: 1200 },
              { value: 0, duration: 800 }
            ],
            rotate: '5turn',
            backgroundColor: '#FF0000',
            duration: 4000,
            loop: false
          });

        missileButton.addEventListener("click", (ev) => {
            missile.stop();
        })
    })    
    
    grenadeButton.addEventListener("click", (ev) => {
        grenade.load().play();

        let keyframes = anime({
            targets: el,
            translateX: [
              { value: 250, duration: 1000, delay: 500, elasticity: 0 },
              { value: 0, duration: 1000, delay: 500, elasticity: 0 }
            ],
            translateY: [
              { value: -40, duration: 500, elasticity: 100 },
              { value: 40, duration: 1000, delay: 1000, elasticity: 100 },
              { value: 0, duration: 100, delay: 1000, elasticity: 100 }
            ],
            scaleX: [
              { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
              { value: 1, duration: 900, elasticity: 300 },
              { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
              { value: 1, duration: 900, elasticity: 300 }
            ],
            scaleY: [
              { value: [1.75, 1], duration: 500 },
              { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
              { value: 1, duration: 450 },
              { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
              { value: 1, duration: 450 }
            ],
            loop: false
          });

        grenadeButton.addEventListener("click", (ev) => {
            grenade.stop();
        })
    })

    synthButton.addEventListener("click", (ev) => {
        synth.load().play();

        let domNode = anime({
            targets: el,
            translateX: 250,
            translateY: 250,
            duration: 3500,
            scale: 2,
            rotate: '1turn',
            loop: 4,
            direction: 'reverse'
          });

        synthButton.addEventListener("click", (ev) => {
            synth.stop();
        })
    })

})