
let name = document.querySelector("#Sm");
let light = document.querySelector("#follower");
let skillHeading= document.querySelector("#skill-heading");
let h1 = document.querySelector("#linkContainer h1");


let text = document.querySelector(".text")
let text2 = document.querySelector(".text2")

let audio = document.querySelector(' #audio audio');
let toggle = document.querySelector('#Sound .music');


function loader(){
tl = gsap.timeline();

 tl.from("#loader .box , #downer", {
    y: 180 + "%",
    duration: 0.6,
    delay: 0.5,
    opacity:0
  });
  tl.to("#loader .box , #downer", {
    y: -180 + "%",
    duration: 0.8,
    delay: 0.5,
    opacity:0
  });


  tl.to("#loader",{
    y:"-100%",
    display:"none",
    duration: 0.4,
    
  })



    }



function smoothScrolling(){





  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
    


}





function page1(){



 
  
  document.addEventListener("mousemove",function(event){
  
  let mouseX= event.clientX;
  
  let mouseY= event.clientY;



gsap.to(light,{

x:event.clientX,
y:event.clientY,
duration:0.8,
ease:"back.out"

})




  let distanceX = mouseX - text.offsetLeft -text.offsetWidth/2;
  
  let distanceY = mouseY - text.offsetTop -text.offsetHeight/2;
  
  
  let newShadow = '';
  for(var i=0;i<150;i++){
  
  
  let shadowX = -distanceX *(i/200);
  let shadowY = -distanceY *(i/200);
  
  let opacity = 1- (i/100);
  newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33,33,33,' + opacity +')'
  
  
  }
 



  let distanceX2 = mouseX - text2.offsetLeft -text2.offsetWidth/2;
  
  let distanceY2 = mouseY - text2.offsetTop -text2.offsetHeight/2;
  



  let newShadow2 = '';
  for(var i=0;i<150;i++){
  
  
  let shadowX2 = -distanceX2 *(i/200);
  let shadowY2 = -distanceY2 *(i/200);
  
  let opacity = 1- (i/100);
  newShadow2 += (newShadow2 ? ',' : '') + shadowX2 + 'px ' + shadowY2 + 'px 0 rgba(33,33,33,' + opacity +')'
  
  
  }
  text2.style.textShadow = newShadow2;
  text.style.textShadow = newShadow;




  
  })
  



function sound(){



let playing = false;
toggle.addEventListener("click",function(){


if(playing){

  audio.pause();
  toggle.textContent=  "Sound Off";

}

else{
  audio.play();
  toggle.textContent= "Sound On";
}

playing=!playing;






})
audio.addEventListener('ended', () => {
  playing = false;
  toggle.textContent = 'Sound Off';
});




}



sound();



}


function page2() {

  document.querySelectorAll(".intro").forEach(function (para) {
    let spannedText = para.textContent.split("").map((char) => `<span>${char}</span>`).join("");
    para.innerHTML = spannedText;
});

// Animate the letters on scroll
gsap.to(".intro span", {
    scrollTrigger: {
        trigger: "#page2",   // Section to trigger the animation
        start: "top 20%",    // When to start the animation (80% from the top of the viewport)
        end: "center 40%",   // When to end the animation
         scrub: true          // Smooth scrubbing effect
    },
    color:"white",                 // Start 50px below its final position
    stagger: 0.09,          // Animate letters one after another with a small delay
    duration: 9, 
    opacity:1,
    delay:3,          // Animation duration for each letter
    ease: "power4.out",      // Smooth easing
});



}









function marquee(){



document.addEventListener("wheel",function(dets){


if(dets.deltaY>0){


  gsap.to(".marquee",{

    transform:"translateX(-200%)",
    
    duration:4,
    repeat:-1,
    ease:"none",

    })
gsap.to(".marquee img",{

rotate:"180"

})

}

else {

  gsap.to(".marquee",{

    transform:"translateX(0%)",
    
    duration:4,
    repeat:-1,
    ease:"none"
    })

    gsap.to(".marquee img",{

      rotate:"0"
      
      })
}
})}


















    function page3(){


  
      gsap.from(".skill-heading h1",{

        y:"150",
        duration:2,
        delay:0.4,
        ease: "power1.out",
      
       scrollTrigger: {
         trigger: "#page3", 
         start: "top 50%",  
         end: "70% 60%",
         scrub: true,
         scroller:"body",         
         // markers: true,
         
       }})






 document.querySelectorAll(".elem").forEach(function (elem){

let rotate=0;
let difference=0;

elem.addEventListener("mousemove",function(dets){


  let  diff = dets.clientY - elem.getBoundingClientRect().top
    difference = dets.clientX - rotate;
       rotate = dets.clientX;
     
   gsap.to(elem.querySelector("img"),{

    opacity:1,
    ease:Power3,
    top:diff,
    left:dets.clientX,
    rotate:  gsap.utils.clamp(-20,20,difference*0.5)
   })
    
   gsap.to(elem.querySelector("h1"),{
     opacity:1,
     color:"#E85C0D",
     filter:"blur(0px)",
     ease:Power3,

   })


   
   gsap.to(elem,{
    backgroundColor:"#161748",
    ease:Power3,
  })


  gsap.to(elem.querySelector(".orange"),{

  opacity:1



  })
   


})

elem.addEventListener("mouseleave",function(dets){

   gsap.to(elem.querySelector("img"),{

    opacity:0,
    
   })
   gsap.to(elem.querySelector("h1"),{
    opacity:1,
    color:"white",
    
    filter:"blur(5px)",
    ease:Power3,

  })

     
  gsap.to(elem,{
    backgroundColor:"#000",
    ease:Power1,
  })

  gsap.to(elem.querySelector(".orange"),{

    opacity:0
  
  
  
    })



})




  })

 

    
 }



function page4(){

gsap.to("#page4",{

   backgroundColor: "#4F1787",
   ease: "power3.out",

  scrollTrigger: {
    trigger: "#page4", 
    start: "top top",  
    end: "40% 50%",
    scrub: true,
    scroller:"body",         
    // markers: true,
    
  },



})

gsap.from("#projHeading",{

  x: "80%", 
  duration: 3,
  delay:1,
  ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4", 
      start: "top top",  
      end: "40% 50%",
      scrub: true,
      scroller:"body",         
      // markers: true,
      pin:true,  
    },

  });

  
gsap.from("#project1",{

  x: "-120%", 
  duration: 3,
  delay:1,
  ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4", 
      start: "top top",  
      end: "40% 50%",
      scrub: true,
      scroller:"body",         
      // markers: true,
      
    },

  });
  
  
  gsap.from(".project-cover1",{

    x: "140%", 
    duration: 3,
    delay:1,
    ease: "power2.out",
      scrollTrigger: {
        trigger: "#page4", 
        start: "top top",  
        end: "40% 50%",
        scrub: true,
        scroller:"body",         
        // markers: true,
        
      },
  
    });


 
    gsap.from("#project2",{

      x: "140%", 
      duration: 3,
      delay:1,
      ease: "power1.out",
        scrollTrigger: {
          trigger: "#page4", 
          start: "center center",  
          end: "50% 30%",
          scrub: true,
          scroller:"body",         
          // markers: true,
          
        },
    
      });


      gsap.from(".project-cover2",{

        x: "-140%", 
        duration: 3,
        delay:1,
        ease: "power2.out",
          scrollTrigger: {
            trigger: "#page4", 
            start: "center center",  
            end: "50% 30%",
            scrub: true,
            scroller:"body",         
            // markers: true,
            
          },
      
        });




}













function page5(){

  
gsap.to("#page4",{

  backgroundColor:"black",
  ease:"power1.out",

scrollTrigger:{

trigger:"#page5",
scroller:"body",
start:"top 30%",
end:"center 60%",
scrub:true,
markers:false,onUpdate: function () {
  const page4BgColor = window.getComputedStyle(document.querySelector("#page4")).backgroundColor;

  // Check if the background color is black








  if (page4BgColor === "rgb(0, 0, 0)") {
    document.querySelectorAll("#ptext span").forEach(function (span){
        span.style.color = "orange";
   
    })
   
    document.querySelectorAll(".dark").forEach(function(div) {
      Object.assign(div.style, {
          backgroundColor: "black",
          border: "1px solid white",
          
      });
  });
  
  } 
  
  else {
    document.querySelectorAll("#ptext span").forEach(function (span){
      span.style.color = "black";
  })
  document.querySelectorAll(".dark").forEach(function(div) {
    Object.assign(div.style, {
        backgroundColor: "#4F1787",
        border: "1px solid #4F1787",
        
    });
});


  

  }




}

}




})


  

}
















loader();
//  smoothScrolling();
page1();
page2()
marquee();

page3();
page4();
page5();






