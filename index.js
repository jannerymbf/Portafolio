let navbar = document.getElementById('navbar');
let navbarHome = document.getElementById('nav-home');
let navbarAbout = document.getElementById('nav-about');
let navbarSkills = document.getElementById('nav-skills');
let navbarProjects = document.getElementById('nav-projects');
let navbarContact = document.getElementById('nav-contact');

navbar.addEventListener('mouseover', () => {
    navbarHome.style.display = 'block';
    navbarAbout.style.display = 'block';
    navbarSkills.style.display = 'block';
    navbarProjects.style.display = 'block';
    navbarContact.style.display = 'block';
    navbar.style.width = '15vw';
})

navbar.addEventListener('mouseout', () => {
    navbarHome.style.display = 'none';
    navbarAbout.style.display = 'none';
    navbarSkills.style.display = 'none';
    navbarProjects.style.display = 'none';
    navbarContact.style.display = 'none';
    navbar.style.width = '7vw';
})

