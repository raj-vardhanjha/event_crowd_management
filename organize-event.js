document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('organizeEventForm');
    const popup = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopup');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send this data to a server
        const formData = {
            eventName: document.getElementById('eventName').value,
            organizerName: document.getElementById('organizerName').value,
            universityName: document.getElementById('universityName').value,
            email: document.getElementById('email').value,
            eventType: document.getElementById('eventType').value,
            eventMode: document.getElementById('eventMode').value,
            eventDate: document.getElementById('eventDate').value,
            expectedAttendees: document.getElementById('expectedAttendees').value,
            eventDescription: document.getElementById('eventDescription').value,
            venue: document.getElementById('venue').value
        };

        // Show success popup
        popup.classList.add('show');
        
        // Reset form
        form.reset();
    });

    // Close popup when clicking the close button
    closePopupBtn.addEventListener('click', function() {
        popup.classList.remove('show');
        // Redirect to events page after closing popup
        window.location.href = 'events.html';
    });

    // Close popup when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('show');
            window.location.href = 'events.html';
        }
    });

    // Add event listener to prevent form submission when pressing Enter
    form.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});