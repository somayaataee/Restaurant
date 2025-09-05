//Generate stars to page
function createstars(){
    const containerStars = document.getElementById('stars');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    

    for (let i = 0; i < 100; i++) {
        
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left =`${Math.random() * windowWidth}px`;
        star.style.top =`${Math.random() * windowHeight}px`;
        containerStars.appendChild(star);
    }
} 
window.addEventListener('load',createstars);

//togler images
const burgerImage = document.querySelectorAll('.burger img');
const toggelerImage = document.querySelectorAll('.burger-toggeler img');
 let currentIndex = 0;

 toggelerImage[currentIndex].classList.add('active');

 burgerImage.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        toggelerImage.forEach(togImag => togImag.classList.remove('active'));
        toggelerImage[currentIndex].classList.add('active');
        toggelerImage[currentIndex].src= burgerImage[index].src;
        currentIndex = (currentIndex + 1)% toggelerImage.length;
    });
 });
//  menu botton

const foods={
    cheese_burger:{
        fname:"Double Cheeseburger",
        des:"Double beef patty,Cheddar cheese,Lettuce,Tomato,Pickles,Special sauce",
        price:"10$",
        gram:"3.4g",
        img: "./images/5.png"
        // img:"https://pin.it/4lgyLpCJ4"

    },
    chicken_burger:{
        fname:"Chicken Burger",
        des:"Crispy chicken fillet, Lettuce, Tomato, Mayonnaise",
        price:"10$",
        gram:"3.4g",
        img:"./images/4.png"
    },
    pepperoni_pizza:{
        fname:"Pepperoni Pizza",
        des:"Fresh dough, Mozzarella cheese, Tomato sauce, Pepperoni",
        price:"10$",
        gram:"3.4g",
        img:"./images/9.png"
    },
    veggie_pizza:{
        fname:"Veggie Pizza",
        des:"Fresh dough, Tomato sauce, Bell peppers, Mushrooms, Black olives, Corn",
        price:"10$",
        gram:"3.4g",
        img:"./images/10.png"
    },
    koobideh_kebab:{
        fname:"Koobideh Kabab",
        des:"Ground beef, Onion, Salt & Pepper, Saffron (served with rice or bread)",
        price:"10$",
        gram:"3.4g",
        img:"./images/11.png"
    },
    chicken_kebab:{
        fname:"Chicken Kebab",
        des:"Chicken pieces, Lemon juice, Yogurt, Saffron, Spices (served with bread or rice)",
        price:"10$",
        gram:"3.4g",
        img:"./images/12.png"
    }

  }

function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
  }

 document.addEventListener('click',(e)=>{
    const card= e.target.closest('.card[data-food]');
    if(!card) return;
    const id = card.dataset.food;
    const f= foods[id];
    if(!id) return;

    const box= document.getElementById('sidebar-content');
    box.innerHTML = ` <img class="img" src="${f.img}" alt="sidebar-photo-shop">
    <h3 class="fname">${f.fname}</h3>
    <p class ="dec">${f.des}</p>
    <div class ="price">${f.price}</div>
    <div class ="gram">${f.gram}</div>
    <div style="margin-top:8px;">
  </div>
`
 });

  













 