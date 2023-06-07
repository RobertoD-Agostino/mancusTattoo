// export let hamMenu = document.querySelector(".hamburger-menu");

// export function initHamburger() {
//     document.addEventListener('DOMContentLoaded', function() {
   
//        hamMenu = addEventListener('click', ()=>{
//            hamMenu.classList.toggle('active');
//        });  
   
//      });
// }


export let hamMenu = document.querySelector(".hamburger-menu");

export function initHamburger() {
    document.addEventListener('DOMContentLoaded', function() {
   
       hamMenu.addEventListener('click', ()=>{
           hamMenu.classList.toggle('active');
       });  
   
     });
}



  



