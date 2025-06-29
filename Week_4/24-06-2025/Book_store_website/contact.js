// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? '1' : '0');
}

// Initialize dark mode on page load
window.onload = function() {
    if (localStorage.getItem('dark-mode') === '1') {
        document.body.classList.add('dark-mode');
    }
};

// Form validation and submission
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const feedback = document.getElementById('formFeedback');
    
    // Reset feedback
    feedback.textContent = '';
    feedback.className = 'form-feedback';
    
    // Get form values
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.mobilenumber.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim(),
        newsletter: form.newsletter.checked
    };

    // Validate phone number
    if (!/^[0-9]{10}$/.test(formData.phone)) {
        feedback.textContent = 'Please enter a valid 10-digit phone number.';
        feedback.className = 'form-feedback form-error';
        return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.className = 'form-feedback form-error';
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        feedback.textContent = 'Message sent successfully! We will get back to you soon.';
        feedback.className = 'form-feedback form-success';
        
        // Reset submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }, 2000);
});
