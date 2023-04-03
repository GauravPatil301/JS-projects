// pageOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A number, responding the top position of the element, in pixels.

// ************************ Set Date *****************************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();

// *********************** Close Links *****************************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function () {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ************************ Fixed NavBar*****************************
window.addEventListener("scroll",function () {
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
         
    }else{
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})

// ************************ Smooth Scroll ****************************
// Select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click",function (e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // Calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav")
        let position = element.offsetTop-navHeight;
        // console.log(position);
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position,

        });
        linksContainer.style.height=0;
        
    })
})
