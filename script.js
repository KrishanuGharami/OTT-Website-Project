document.addEventListener('DOMContentLoaded', () => {
    console.log("OTT Website Loaded");

    // Open Modal
    const signUpButton = document.getElementById('openSignUpModal');
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault();
        const modal = document.getElementById("signUpModal");
        modal.style.display = "block";
    });

     // Close Modal
     const span = document.getElementsByClassName("close")[0];
     span.onclick = function() {
         const modal = document.getElementById("signUpModal");
         modal.style.display = "none";
     }

    // Close Modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById("signUpModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

// JavaScript for handling modal opening and closing

document.addEventListener('DOMContentLoaded', function() {
    var signUpModal = document.getElementById('signUpModal');
    var membershipModal = document.getElementById('membershipModal');
    var openSignUpModalBtn = document.getElementById('openSignUpModal');
    var closeSignUpModal = signUpModal.querySelector('.close');
    var closeMembershipModal = membershipModal.querySelector('#closeMembershipModal');
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Open Sign Up Modal
    openSignUpModalBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        signUpModal.style.display = 'block';
    });
    
    // Close Sign Up Modal
    closeSignUpModal.addEventListener('click', function() {
        signUpModal.style.display = 'none';
    });

    // Open Membership Modal
    document.getElementById('openSignUpModal').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        membershipModal.style.display = 'block';
    });

    // Close Membership Modal
    closeMembershipModal.addEventListener('click', function() {
        membershipModal.style.display = 'none';
    });

    // Close Membership Modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == membershipModal) {
            membershipModal.style.display = 'none';
        }
    });

    // Scroll to Top Button
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


    // Form Validation
    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (name === '' || email === '' || password === '') {
            e.preventDefault();  // Prevent form submission
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            e.preventDefault();  // Prevent form submission
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            e.preventDefault();
            alert('Password must be at least 8 characters long and contain uppercase, lowercase, and special characters.');
            return;
        }

        // Display success message
        if (name !== '' && validateEmail(email) && validatePassword(password)) {
            e.preventDefault();  // Prevent the default form submission for demo purposes
            
            // Display success message
            const formContainer = document.querySelector('.modal-content');
            formContainer.innerHTML = `<h2>Thank you for signing up, ${name}!</h2><p>We will send a confirmation email to ${email} shortly.</p>`;
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Password Validation Function
    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return re.test(password);
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// JavaScript for handling modal opening and closing

document.addEventListener('DOMContentLoaded', function() {
    var signUpModal = document.getElementById('signUpModal');
    var membershipModal = document.getElementById('membershipModal');
    var openSignUpModalBtn = document.getElementById('openSignUpModal');
    var openMembershipModalBtn = document.getElementById('openMembershipModal');
    var closeSignUpModal = signUpModal.querySelector('.close');
    var closeMembershipModal = membershipModal.querySelector('#closeMembershipModal');
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Open Sign Up Modal
    openSignUpModalBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        signUpModal.style.display = 'block';
    });
    
    // Close Sign Up Modal
    closeSignUpModal.addEventListener('click', function() {
        signUpModal.style.display = 'none';
    });

    // Open Membership Modal
    openMembershipModalBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        membershipModal.style.display = 'block';
    });

    // Close Membership Modal
    closeMembershipModal.addEventListener('click', function() {
        membershipModal.style.display = 'none';
    });

    // Close Membership Modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == membershipModal) {
            membershipModal.style.display = 'none';
        }
    });

    // Scroll to Top Button
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Get modal elements
const membershipModal = document.getElementById('membershipModal');
const signUpModal = document.getElementById('signUpModal');
const openMembershipModalBtn = document.getElementById('openMembershipModal');
const openSignUpModalBtn = document.getElementById('openSignUpModal');
const closeMembershipModalBtn = document.getElementById('closeMembershipModal');
const closeSignUpModalBtns = document.querySelectorAll('.close');

// Open Membership Modal
openMembershipModalBtn.addEventListener('click', () => {
    membershipModal.style.display = 'block';
});

// Close Membership Modal
closeMembershipModalBtn.addEventListener('click', () => {
    membershipModal.style.display = 'none';
});

// Open Sign Up Modal
openSignUpModalBtn.addEventListener('click', () => {
    signUpModal.style.display = 'block';
});

// Close Sign Up Modal
closeSignUpModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        signUpModal.style.display = 'none';
        membershipModal.style.display = 'none';
    });
});

// Membership Plan Logic
const membershipTypeSelect = document.getElementById('membershipType');
const planDetailsTextarea = document.getElementById('planDetails');

// Update Plan Details based on membership type selection
membershipTypeSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'basic') {
        planDetailsTextarea.value = 'One Member + 720P';
    } else if (selectedValue === 'standard') {
        planDetailsTextarea.value = 'Two Members + 1080P';
    } else if (selectedValue === 'premium') {
        planDetailsTextarea.value = 'Four Members + 4K';
    }
});

// Back to Top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("OTT Website Loaded");

    // Open Modal
    const signUpButton = document.getElementById('openSignUpModal');
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault();
        const modal = document.getElementById("signUpModal");
        modal.style.display = "block";
    });

    // Close Modal
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        const modal = document.getElementById("signUpModal");
        modal.style.display = "none";
    }

    // Close Modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById("signUpModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

     // Form Validation and Sign Up Logic
    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (name === '' || email === '' || password === '') {
            e.preventDefault();
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            e.preventDefault();
            alert('Password must be at least 8 characters long and contain uppercase, lowercase, and special characters.');
            return;
        }

        // Store user data in localStorage to simulate profile creation
        const userProfile = {
            fullName: name,
            email: email,
            password: password,  // In a real app, NEVER store raw passwords like this!
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));

        // Simulate successful sign-up and login mode
        e.preventDefault();
        alert(`Thank you for signing up, ${name}! You are now logged in.`);
        
        // Update the button text for logged-in state
        updateButtonToWelcome(userProfile);

        // Hide the modal after successful signup
        const modal = document.getElementById('signUpModal');
        modal.style.display = 'none';
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Password Validation Function
    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return re.test(password);
    }

    // Simulate Login Mode
    function showLoggedInMode(user) {
        const profileSection = document.getElementById('profileSection');
        const signUpButton = document.getElementById('openSignUpModal');
        profileSection.innerHTML = `<h2>Welcome, ${user.fullName}</h2><p>Email: ${user.email}</p><button id="logoutButton">Log Out</button>`;
        profileSection.style.display = 'block';
        signUpButton.style.display = 'none'; // Hide the Sign Up button

        // Add logout functionality
        const logoutButton = document.getElementById('logoutButton');
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('userProfile');
            location.reload();  // Reload page to simulate logging out
        });
    }

  // Update Sign Up button to say "Welcome"
  function updateButtonToWelcome(user) {
    const signUpButton = document.getElementById('openSignUpModal');
    signUpButton.textContent = `Welcome, ${user.fullName}`;
    signUpButton.disabled = true;  // Disable the button to prevent reopening the sign-up modal
}

    // Check if user is already logged in
const savedUserProfile = localStorage.getItem('userProfile');
if (savedUserProfile) {
    const user = JSON.parse(savedUserProfile);
    updateButtonToWelcome(user);
}
});