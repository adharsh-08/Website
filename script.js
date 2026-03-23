// Course data
const courses = {
  web: {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, responsive design.",
    instructor: "Ms. Anjali",
    duration: "8 Weeks"
  },
  java: {
    title: "Java Programming",
    description: "Core Java, OOP, collections.",
    instructor: "Mr. Ravi",
    duration: "10 Weeks"
  },
  python: {
    title: "Python Programming",
    description: "Python basics to advanced.",
    instructor: "Dr. Meera",
    duration: "9 Weeks"
  }
};

// Show course details when clicking "Details"
document.querySelectorAll('.course-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.parentElement.dataset.key;
    const c = courses[key];

    document.getElementById('courseDetails').innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <p><strong>Instructor:</strong> ${c.instructor}</p>
      <p><strong>Duration:</strong> ${c.duration}</p>
      <button class="btn">Enroll Now</button>
    `;
  });
});

// Simple register (demo only)
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('regMsg').style.color = 'green';
  document.getElementById('regMsg').textContent = 'Registered! (demo)';
  e.target.reset();
});

// Simple login (demo only)
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('loginMsg').style.color = 'green';
  document.getElementById('loginMsg').textContent = 'Logged in! (demo)';
  e.target.reset();
});

// Simple contact form (demo only)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('contactMsg').style.color = 'green';
  document.getElementById('contactMsg').textContent = 'Message sent! (demo)';
  e.target.reset();
});