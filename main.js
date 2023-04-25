song1="";
song2="";
song3="";
song4="";
song5="";
song6="";
song1_status="";
song2_status="";
song3_status="";
song4_status="";
song5_status="";
song6_status="";
function preload(){
    song1=loadSound("Bones.mp3");
    song2=loadSound("NO.mp3");
    song3=loadSound("Dil Dhadakne Do.mp3");
    song4=loadSound("Enemy.mp3");
    song5=loadSound("2 Dumb Kids.mp3");
    song6=loadSound("teeth.mp3");

}


function draw(){
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
    song3_status=song3.isPlaying();
    song4_status=song4.isPlaying();
    song5_status=song5.isPlaying();
    song6_status=song6.isPlaying();
}
function music1(){
    if(song5_status==false){
        song5.play();
        song2.stop();
        song3.stop();
        song4.stop();
        song1.stop();
        song6.stop();
         
     }
}
function music2(){
    if(song6_status==false){
        song6.play();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song1.stop();
         
     }
   
    
}
function music3(){
    if(song4_status==false){
        song4.play();
        song2.stop();
        song3.stop();
        song6.stop();
        song5.stop();
        song1.stop();
         
     }
    }
    function music4(){
        if(song1_status==false){
            song1.play();
            song2.stop();
            song3.stop();
            song6.stop();
            song5.stop();
            song4.stop();
             
         }
        }
        function music5(){
            if(song3_status==false){
                song3.play();
                song2.stop();
                song4.stop();
                song6.stop();
                song5.stop();
                song1.stop();
                 
             }
            }
            function music6(){
                if(song2_status==false){
                    song2.play();
                    song4.stop();
                    song3.stop();
                    song6.stop();
                    song5.stop();
                    song1.stop();
                     
                 }
                }

 