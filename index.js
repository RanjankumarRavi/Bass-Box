console.log("its working ");

let songindex=0;
let audioElement=new Audio('songs/1.mp3')
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogress");
let gif=document.getElementById("gif");
let mastersongname=document.getElementById('mastersongname');

let songsitems=Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songname:"salam e ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songname:"jhalak dikhlaja",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songname:"apki kasis ",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songname:"tu sirf mera mehbob",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songname:"aksar dil tujhe ",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songname:"dilnashin ",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songname:"meri awargi",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songname:"hale dil tujhko sunata ",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
]
songsitems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>{
            if(audioElement.paused||audioElement.currentTime<=0){
                audioElement.play();
                masterplay.classList.remove("fa-play-circle");
                masterplay.classList.add("fa-pause-circle");
                gif.style.opacity=1;
            }
            else{
                audioElement.pause();
                masterplay.classList.remove("fa-pause-circle");
                masterplay.classList.add("fa-play-circle");
                gif.style.opacity=0;
            }
})

audioElement.addEventListener('timeupdate',()=>{
  console.log("timeupdate");

  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=(myprogress.value*audioElement.duration)/100;
})

const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songlistplay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
            
    
    })
}



Array.from(document.getElementsByClassName('songlistplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
               makeallplay();
                songindex=parseInt(e.target.id)
               e.target.classList.remove('fa-play-circle')
               e.target.classList.add('fa-pause-circle')
               audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;

               masterplay.classList.remove("fa-play-circle");
               masterplay.classList.add("fa-pause-circle");
               audioElement.currentTime=0;
               audioElement.play();


    })
})

document.getElementById('next').addEventListener('click',(e)=>{
    if(songindex>=9){
       songindex=0;
    }
    else{
           songindex=songindex+1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;

               masterplay.classList.remove("fa-play-circle");
               masterplay.classList.add("fa-pause-circle");
               audioElement.currentTime=0;
               audioElement.play();
               gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',(e)=>{
    if(songindex<=0){
       songindex=0;
    }
    else{
           songindex -=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
               masterplay.classList.remove("fa-play-circle");
               masterplay.classList.add("fa-pause-circle");
               audioElement.currentTime=0;
               audioElement.play();
               gif.style.opacity=1;

})












