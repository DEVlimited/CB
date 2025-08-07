// Program pricing data
const programData = {
    'elite-monthly': {
        name: 'Elite 1-on-1 Mentorship (Monthly)',
        price: 2000,
        billing: 'monthly',
        savings: 0,
        features: [
            'Weekly 50-minute video coaching calls with CB',
            'Unlimited video analysis and feedback',
            'Personal trick accountability system',
            '2-3 weekly check-ins via text',
            'Competition & sponsorship strategy',
            'Direct access to CB\'s industry network'
        ],
        stripeLink: 'https://buy.stripe.com/test_elite_monthly' // Replace with actual Stripe link
    },
    'elite-3month': {
        name: 'Elite 1-on-1 Mentorship (3-Month)',
        price: 5100,
        billing: 'one-time',
        savings: 900,
        features: [
            'Everything in monthly package',
            'Priority scheduling for calls',
            'Bonus: Competition prep workshop',
            'Extended 60-minute strategy sessions',
            'Custom training plan development',
            'Save $900 vs monthly billing'
        ],
        stripeLink: 'https://buy.stripe.com/test_elite_3month' // Replace with actual Stripe link
    },
    'elite-6month': {
        name: 'Elite 1-on-1 Mentorship (6-Month)',
        price: 9000,
        billing: 'one-time',
        savings: 3000,
        features: [
            'Everything in 3-month package',
            'VIP access to CB events',
            'Guest coaching session with pro team',
            'Personal brand development support',
            'Sponsorship negotiation guidance',
            'Save $3,000 vs monthly billing'
        ],
        stripeLink: 'https://buy.stripe.com/test_elite_6month' // Replace with actual Stripe link
    },
    'foundations': {
        name: 'Foundations Community Program',
        price: 97,
        billing: 'monthly',
        savings: 0,
        features: [
            'Monthly group coaching calls',
            'Access to training video library',
            'Community forum & support',
            'Monthly skill challenges',
            'Basic trick progression roadmaps'
        ],
        stripeLink: 'https://buy.stripe.com/test_foundations' // Replace with actual Stripe link
    },
    'accelerator': {
        name: 'Accelerator Program',
        price: 297,
        billing: 'monthly',
        savings: 0,
        features: [
            'Everything in Foundations',
            'Bi-weekly small group sessions (max 8)',
            'Monthly video review submission',
            'Personalized training plans',
            'Competition prep workshops',
            'Sponsorship readiness training'
        ],
        stripeLink: 'https://buy.stripe.com/test_accelerator' // Replace with actual Stripe link
    }
};

// Current step tracking
let currentStep = 1;
let selectedProgram = null;
let applicationData = {};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Check if coming from a specific program
    const urlParams = new URLSearchParams(window.location.search);
    const program = urlParams.get('program');
    if (program && programData[program]) {
        document.getElementById('program').value = program;
        updateProgramDetails();
    }

    // Form submission handler
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', handleApplicationSubmit);
    }

    // Add input validation styling
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.value) {
                this.classList.add('touched');
            }
        });
    });

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Update program details when selection changes
function updateProgramDetails() {
    const programSelect = document.getElementById('program');
    const detailsDiv = document.getElementById('programDetails');
    const selectedValue = programSelect.value;

    if (selectedValue && programData[selectedValue]) {
        selectedProgram = selectedValue;
        const program = programData[selectedValue];

        let html = `
            <h4>${program.name}</h4>
            <div class="price-display">
                <strong>Price:</strong> $${program.price.toLocaleString()}
                ${program.billing === 'monthly' ? '/month' : ' (one-time)'}
                ${program.savings > 0 ? `<span class="savings-badge">Save $${program.savings.toLocaleString()}</span>` : ''}
            </div>
            <ul>
        `;

        program.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });

        html += '</ul>';

        detailsDiv.innerHTML = html;
        detailsDiv.style.display = 'block';
    } else {
        detailsDiv.style.display = 'none';
    }
}

// Handle application form submission
function handleApplicationSubmit(e) {
    e.preventDefault();

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    // Collect form data
    const formData = new FormData(e.target);
    applicationData = Object.fromEntries(formData);

    // Generate reference number
    const refNumber = 'CB-2024-' + Math.floor(Math.random() * 9000 + 1000);
    applicationData.referenceNumber = refNumber;

    // Send form data to email service
    // Option 1: Use EmailJS (free tier available)
    // Sign up at https://www.emailjs.com and replace with your credentials
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: 'applications@cbcoaching.com',
        from_name: applicationData.firstName + ' ' + applicationData.lastName,
        from_email: applicationData.email,
        reference_number: refNumber,
        application_data: JSON.stringify(applicationData, null, 2)
    });
    */

    // Option 2: Use Formspree (free tier available)
    // Sign up at https://formspree.io and replace with your endpoint
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });
    */

    // For now, log to console (remove in production)
    console.log('Application submitted:', applicationData);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Update UI
        document.getElementById('refNumber').textContent = refNumber;
        document.getElementById('confirmEmail').textContent = applicationData.email;

        // Move to next step
        moveToStep(2);

        // Reset button state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;

        // Simulate approval process (for demo - replace with actual backend)
        if (applicationData.program.includes('elite')) {
            // For elite programs, simulate manual review
            console.log('Application submitted for manual review:', applicationData);
        } else {
            // For community programs, auto-approve after delay
            setTimeout(() => {
                // Auto-approve and move to payment
                preparePaymentStep();
            }, 3000);
        }
    }, 1500);
}

// Move to a specific step
function moveToStep(stepNumber) {
    // Update progress bar
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index < stepNumber - 1) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index === stepNumber - 1) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });

    // Update form steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${stepNumber}`).classList.add('active');

    currentStep = stepNumber;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Prepare payment step with selected program details
function preparePaymentStep() {
    if (selectedProgram && programData[selectedProgram]) {
        const program = programData[selectedProgram];

        // Update payment summary
        document.getElementById('selectedProgram').textContent = program.name;
        document.getElementById('selectedPrice').textContent = `$${program.price.toLocaleString()}`;
        document.getElementById('totalAmount').textContent = `$${program.price.toLocaleString()}`;

        // Show savings if applicable
        if (program.savings > 0) {
            document.getElementById('savingsRow').style.display = 'flex';
            document.getElementById('savingsAmount').textContent = `-$${program.savings.toLocaleString()}`;
        } else {
            document.getElementById('savingsRow').style.display = 'none';
        }

        // Update receipt email
        document.getElementById('receiptEmail').textContent = applicationData.email;

        // Move to payment step
        moveToStep(3);
    }
}

// Initiate Stripe payment
function initiateStripePayment() {
    if (selectedProgram && programData[selectedProgram]) {
        const program = programData[selectedProgram];

        // Show loading state
        const payButton = document.querySelector('.stripe-pay');
        payButton.classList.add('loading');
        payButton.disabled = true;

        // In production, this would redirect to the Stripe payment link
        // For now, we'll simulate the payment process
        console.log('Redirecting to Stripe:', program.stripeLink);

        // IMPORTANT: When Stripe account is ready, comment out the simulation below
        // and uncomment the actual redirect:

        // --- PRODUCTION CODE (currently disabled) ---
        // window.location.href = program.stripeLink + '?client_reference_id=' + applicationData.referenceNumber + '&prefilled_email=' + applicationData.email;

        // --- DEMO SIMULATION (remove in production) ---
        // Simulate payment processing
        setTimeout(() => {
            // In production, this would be triggered by Stripe webhook
            handlePaymentSuccess();
        }, 2000);
    }
}

// Handle successful payment (would be triggered by Stripe webhook in production)
function handlePaymentSuccess() {
    // Move to welcome step
    moveToStep(4);

    // Send confirmation emails (would be done server-side)
    console.log('Payment successful for:', applicationData);

    // Track conversion (add your analytics here)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase', {
            'value': programData[selectedProgram].price,
            'currency': 'USD',
            'items': [{
                'id': selectedProgram,
                'name': programData[selectedProgram].name,
                'category': 'coaching',
                'quantity': 1,
                'price': programData[selectedProgram].price
            }]
        });
    }
}

// Handle payment cancellation (for back button or cancelled Stripe checkout)
function handlePaymentCancellation() {
    // Show a message about cancelled payment
    alert('Payment cancelled. Your application is still saved. You can complete payment anytime by returning to this page.');
}

// Export functions for use in other scripts
window.cbPayment = {
    moveToStep,
    initiateStripePayment,
    preparePaymentStep,
    applicationData
};

// Header scroll effect (consistent with main site)
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 68, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--dark-grey)';
        header.style.backdropFilter = 'none';
    }
});