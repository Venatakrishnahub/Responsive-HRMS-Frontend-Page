/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


var slideIndex1 = 1;
        showSlides1(slideIndex1);
        
    
    
        
        function plusSlides1(n1) {
            showSlides1(slideIndex1 += n1);
        }
        
        function showSlides1(n1) {
            var i1;
            var slides1 = document.getElementsByClassName("card1");
            var dots = document.getElementsByClassName("dot1");
            if (n1 > slides1.length) {slideIndex1 = 1}
            if (n1 < 1) {slideIndex1 = slides1.length}
            for (i = 0; i < slides1.length; i++) {
                slides1[i].classList.remove("active");
                dots[i].classList.remove("active-dot");
            }
            slides1[slideIndex1-1].classList.add("active");
            dots[slideIndex1-1].classList.add("active-dot");
        }
        function currentSlide1(n1) {
            showSlides1(slideIndex1 = n1);
            var i1;
            var slides1 = document.getElementsByClassName("card1");
            var dots = document.getElementsByClassName("dot1"); // Get all dot buttons
            if (n1 > slides1.length) {slideIndex1 = 1}
            if (n1 < 1) {slideIndex1 = slides1.length}
            for (i = 0; i < slides1.length; i++) {
                slides1[i].classList.remove("active");
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active-dot"); // Remove active-dot class from all dots
            }
            slides1[slideIndex1-1].classList.add("active");
            dots[slideIndex1-1].classList.add("active-dot"); // Add active-dot class to the corresponding dot button
        }