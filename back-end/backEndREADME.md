# URL Alias Backend

The URL Alias backend is responsible for handling the API requests and database operations for generating and managing short aliases for long URLs.

## Technologies Used

- Node.js: A JavaScript runtime for building server-side applications.
- Express: A fast and minimalist web framework for Node.js.
- MongoDB: A popular NoSQL database for storing URL alias data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.

## Folder Structure

The folder structure of the backend service is as follows:

- `src/`
  - `config/`: Configuration files for the database and environment variables.
  - `controllers/`: Request handlers for different API endpoints.
  - `models/`: Database models using Mongoose.
  - `routes/`: API routes and their corresponding controllers.
  - `utils/`: Utility functions and helper modules.
  - `app.js`: The main Express application file.
  - `server.js`: Entry point for starting the server.
- `package.json`: Project configuration and dependencies.
- `.env`: Environment variables configuration file.
- `README.md`: Project documentation (you're reading it!).

## API Endpoints

The backend provides the following API endpoints:

- `POST /urls/createUrl`: Generates a short alias for a given long URL.
- `GET /urls`: Retrieves a list of all created aliases with their associated long URLs.
- `GET /urls/:alias`: Redirects to the original long URL for a given alias.

Please refer to the code in the `routes/` directory for more details on how the API endpoints are implemented.

## Database Configuration

The backend uses MongoDB as the database for storing URL alias data. To configure the database connection, update the `.env` file with your MONGO_URI.

## Running the Backend

To run the backend service, follow these steps:

1. Install the dependencies by running `npm install`.

2. Set up the MongoDB connection by updating the `.env` file with your MongoDB connection URI. MONGO_URI and PORT. 

3. Start the server by running `npm run dev` or `node index.js`.

The backend will start running on the specified port (default is `3000`).

## Additional Notes

- Customize the API routes, controllers, and models as needed to add more functionality or modify the existing behavior.

- The `config/` directory contains configuration files for the database connection and other environment variables. Adjust these files according to your specific setup.

- Use the `models/` directory to define Mongoose models for storing and querying URL alias data in the MongoDB database.

- The `utils/` directory can be used to store utility functions, helper modules, or constants that are used throughout the backend service.

- Feel free to extend the functionality of the backend by adding middleware, additional routes, or integrating with other services as required.

## Contributions

Contributions to the URL Alias backend service are welcome! If you encounter any issues or would like to suggest improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/chandrabharat/url-alias).

## License

The URL Alias backend service is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).

