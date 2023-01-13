
// Mobile menu

let button = document.querySelector('#mobile-menu');

button.addEventListener('click', ()=>{  
    let lista = document.querySelector('.header ul');
    if(button.innerText === 'MENU'){
        lista.style.display = 'block';
        button.innerText = 'CLOSE';
    }else{
        lista.style.display = 'none';
        button.innerText = 'MENU';
    };
    
    
});

// Images slider

let leftButton = document.querySelector('#left-btn');
let rightButton = document.querySelector('#right-btn');
let images = document.querySelectorAll('.slider-images img');
let imagesPositon = 0 ;
leftButton.addEventListener('click', ()=>{
    hidepictures(images);
    imagesPositon++;
    if(imagesPositon === images.length){
        imagesPositon = 0;
    }
    images[imagesPositon].style.display = 'block';
    
});

rightButton.addEventListener('click', ()=>{
    hidepictures(images);
    imagesPositon--;
    if(imagesPositon === -1){
        imagesPositon = images.length -1 ;
    };
    images[imagesPositon].style.display = 'block';
});


const hidepictures = (element)=>{
    element.forEach((img)=>{
        img.style.display = 'none'
    });
};
// Portfolio Sort
const portfolioSort = (button)=>{
    let category = button.getAttribute('data-category')
    let portFolioItem = document.querySelectorAll('.portfolio-single-item')

    portFolioItem.forEach((item)=>{
        item.style.display = 'none';
    });

    if(category === 'sve'){
        portFolioItem.forEach((item)=>{
            item.style.display = 'block';
        });
    };

    
    portFolioItem.forEach((item)=>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block'
        }

    })
};


// Modal open and close 

let modalButton = document.querySelector('#openModal');
let closeModalButton = document.querySelector('#closeModal');

modalButton.addEventListener('click', ()=>{
    let popupModal = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    popupModal.style.display = 'block';
    overlay.style.display = 'block';
});

closeModalButton.addEventListener('click', ()=>{
    let popupModal = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    popupModal.style.display = 'none';
    overlay.style.display = 'none';
});


let infoModal = document.querySelector('#openModa2');
let closeInfoModal = document.querySelector('#closeModal2')
infoModal.addEventListener('click', ()=>{
   let popupmodal2 = document.querySelector('.popup-modal2')
   let overlay= document.querySelector('.overlay')
   overlay.style.display = 'block'
   popupmodal2.style.display = 'block'
});

closeInfoModal.addEventListener('click', ()=>{
    let popupmodal2 = document.querySelector('.popup-modal2')
    let overlay= document.querySelector('.overlay')
    overlay.style.display = 'none'
    popupmodal2.style.display = 'none'
})