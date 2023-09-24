const client = require('./client');

async function dropTables() {
  try {
    console.log('Dropping All Tables...');
    await client.query(`
      DROP TABLE IF EXISTS addtowishlist, addtocart, payment, shipping, billing, messages, categories, reviews, orders, products, users;
    `);
    console.log('Finished dropping tables!');
  } catch (error) {
    console.error('Error dropping tables!');
    throw error;
  }
}

// Define an array of table creation queries in the desired order.
const tableCreationQueries = [
  `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) ,
    password VARCHAR(255),
    email VARCHAR(255)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    size VARCHAR(255) NOT NULL,
    colors VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,    
    description VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    mediaLocation VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES categories(id)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    Total INTEGER NOT NULL,
    shipping_id INTEGER REFERENCES shipping(id),
    billing_id INTEGER REFERENCES billing(id),
    payment_status VARCHAR(255) NOT NULL,
    payment_type VARCHAR(255) NOT NULL,
    order_status VARCHAR(255) NOT NULL,
    Ship_status VARCHAR(255) NOT NULL,
    date_placed DATE NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    rating INTEGER NOT NULL,
    review VARCHAR(255) NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    message VARCHAR(255) NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS billing (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number INTEGER NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zip INTEGER NOT NULL,
    payment_method VARCHAR(255) NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS shipping (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number INTEGER NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zip INTEGER NOT NULL,
    shipping_method VARCHAR(255) NOT NULL,
    shipping_status VARCHAR(255) NOT NULL,
    shipping_cost INTEGER NOT NULL,
    shipping_date DATE NOT NULL,
    tracking_number INTEGER NOT NULL,
    Tracking_status VARCHAR(255) NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS payment (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    payment_method VARCHAR(255) NOT NULL,
    card_number INTEGER NOT NULL,
    expiration_date DATE NOT NULL,
    cvv INTEGER NOT NULL,
    billing_id INTEGER REFERENCES billing(id),
    total INTEGER NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS addtocart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    total INTEGER NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS addtowishlist (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id)
    total integer not null
  );
  `,
];

async function createTables() {
  try {
    console.log('Starting to build tables...');
    for (const query of tableCreationQueries) {
      await client.query(query);
    }
    console.log('Finished building tables!');
  } catch (error) {
    console.error('Error building tables!');
    throw error;
  }
}

async function seedDB() {
  try {
    await dropTables();
    await createTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end(); // Close the database connection after seeding
  }
}

seedDB();
