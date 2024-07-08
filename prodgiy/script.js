let [hr ,min ,sec ,count] = [0 ,0 ,0 ,0];
    
let timer= false;

function start(){
     timer= true;
     stopWatch(); 
};

function stop(){
    timer= false;
};



function stopWatch(){

     if(timer==true){
        count = count + 1;

        

                if(count == 100){
                    sec = sec + 1;
                    count = 0;   
                }

                if(sec == 60){
                    min = min + 1;
                    count = 0;
                    sec = 0 ;
                }

                if(min == 60){
                    hr = hr + 1;
                    count = 0;
                    sec = 0 ;
                    min = 0 ;
                }

                
        let hrString = hr ;
        let minString = min;
        let secString = sec ;
        let countString = count ;

        if(sec < 10){
            secString="0"+ sec;
        }

        if(min < 10){
            minString="0"+ min;
        }

        if(hr < 10){
            hrString="0"+ hr;
        }

        if(count < 10){
            countString="0"+ count;
        }
                
        document.getElementById("hours").innerHTML= hrString ;
        document.getElementById("min").innerHTML= minString ;       
        document.getElementById("sec").innerHTML= secString ;
        document.getElementById("count").innerHTML= count ;

        setTimeout("stopWatch()",10);
        
     }

};

function reset(){
    timer= false;

    secString="0"+  0 ;
    minString="0"+0;
    hrString="0"+ 0;
    countString="0"+ 0;

    clearTimeout();
    document.getElementById("hours").innerHTML= hrString ;
        document.getElementById("min").innerHTML= minString ;       
        document.getElementById("sec").innerHTML= secString;
        document.getElementById("count").innerHTML= countString ;
};
