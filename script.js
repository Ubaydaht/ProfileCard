

// Update current time in milliseconds
function updateCurrentTime() {
    const timeElement = document.getElementById('current-time');
    const timeValue = timeElement.querySelector('.time-value');
    
    // Get current time in milliseconds
    const currentTimeMs = Date.now();
    
    // Update the time value
    timeValue.textContent = currentTimeMs.toLocaleString();
    
    // Update the datetime attribute for semantic HTML
    const isoTime = new Date(currentTimeMs).toISOString();
    timeElement.setAttribute('datetime', isoTime);
}

// Initialize on page load
function init() {
    // Update time immediately on load
    updateCurrentTime();
    
    // Update time every 1000 milliseconds (1 second)
    setInterval(updateCurrentTime, 1000);
    
    // Add smooth scroll behavior for links
    addSmoothScrollBehavior();
    
    // Enhance keyboard navigation
    enhanceAccessibility();
}

// Add smooth scroll behavior for internal links
function addSmoothScrollBehavior() {
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
}

// Enhance accessibility features
function enhanceAccessibility() {
    // Make sure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
        // Ensure proper focus handling
        element.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Allow natural behavior for links and buttons
                if (this.tagName === 'A') {
                    this.click();
                }
            }
        });
    });
    
    // Announcement of time updates for screen readers
    const timeElement = document.getElementById('current-time');
    timeElement.setAttribute('aria-live', 'polite');
    timeElement.setAttribute('aria-atomic', 'true');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Optional: Add event listeners for user interactions
document.addEventListener('visibilitychange', function () {
    // Pause time updates when tab is not visible (performance optimization)
    if (document.hidden) {
        // Could stop setInterval here if desired
    } else {
        // Resume when tab becomes visible
        updateCurrentTime();
    }
});
