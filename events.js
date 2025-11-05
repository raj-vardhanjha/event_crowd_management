// Sample My Events data
const myEvents = [
    {
        id: 'me1',
        title: "Tech Workshop 2025",
        date: "December 20, 2025",
        venue: "Tech Center, Room 101",
        totalCapacity: 100,
        registeredCount: 75,
        status: "Upcoming",
        type: "Workshop",
        mode: "Hybrid"
    },
    {
        id: 'me2',
        title: "AI Conference",
        date: "January 15, 2026",
        venue: "Virtual Platform",
        totalCapacity: 500,
        registeredCount: 480,
        status: "Open",
        type: "Conference",
        mode: "Online"
    }
];

// Sample event data
const upcomingEvents = [
    {
        id: 1,
        title: "Tech Conference 2025",
        date: "December 15, 2025",
        description: "Join us for the biggest tech conference featuring industry leaders and innovative solutions.",
        image: "https://source.unsplash.com/random/800x600/?technology-conference",
        capacity: 500,
        location: "Tech Center, Downtown"
    },
    {
        id: 2,
        title: "Music Festival",
        date: "January 5, 2026",
        description: "Experience an unforgettable night of music with top artists from around the world.",
        image: "https://source.unsplash.com/random/800x600/?music-festival",
        capacity: 2000,
        location: "Central Park"
    },
    {
        id: 3,
        title: "Food & Wine Expo",
        date: "February 20, 2026",
        description: "Discover culinary delights and fine wines from renowned chefs and sommeliers.",
        image: "https://source.unsplash.com/random/800x600/?food-expo",
        capacity: 300,
        location: "Grand Hotel"
    },
    {
        id: 4,
        title: "Sports Championship",
        date: "March 10, 2026",
        description: "Witness the ultimate showdown of athletic excellence in this prestigious championship.",
        image: "https://source.unsplash.com/random/800x600/?sports-stadium",
        capacity: 1000,
        location: "Sports Arena"
    }
];

const ongoingEvents = [
    {
        id: 5,
        title: "Art Exhibition",
        date: "Now - November 15, 2025",
        description: "Experience contemporary art from emerging artists around the globe.",
        image: "https://source.unsplash.com/random/800x600/?art-gallery",
        capacity: 200,
        location: "Modern Art Gallery"
    },
    {
        id: 6,
        title: "Business Summit",
        date: "Now - November 10, 2025",
        description: "Connect with industry leaders and explore business opportunities.",
        image: "https://source.unsplash.com/random/800x600/?business-conference",
        capacity: 400,
        location: "Business Center"
    }
];

// Function to create event cards
function createEventCard(event) {
    return `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-details">
                <h3>${event.title}</h3>
                <p class="event-date">${event.date}</p>
                <p class="event-description">${event.description}</p>
                <a href="#" class="register-btn" data-event-id="${event.id}">Register Now</a>
            </div>
        </div>
    `;
}

// Function to create My Event cards
function createMyEventCard(event) {
    const remainingSeats = event.totalCapacity - event.registeredCount;
    const remainingPercentage = (remainingSeats / event.totalCapacity) * 100;
    
    let seatsClass = 'high';
    if (remainingPercentage <= 20) {
        seatsClass = 'low';
    } else if (remainingPercentage <= 50) {
        seatsClass = 'medium';
    }

    return `
        <div class="my-event-card">
            <div class="my-event-header">
                <h3>${event.title}</h3>
                <div class="stat-row">
                    <span class="stat-label">Status</span>
                    <span class="stat-value">${event.status}</span>
                </div>
            </div>
            <div class="my-event-stats">
                <div class="stat-row">
                    <span class="stat-label">Date</span>
                    <span class="stat-value">${event.date}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Venue</span>
                    <span class="stat-value">${event.venue}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Mode</span>
                    <span class="stat-value">${event.mode}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Type</span>
                    <span class="stat-value">${event.type}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Registrations</span>
                    <span class="stat-value">${event.registeredCount}/${event.totalCapacity}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Seats Remaining</span>
                    <span class="seats-remaining ${seatsClass}">${remainingSeats} seats</span>
                </div>
            </div>
            <div class="event-actions">
                <button class="action-btn view-btn" data-event-id="${event.id}">View Details</button>
                <button class="action-btn manage-btn" data-event-id="${event.id}">Manage Event</button>
            </div>
        </div>
    `;
}

// Function to initialize sliders and my events
function initializeSliders() {
    // Initialize My Events
    const myEventsGrid = document.querySelector('.my-events-grid');
    myEventsGrid.innerHTML = myEvents.map(event => createMyEventCard(event)).join('');

    // Initialize Upcoming Events
    const upcomingSlider = document.querySelector('#upcoming .events-slider');
    upcomingSlider.innerHTML = upcomingEvents.map(event => createEventCard(event)).join('');
    
    // Initialize Ongoing Events
    const ongoingSlider = document.querySelector('#ongoing .events-slider');
    ongoingSlider.innerHTML = ongoingEvents.map(event => createEventCard(event)).join('');
    
    // Setup auto-sliding
    setupAutoSlide('#upcoming .events-slider');
    setupAutoSlide('#ongoing .events-slider');
    
    // Setup manual navigation
    setupSliderNavigation('#upcoming');
    setupSliderNavigation('#ongoing');
}

// Function to handle auto-sliding
function setupAutoSlide(sliderSelector) {
    const slider = document.querySelector(sliderSelector);
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        slider.scrollLeft += 320; // Card width + gap
        scrollAmount += 320;
        
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
            scrollAmount = 0;
        }
    }, 5000); // Slide every 5 seconds
    
    // Pause auto-sliding when hovering
    slider.addEventListener('mouseenter', () => clearInterval(slideTimer));
    slider.addEventListener('mouseleave', () => setupAutoSlide(sliderSelector));
}

// Function to setup manual slider navigation
function setupSliderNavigation(sectionId) {
    const section = document.querySelector(sectionId);
    const slider = section.querySelector('.events-slider');
    const prevBtn = section.querySelector('.prev');
    const nextBtn = section.querySelector('.next');
    
    prevBtn.addEventListener('click', () => {
        slider.scrollLeft -= 320;
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollLeft += 320;
    });
}

// Button click handlers
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('register-btn')) {
        e.preventDefault();
        const eventId = e.target.dataset.eventId;
        // In a real application, this would open a registration form or modal
        alert(`Registration process initiated for event ID: ${eventId}`);
    }
    
    if (e.target.classList.contains('view-btn')) {
        e.preventDefault();
        const eventId = e.target.dataset.eventId;
        // In a real application, this would open a detailed view
        alert(`Viewing details for event ID: ${eventId}`);
    }
    
    if (e.target.classList.contains('manage-btn')) {
        e.preventDefault();
        const eventId = e.target.dataset.eventId;
        // In a real application, this would open the event management dashboard
        alert(`Opening management dashboard for event ID: ${eventId}`);
    }
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSliders);