// Import the pg (node-postgres) library
import pg from "pg";

// Retrieve the database connection string from environment variables
const connectionString = process.env.DB_CONNECTION_STRING;

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  console.error("DB_CONNECTION_STRING environment variable is not set.");
} else {
  // Use the connection string in your database connection logic
  console.log(
    "Connecting to the database with connection string:",
    connectionString
  );
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
const pool = new pg.Pool({
  // Pass the connection string to the pool, so it knows how to connect to your database
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Important for some cloud databases, use with caution
  },
});

export default pool;
