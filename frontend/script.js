// Sample data - Replace with actual API calls
const projects = [
    { id: 1, title: 'Smart Campus App', description: 'Developing a mobile app for campus navigation' },
    { id: 2, title: 'E-Library System', description: 'Digital library management system' },
    { id: 3, title: 'Campus Events Portal', description: 'Centralized event management system' }
];

const events = [
    { id: 1, title: 'Tech Hackathon', date: '2024-02-15', location: 'Main Auditorium' },
    { id: 2, title: 'Career Fair', date: '2024-02-20', location: 'Student Center' },
    { id: 3, title: 'Workshop: Web Development', date: '2024-02-25', location: 'Lab 101' }
];

// Display projects
function displayProjects() {
    const projectGrid = document.getElementById('projectGrid');
    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button onclick="joinProject(${project.id})">Join Project</button>
        </div>
    `).join('');
}

// Display events
function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = events.map(event => `
        <div class="event-card">
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <button onclick="rsvpEvent(${event.id})">RSVP</button>
        </div>
    `).join('');
}

// Login modal functions
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('loginModal').style.display = 'none';
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add login logic here
    console.log('Login submitted');
    closeLoginForm();
});

// Join project function
function joinProject(projectId) {
    console.log(`Joining project ${projectId}`);
    // Add project joining logic here
}

// RSVP event function
function rsvpEvent(eventId) {
    console.log(`RSVP for event ${eventId}`);
    // Add RSVP logic here
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    displayEvents();
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate menu toggle bars
    menuToggle.classList.toggle('active');
});

// Modal Functionality
const modal = document.getElementById('loginModal');
let isModalOpen = false;

function toggleModal() {
    isModalOpen = !isModalOpen;
    modal.classList.toggle('active');
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
}

// Add these new functions to your existing JavaScript

// Auth Modal Functions
function toggleAuthModal(type) {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchForm(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

// Handle form submissions
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Add your login logic here
    console.log('Login attempt:', { email, password });
    // After successful login:
    // closeAuthModal();
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const department = document.getElementById('registerDepartment').value;

    // Add your registration logic here
    console.log('Registration attempt:', { name, email, password, department });
    // After successful registration:
    // closeAuthModal();
}

// Sample groups data
const groups = [
    {
        id: 1,
        name: 'Programming Club',
        description: 'Weekly coding challenges and project collaborations',
        members: 45,
        schedule: 'Weekly meetings'
    },
    {
        id: 2,
        name: 'AI Research Group',
        description: 'Exploring machine learning and artificial intelligence',
        members: 32,
        schedule: 'Bi-weekly meetings'
    },
    {
        id: 3,
        name: 'Design Club',
        description: 'UI/UX design workshops and portfolio reviews',
        members: 28,
        schedule: 'Monthly workshops'
    }
];

// Join group function
function joinGroup(groupId) {
    // Add your group joining logic here
    console.log(`Joining group ${groupId}`);
    // Update UI or show confirmation message
}

// Close modal when clicking outside
document.getElementById('authModal').addEventListener('click', (e) => {
    if (e.target.id === 'authModal') {
        closeAuthModal();
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
            document.getElementById('menuToggle').classList.remove('active');
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginForm();
    }
};