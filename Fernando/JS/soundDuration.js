/*Variable para el tiempo del audio*/
let timerSong = (30) * 1000;

/*Script para controlar la duracion del primer audio*/

setTimeout(()=>{
    let sound = document.getElementById("myaudio");
    sound.play();
   }, timerSong)

setTimeout(()=>{
    let sound2 = document.getElementById("myaudio2");
    sound2.play();
   }, timerSong)
