const img_element = document.querySelector(".img_content");
const txt_element = document.querySelector(".text_content");

img_element.addEventListener("mouseover", () => {
   img_element.classList.add("img_content_focus");
   txt_element.classList.add("text_content_focus");
});

img_element.addEventListener("mouseout", () => {
   img_element.classList.remove("img_content_focus");
   txt_element.classList.remove("text_content_focus");
});

