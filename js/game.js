const startBtn = document.getElementById("startBtn");
        const hitBtn = document.getElementById("hitBtn");
        const musicTempo = 104;
        const audio = document.getElementById("battleMusic");
        const failureSound = document.getElementById("failureSound");
        const target = document.getElementById("target");
        const scoreElement = document.getElementById("scores");
        const winMessage = document.getElementById("winMessage");

        let hidding = true;
        let repeat = false;
        let hasStop = false;
        let scores = parseInt(document.getElementById("scores").innerHTML);

        async function start(){
            if(hasStop){
                hasStop = false;
                audio.currentTime = 0;
                winMessage.hidden = true;
            }
            startBtn.hidden = true;
            audio.play();
            const response = await tempo(104);
            if (response && !hasStop){
                repeat = true;
                repeater();
            };
        }

        function hit(){
            if(!hidding){
                scores += 1;
                scoreElement.innerHTML = scores;
                if(scores >= 16){
                    stop();
                    winMessage.hidden = false;
                }
            } else{
                failureSound.play();
                scores = 0;
                scoreElement.innerHTML = scores;
            }
        }

        function hideTarget(){
            if(!hidding){
                hidding = true;
            }

        }

        function showTarget(){
            if(hidding){
                hidding = false;
            }
        }

        function setTimer(time){
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, time);
            });
        }

        async function tempo(bpm) {
            let time = parseInt((60/bpm)*1000);
            showTarget();
            await setTimer(18); //Interval for hitting a note
            hideTarget();
            await setTimer(tempo);
            showTarget();
            await setTimer(18);
            hideTarget();

            return true;
        }
        
       
       async function repeater(){
            const response = await tempo(musicTempo);
            while (response && repeat){
                if(audio.ended){
                    stop();
                }
                await tempo(musicTempo);
            }
       }
      
      function stop(){
            repeat = false;
            hasStop = true;
            audio.pause();
            scores = 0;
            startBtn.hidden = false;
            hidding = true;
      }