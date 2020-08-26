'use strict'



// Timer

    let deadLine = '2021-08-27';              // here time, when timer must finish

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            //hours = Math.floor((t/(1000*60*60)) % 24),    ----if you need add days in timer
            //days = Math.floor((t/(1000*60*60*24));        ----if you need add days in timer

            return {                    //function getTimeRemaining returns an object containing the remaining time  (возвращает объект с оставшимся временем)                     
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),         
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {                   
            let t = getTimeRemaining(endtime);
            
                function addZero (num) {         //function to display time in the format 01:01:04 if the first digit is 0 (функция для показа времени  в формате 01:01:04 если первая цифра 0)
                    if (num <= 9) {              
                        return '0' + num;
                    } else return num;
                }

                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
                    
                
                    
            if (t.total <= 0) {                      //if time is up, the page displays 00:00:00 (если время закончилось, на страницу выводятся 00:00:00)
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadLine);

});
