import { useState, useMemo } from 'react';
import './Rooms.css';
import roomsData from '../../assets/json/Roomsdata.json';

// Import all images from assets/images folder
// This works with Vite's import.meta.glob
const imageModules = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,svg}', { eager: true });

// Create a map of image filenames to their imported paths
const getImagePath = (imageName) => {
  const imagePath = Object.keys(imageModules).find(path => path.includes(imageName));
  return imagePath ? imageModules[imagePath].default : null;
};

// Icons - you can replace these with actual icon imports
const GridIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="2" width="11" height="11" fill="currentColor" rx="1"/>
    <rect x="15" y="2" width="11" height="11" fill="currentColor" rx="1"/>
    <rect x="2" y="15" width="11" height="11" fill="currentColor" rx="1"/>
    <rect x="15" y="15" width="11" height="11" fill="currentColor" rx="1"/>
  </svg>
);

const ListIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="0" y="4" width="28" height="4" fill="currentColor" rx="2"/>
    <rect x="0" y="12" width="28" height="4" fill="currentColor" rx="2"/>
    <rect x="0" y="20" width="28" height="4" fill="currentColor" rx="2"/>
  </svg>
);

export default function Rooms() {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [filters, setFilters] = useState({
    all: true,
    suite: false,
    hostel: false,
    onlyAvailable: false,
    unavailable: false
  });

  // Filter rooms based on selected filters
  const filteredRooms = roomsData.rooms.filter(room => {
    // If "All" is selected, show everything
    if (filters.all) return true;

    // Type filters
    const typeMatch = 
      (filters.suite && room.type === 'Suite') ||
      (filters.hostel && room.type === 'Hostel');

    // Availability filters
    const availabilityMatch = 
      (filters.onlyAvailable && room.availability === 'Only Available') ||
      (filters.unavailable && room.availability === 'Unavailable');

    // If both type and availability filters are set
    if ((filters.suite || filters.hostel) && (filters.onlyAvailable || filters.unavailable)) {
      return typeMatch && availabilityMatch;
    }

    // If only type filter is set
    if (filters.suite || filters.hostel) {
      return typeMatch;
    }

    // If only availability filter is set
    if (filters.onlyAvailable || filters.unavailable) {
      return availabilityMatch;
    }

    return true;
  });

  const handleFilterChange = (filterName) => {
    if (filterName === 'all') {
      setFilters({
        all: true,
        suite: false,
        hostel: false,
        onlyAvailable: false,
        unavailable: false
      });
    } else {
      setFilters(prev => ({
        ...prev,
        all: false,
        [filterName]: !prev[filterName]
      }));
    }
  };

  return (
    <div className="rooms-page">
      <div className="rooms-container">
        {/* Filters and View Toggle */}
        <div className="rooms-header">
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <ListIcon />
            </button>
          </div>

          <div className="divider"></div>

          <div className="filters">
            <button
              className={`filter-btn ${filters.all ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filters.suite ? 'active' : ''}`}
              onClick={() => handleFilterChange('suite')}
            >
              Suite
            </button>
            <button
              className={`filter-btn ${filters.hostel ? 'active' : ''}`}
              onClick={() => handleFilterChange('hostel')}
            >
              Hostel
            </button>
          </div>

          <div className="divider"></div>

          <div className="filters">
            <button
              className={`filter-btn availability ${filters.onlyAvailable ? 'active' : ''}`}
              onClick={() => handleFilterChange('onlyAvailable')}
            >
              Only Available
            </button>
            <button
              className={`filter-btn ${filters.unavailable ? 'active' : ''}`}
              onClick={() => handleFilterChange('unavailable')}
            >
              Unavailable
            </button>
          </div>
        </div>

        {/* Rooms List/Grid */}
        <div className={`rooms-${viewMode}`}>
          {filteredRooms.length === 0 ? (
            <div className="no-results">No rooms found matching your filters.</div>
          ) : (
            filteredRooms.map(room => (
              <div key={room.id} className="room-card">
                {/* Room Image */}
                <div className="room-image">
                  {getImagePath(room.image) ? (
                    <img 
                      src={getImagePath(room.image)} 
                      alt={room.name}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>Image</span>
                    </div>
                  )}
                </div>

                {/* Room Info */}
                <div className="room-info">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-description">{room.description}</p>
                </div>

                {/* Booking Info */}
                <div className="booking-info">
                  <p className="sleeps">Sleeps {room.sleeps}</p>
                  <p className="price">
                    {room.currency} {room.price.toFixed(2)}
                  </p>
                  <p className="per-night">Per Night</p>
                  <div className="action-buttons">
                    <button className="gallery-btn">Gallery</button>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}