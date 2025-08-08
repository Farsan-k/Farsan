let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.NavOne');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};










let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.NavOne a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.NavOne a[href*=' + id + ']').classList.add('active');
                
                });
            };
        });
        let header = document.querySelector('header');

        header.classList.toggle('sticky',window.scrollY > 100);


        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };



    ScrollReveal({
        //  reset: true,
         distance:'80px',
         duration: 2000,
         delay:200
        });

        ScrollReveal().reveal('.HomePage1, .Head', { orgin: 'top' });
        ScrollReveal().reveal('.img1, .Skill, .ProjectBox, .ContactPage form', { origin: 'bottom' });
        ScrollReveal().reveal('.HomePage1 h1, .img2', { origin: 'left' });


        const typed = new Typed('.text',{
            strings: ['Machine Learning Engineering..!','Data Scientist..!', 'Data Analyst..!'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true

        });



        function sendMail(){
            const params = {
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value,
                phone: document.querySelector('#Phone').value,
                subject: document.querySelector('#Subject').value,
                message: document.querySelector('#Message').value,
            };

        emailjs
        .send("service_0rvyrya", "template_0ej8lbj",params,)
        .then(() => alert("your message sent succefully").catch(() => alert("Email Not Sent")));
        }

      
        




