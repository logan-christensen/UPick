import Dexie from 'dexie';

// Create a new database
const db = new Dexie('RestaurantDB');

// Define the database schema
db.version(1).stores({
    restaurants: '&place_id, name, rating, address, photoUrl, price_level, disabled, wins, losses' // Use '&' to make place_id the primary key
});

export default db;