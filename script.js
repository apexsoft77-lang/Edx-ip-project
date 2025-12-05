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
  const courses = document.querySelectorAll(".course-card");
  courses.forEach((course) => {
    const courseCategory = course.getAttribute("data-category");
    if (category === "All" || courseCategory === category) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}

//sign up form
function switchTab(tab) {
  const registerContainer = document.getElementById("form-register-container");
  const signinContainer = document.getElementById("form-signin-container");
  const tabReg = document.getElementById("tab-register");
  const tabSign = document.getElementById("tab-signin");
  const socialHeader = document.getElementById("social-header");

  if (tab === "register") {
    // Show Register, Hide Sign In
    registerContainer.classList.remove("hidden");
    signinContainer.classList.add("hidden");

    // Update Tab Styles
    tabReg.classList.add("active");
    tabSign.classList.remove("active");

    // Update Social Header Text
    socialHeader.innerText = "Or register with:";
  } else {
    // Show Sign In, Hide Register
    signinContainer.classList.remove("hidden");
    registerContainer.classList.add("hidden");

    // Update Tab Styles
    tabSign.classList.add("active");
    tabReg.classList.remove("active");

    // Update Social Header Text
    socialHeader.innerText = "Or sign in with:";
  }
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const icon = input.nextElementSibling; // The <i> tag

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

const switchTabs = () => {
  window.location.href = "signUp.html";
};
