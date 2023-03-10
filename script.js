const productBtn = document.getElementById("product-btn");
const productDropdown = document.getElementById("product-dropdown");
const companyBtn = document.getElementById("company-btn");
const companyDropdown = document.getElementById("company-dropdown");
const connectBtn = document.getElementById("connect-btn");
const connectDropdown = document.getElementById("connect-dropdown");
const dropdownBtn = document.getElementById("dropdown-btn");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeDiv = document.getElementById("close-div");

productBtn.addEventListener("click", () => {
    if (productDropdown.classList.contains("opacity-none")){
        productDropdown.classList.remove("opacity-none");
        companyDropdown.classList.add("opacity-none");
        connectDropdown.classList.add("opacity-none");
    }else {
        productDropdown.classList.add("opacity-none");
    }
})

companyBtn.addEventListener("click", () => {
    if (companyDropdown.classList.contains("opacity-none")){
        companyDropdown.classList.remove("opacity-none");
        productDropdown.classList.add("opacity-none");
        connectDropdown.classList.add("opacity-none");
    }else {
        companyDropdown.classList.add("opacity-none");
    }
})
connectBtn.addEventListener("click", () => {
    if (connectDropdown.classList.contains("opacity-none")){
        connectDropdown.classList.remove("opacity-none");
        productDropdown.classList.add("opacity-none");
        companyDropdown.classList.add("opacity-none");
    }else{
        connectDropdown.classList.add("opacity-none");
    }
})

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburger.style.display = "none";
    closeDiv.style.display = "block";
})

closeDiv.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    // mobileMenu.style.display = "none";
    closeDiv.style.display = "none";
    hamburger.style.display = "block";
})

window.addEventListener("mouseup", function(event){
    if(event.target != connectBtn && event.target.parentNode != connectBtn){
        connectDropdown.classList.add("opacity-none");
    }
})

window.addEventListener("mouseup", (event) => {
    if(event.target != companyBtn && event.target.parentNode != companyBtn){
        companyDropdown.classList.add("opacity-none");
    }
})

window.addEventListener("mouseup", (event) => {
    if(event.target != productBtn && event.target.parentNode != productBtn){
        productDropdown.classList.add("opacity-none");
    }
})