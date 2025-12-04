   const menu = document.getElementById("mobileMenu");
      const openBtn = document.getElementById("openMenu");
      const closeBtn = document.getElementById("closeMenu");

      openBtn.addEventListener("click", () => {
        menu.style.left = "0";
      });

      closeBtn.addEventListener("click", () => {
        menu.style.left = "-100%";
      });

      //TRENDING EDX
  function filterCategory(category) {
        const courses = document.querySelectorAll('.course-card');
        courses.forEach(course => {
            const courseCategory = course.getAttribute('data-category');
            if (category === 'All' || courseCategory === category) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }