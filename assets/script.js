
        // Get Elements
        const mobileMenu = document.getElementById('mobileMenu');
        const openBtn = document.getElementById('openMenuBtn');
        const closeBtn = document.getElementById('closeMenuBtn');

        // Open Menu Function
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            // Optional: Prevent scrolling on body when menu is open
            document.body.style.overflow = 'hidden';
        });

        // Close Menu Function
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            // Restore scrolling
            document.body.style.overflow = 'auto';
        });
  


        // hero section 
        document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let slideIndex = 0;

    // Initialize the slider
    showSlides(slideIndex);

    // Function to handle Next/Prev buttons
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to handle specific Dot click
    // Note: In HTML I used onclick="currentSlide(1)", this makes it work globally
    window.currentSlide = function(n) {
        showSlides(slideIndex = n - 1);
    }

    // Core Logic
    function showSlides(n) {
        // Loop back to start if at end
        if (n >= slides.length) { slideIndex = 0 }
        
        // Loop to end if at start
        if (n < 0) { slideIndex = slides.length - 1 }

        // 1. Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // 2. Deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // 3. Show current slide and activate current dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    // Event Listeners for Arrows
    if(prevBtn) {
        prevBtn.addEventListener('click', () => plusSlides(-1));
    }
    
    if(nextBtn) {
        nextBtn.addEventListener('click', () => plusSlides(1));
    }

    // Optional: Auto-play every 5 seconds
    // setInterval(() => { plusSlides(1) }, 5000);
});



//trending courses
// Data for different categories (4 courses each)
const data = {
    // Executive Education (Matches the image)
    exec: [
        {
            title: "AI Developer",
            provider: "IBM",
            tag: "Executive Education",
            img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Artificial Intelligence Programme",
            provider: "Oxford Saïd",
            tag: "Executive Education",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png"
        },
        {
            title: "MBA Essentials",
            provider: "LSE",
            tag: "Executive Education",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Generative AI Engineering Course",
            provider: "IBM",
            tag: "Executive Education",
            img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        }
    ],
    // Master's Degrees (Requested)
    masters: [
        {
            title: "Master of Science in Computer Science",
            provider: "UT Austin",
            tag: "Master's Degree",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png"
        },
        {
            title: "Master of Science in Analytics",
            provider: "Georgia Tech",
            tag: "Master's Degree",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Master of Business Administration (iMBA)",
            provider: "Boston University",
            tag: "Master's Degree",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png"
        },
        {
            title: "Master of Supply Chain Management",
            provider: "MIT",
            tag: "Master's Degree",
            img: "https://images.unsplash.com/photo-1566576912902-143003310029?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        }
    ],
    // Standard Courses
    courses: [
        {
            title: "Introduction to Computer Science (CS50)",
            provider: "HarvardX",
            tag: "Course",
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Python for Data Science",
            provider: "UC San Diego",
            tag: "Course",
            img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Digital Marketing Strategy",
            provider: "Edinburgh",
            tag: "Course",
            img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Project Management",
            provider: "RIT",
            tag: "Course",
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        }
    ],
    // Fallback data for other tabs
    others: [
        {
            title: "Professional Certificate in Coding",
            provider: "W3C",
            tag: "Certificate",
            img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Data Analysis Certificate",
            provider: "IBM",
            tag: "Certificate",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Leadership Principles",
            provider: "Harvard",
            tag: "Certificate",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        },
        {
            title: "Sustainability Strategy",
            provider: "Stanford",
            tag: "Certificate",
            img: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=500&q=80",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png"
        }
    ]
};

function loadCourses(element, category) {
    // 1. Update Active Tab Style
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // 2. Select data based on category
    // If specific data exists use it, otherwise use 'others' (for bachelors/certificates in this demo)
    const selectedData = data[category] || data['others'];

    // 3. Generate HTML for the 4 cards
    const grid = document.getElementById('courseContainer');
    grid.innerHTML = ''; // Clear current courses

    selectedData.forEach(course => {
        const cardHTML = `
            <div class="card">
                <div class="card-image-box">
                    <img src="${course.img}" alt="${course.title}" class="course-img">
                    <div class="logo-box">
                        <img src="${course.logo}" alt="${course.provider} Logo">
                    </div>
                </div>
                <div class="card-content">
                    <div>
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-provider">${course.provider}</p>
                    </div>
                    <div class="badge">${course.tag}</div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}