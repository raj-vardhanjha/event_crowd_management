// Sample organized events data (in a real app, this would come from a backend)
const organizedEvents = [
    {
        id: 'me1',
        title: "Tech Workshop 2025",
        date: "December 20, 2025",
        venue: "Tech Center, Room 101",
        totalCapacity: 100,
        registeredCount: 75,
        status: "upcoming",
        type: "Workshop",
        mode: "Hybrid",
        lastUpdated: "2025-11-05T10:30:00"
    },
    {
        id: 'me2',
        title: "AI Conference",
        date: "January 15, 2026",
        venue: "Virtual Platform",
        totalCapacity: 500,
        registeredCount: 480,
        status: "upcoming",
        type: "Conference",
        mode: "Online",
        lastUpdated: "2025-11-05T09:15:00"
    },
    {
        id: 'me3',
        title: "Music Festival 2026",
        date: "February 10, 2026",
        venue: "Central Park Arena",
        totalCapacity: 2000,
        registeredCount: 1200,
        status: "upcoming",
        type: "Festival",
        mode: "Offline",
        lastUpdated: "2025-11-05T11:00:00"
    },
    {
        id: 'me4',
        title: "Sports Tournament",
        date: "Currently Active",
        venue: "Sports Complex",
        totalCapacity: 1500,
        registeredCount: 1100,
        status: "ongoing",
        type: "Sports",
        mode: "Offline",
        lastUpdated: "2025-11-05T12:30:00"
    },
    {
        id: 'me5',
        title: "Digital Art Exhibition",
        date: "March 1, 2026",
        venue: "Modern Art Gallery",
        totalCapacity: 300,
        registeredCount: 150,
        status: "upcoming",
        type: "Exhibition",
        mode: "Hybrid",
        lastUpdated: "2025-11-05T13:45:00"
    },
    {
        id: 'me6',
        title: "Business Summit 2026",
        date: "Currently Active",
        venue: "Convention Center",
        totalCapacity: 800,
        registeredCount: 650,
        status: "ongoing",
        type: "Summit",
        mode: "Hybrid",
        lastUpdated: "2025-11-05T14:20:00"
    },
    {
        id: 'me7',
        title: "Food & Wine Festival",
        date: "April 5, 2026",
        venue: "City Gardens",
        totalCapacity: 1000,
        registeredCount: 300,
        status: "upcoming",
        type: "Festival",
        mode: "Offline",
        lastUpdated: "2025-11-05T15:10:00"
    },
    {
        id: 'me8',
        title: "Gaming Convention",
        date: "May 15, 2026",
        venue: "Tech Hub",
        totalCapacity: 1200,
        registeredCount: 200,
        status: "upcoming",
        type: "Convention",
        mode: "Hybrid",
        lastUpdated: "2025-11-05T16:00:00"
    }
];

// Function to create event card
function createEventCard(event) {
    const registrationPercentage = (event.registeredCount / event.totalCapacity) * 100;
    const statusClass = `status-${event.status.toLowerCase()}`;
    
    return `
        <div class="event-card">
            <div class="event-header">
                <h3>${event.title}</h3>
                <span class="event-status ${statusClass}">${event.status.charAt(0).toUpperCase() + event.status.slice(1)}</span>
            </div>
            <div class="event-stats">
                <div class="stat-row">
                    <span class="stat-label">Date</span>
                    <span class="stat-value">${event.date}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Venue</span>
                    <span class="stat-value">${event.venue}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Event Type</span>
                    <span class="stat-value">${event.type}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Mode</span>
                    <span class="stat-value">${event.mode}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Registrations</span>
                    <span class="stat-value">${event.registeredCount}/${event.totalCapacity}</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${registrationPercentage}%"></div>
                    </div>
                </div>
            </div>
            <div class="card-actions">
                <a href="#" class="action-btn view-btn" data-event-id="${event.id}">View Details</a>
                <a href="#" class="action-btn manage-btn" data-event-id="${event.id}">Manage Event</a>
            </div>
        </div>
    `;
}

// Function to filter events
function filterEvents(status = 'all') {
    const filteredEvents = status === 'all' 
        ? organizedEvents 
        : organizedEvents.filter(event => event.status === status);
    
    const eventsGrid = document.getElementById('eventsGrid');
    const noEvents = document.getElementById('noEvents');
    
    if (filteredEvents.length === 0) {
        eventsGrid.style.display = 'none';
        noEvents.classList.remove('hidden');
    } else {
        eventsGrid.style.display = 'grid';
        noEvents.classList.add('hidden');
        eventsGrid.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set up filter change listener
    const filterSelect = document.getElementById('eventFilter');
    filterSelect.addEventListener('change', (e) => {
        filterEvents(e.target.value);
    });
    
    // Initial load of events
    filterEvents('all');
    
    // Set up event handlers for buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-btn')) {
            e.preventDefault();
            const eventId = e.target.dataset.eventId;
            // In a real app, this would navigate to a detailed view
            alert(`Viewing details for event ID: ${eventId}`);
        }
        
        if (e.target.classList.contains('manage-btn')) {
            e.preventDefault();
            const eventId = e.target.dataset.eventId;
            // In a real app, this would navigate to management dashboard
            alert(`Opening management dashboard for event ID: ${eventId}`);
        }
    });
});