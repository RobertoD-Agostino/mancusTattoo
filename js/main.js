// import * as hamburger from "../js/hamburger.js"; 
// import * as accordion from "../js/accordion.js";
// accordion.initAccordion()
// hamburger.initHamburger()

// Definisci un oggetto che mappa le traduzioni per ogni lingua
const translations = {
  en: {
    greeting: 'Welcome to Mancus Tattoo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi necessitatibus vero labore laboriosam sunt accusamus? Tenetur aspernatur ducimus voluptate accusantium, quod excepturi, porro totam aliquid eaque ratione aliquam sint!',
    acc1: 'Hello',
    p1: 'Hello, my name is Roberto',
    acc2: 'Bau',
    acc3: 'Kek',
    footerSocial: 'Social',
    footerContacts: 'Contacts',
    footerPhone: 'Phone: 7894561230',
    footerEmail: 'Email: fabrizio@gmail.com'
  },
  it: {
    greeting: 'Benvenuti in Mancus Tattoo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi necessitatibus vero labore laboriosam sunt accusamus? Tenetur aspernatur ducimus voluptate accusantium, quod excepturi, porro totam aliquid eaque ratione aliquam sint!',
    acc1: 'Ciao',
    p1: 'Ciao, mi chiamo Roberto',
    acc2: 'Bau',
    acc3: 'Kek',
    footerSocial: 'Social',
    footerContacts: 'Contatti',
    footerPhone: 'Cellulare: 7894561230',
    footerEmail: 'Email: fabrizio@gmail.com'
  }
};

// Funzione per impostare la lingua
function setLanguage(languageCode) {
  // Ottieni le traduzioni per la lingua selezionata
  const translation = translations[languageCode];

  // Verifica se le traduzioni sono disponibili
  if (translation) {
    // Cambia il testo in base alla lingua selezionata
    document.getElementById('greeting').textContent = translation.greeting;
    document.getElementById('description').textContent = translation.description;
    document.getElementById('acc1').textContent = translation.acc1;
    document.getElementById('p1').textContent = translation.p1;
    document.getElementById('acc2').textContent = translation.acc2;
    document.getElementById('acc3').textContent = translation.acc3;
    document.getElementById('footer-social').textContent = translation.footerSocial;
    document.getElementById('footer-contacts').textContent = translation.footerContacts;
    document.getElementById('footer-phone').textContent = translation.footerPhone;
    document.getElementById('footer-email').textContent = translation.footerEmail;
  }
}

// Seleziona l'elemento select dal tuo HTML
const languageSelect = document.getElementById('language-select');

// Aggiungi un gestore di eventi per il cambio della lingua
languageSelect.addEventListener('click', function(event) {
  // Controlla se è stato cliccato un elemento con classe "dropdown-item"
  if (event.target.classList.contains('dropdown-item')) {
    // Ottieni il valore della lingua selezionata
    const selectedLanguage = event.target.getAttribute('value');
    
    // Imposta la lingua selezionata
    setLanguage(selectedLanguage);
  }
});




// getting all required elements
// document.addEventListener('DOMContentLoaded', function() {
//     const gallery  = document.querySelectorAll(".image"),
// previewBox = document.querySelector(".preview-box"),
// previewImg = previewBox.querySelector("img"),
// closeIcon = previewBox.querySelector(".icon"),
// currentImg = previewBox.querySelector(".current-img"),
// totalImg = previewBox.querySelector(".total-img"),
// shadow = document.querySelector(".shadow");



// window.onload = ()=>{
//     for (let i = 0; i < gallery.length; i++) {
//         totalImg.textContent = gallery.length; //passing total img length to totalImg variable
//         let newIndex = i; //passing i value to newIndex variable
//         let clickedImgIndex; //creating new variable
        
//         gallery[i].onclick = () =>{
//             clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
//             function preview(){
//                 currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
//                 let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
//                 previewImg.src = imageURL; //passing user clicked img url in previewImg src
//             }
//             preview(); //calling above function
    
//             const prevBtn = document.querySelector(".prev");
//             const nextBtn = document.querySelector(".next");
//             if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
//                 prevBtn.style.display = "none"; 
//             }
//             if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
//                 nextBtn.style.display = "none"; 
//             }
//             prevBtn.onclick = ()=>{ 
//                 newIndex--; //decrement index
//                 if(newIndex == 0){
//                     preview(); 
//                     prevBtn.style.display = "none"; 
//                 }else{
//                     preview();
//                     nextBtn.style.display = "block";
//                 } 
//             }
//             nextBtn.onclick = ()=>{ 
//                 newIndex++; //increment index
//                 if(newIndex >= gallery.length - 1){
//                     preview(); 
//                     nextBtn.style.display = "none";
//                 }else{
//                     preview(); 
//                     prevBtn.style.display = "block";
//                 }
//             }
//             document.querySelector("body").style.overflow = "hidden";
//             previewBox.classList.add("show"); 
//             shadow.style.display = "block"; 
//             closeIcon.onclick = ()=>{
//                 newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
//                 prevBtn.style.display = "block"; 
//                 nextBtn.style.display = "block";
//                 previewBox.classList.remove("show");
//                 shadow.style.display = "none";
//                 document.querySelector("body").style.overflow = "visible";
//             }
//         }
        
//     } 
// }
//   });   
  
