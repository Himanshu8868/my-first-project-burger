// document.getElementById("hamburger").addEventListener("click", function() {
//     const navMenu = document.getElementById("nav-menu");
//     navMenu.classList.toggle("show");
// });
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Show menu on mouse over
hamburger.addEventListener("mouseover", function() {
    navMenu.classList.add("show");
});

// // Hide menu on mouse out
// hamburger.addEventListener("mouseout", function() {
//     navMenu.classList.remove("show");
// });

// Hide menu if mouse leaves menu area
navMenu.addEventListener("mouseleave", function() {
    navMenu.classList.remove("show");
});


    window.addEventListener("scroll", function() {
        const orderButton = document.querySelector(".sticky-order-button");
        if (window.scrollY > 100) {
            orderButton.style.display = "block"; // Show the button when scrolled down
        } else {
            orderButton.style.display = "none"; // Hide the button when at the top
        }
    });

    
    {/* // Function to Show the Modal */}
    function showModal() {
        const modal = document.getElementById("promo-modal");
        modal.style.display = "flex"; // Show the modal with flex to center it
    }

    // Function to Close the Modal
    function closeModal() {
        const modal = document.getElementById("promo-modal");
        modal.style.display = "none"; // Hide the modal
    }

    // Event Listener to Close Modal on Click
    document.getElementById("close-modal").addEventListener("click", closeModal);

    // Show the Modal after a Delay (e.g., 3 seconds)
    window.addEventListener("load", function() {
        setTimeout(showModal, 3000); // Show modal after 3000 milliseconds (3 seconds)
    });

    
