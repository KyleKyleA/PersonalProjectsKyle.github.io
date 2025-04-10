// Smooth scrolling for navbar links
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelector(".navbar a");

    navbarLinks.foreach(link =>  {
        link.addEventListener("click", function(event) {
            if(this.hash !== "") {
                event.preventDefault();
                const targetSection = document.querySelector(this.hash);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        })
    })
})