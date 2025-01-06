const img_element = document.getElementById("img_content");
const txt_element = document.getElementById("text_content");

img_element.addEventListener("mouseover", () => {
   img_element.style.cursor = "pointer";
   img_element.style.width = "60%";
   img_element.style.right = "1%";
   txt_element.style.left = "-5%";
   txt_element.style.color = "rgb(0, 0, 0, 0.5)";
});

img_element.addEventListener("mouseout", () => {
   img_element.style.cursor = "default";
   img_element.style.width = "55%";
   img_element.style.right = "0";
   txt_element.style.left = "0";
   txt_element.style.color = "rgb(0, 0, 0, 1)";
});

