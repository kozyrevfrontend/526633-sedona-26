var btn = document.querySelector(".search__btn");
var popup = document.querySelector(".search__form-wrapper")

btn.addEventListener("click",function (){popup.classList.toggle("show")});

document.addEventListener("DOMContentLoaded", function() {
  popup.classList.remove("show");
});
