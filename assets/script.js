
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
  
