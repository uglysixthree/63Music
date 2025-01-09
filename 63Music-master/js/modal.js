const modal = document.getElementById("myModal");
const openModalBtns = document.querySelectorAll(".swiper-slide");
const closeModalBtn = document.getElementById("closeModalBtn");

// Открыть модальное окно
function OpenModalWindow(id) {
   modal.style.display = "flex";
   document.body.style.overflow = "hidden";
   
   var form;
   switch(id) {
      case "mixing":
         form = new ModalWindowForm("СВЕДЕНИЕ", "../img/card-1.jpg");
         break;
      case "record":
         form = new ModalWindowForm("ЗАПИСЬ", "../img/card-2.jpg");
         break;
      case "rent":
         form = new ModalWindowForm("АРЕНДА СТУДИИ", "../img/card-3.jpg"); 
         break;
      case "bit":
         form = new ModalWindowForm("БИТ", "../img/card-4.jpg"); 
         break;
      default: break;
   }
   OpenForm(form);
}
openModalBtns.forEach((btn) => {
   btn.onclick = (event) => {
      OpenModalWindow(btn.getAttribute("name"));
   }
});

// Закрыть модальное окно
closeModalBtn.onclick = () => {
   modal.style.display = "none";
   document.body.style.overflow = "auto";
}

// Закрытие модального окна при клике за пределами окна
window.onclick = (event) => {
   if (event.target != modal) return;
   modal.style.display = "none";
   document.body.style.overflow = "auto";
}

function OpenForm(form) {
   modal.getElementsByTagName("h1")[0].textContent = form.name;
   modal.getElementsByTagName("img")[0].src = form.src;
}

class ModalWindowForm {
   constructor(name, src) {
      this.name = name;
      this.src = src;
   }
}
