# URL Alias React App

This is the React app for the URL Alias web application. URL Alias is a URL shortening service that allows users to generate short and customized aliases for long URLs.

## Getting Started

To get started with the React app, follow these steps:

1. Clone the repository: git clone https://github.com/chandrabharat/url-alias.git
2. Navigate to the `front-end` directory:
3. 3. Install the dependencies using npm or Yarn:
4. Configure the backend API URL:
Open the `.env` file in the root directory of the React app and update the `REACT_APP_API_URL` variable with the URL of the backend API.
5. Start the development server: npm start


This will start the development server and open the app in your default browser.

## Features

- Generate short and customized aliases for long URLs.
- Copy the shortened URL to the clipboard with a single click.
- View the list of created aliases with their associated long URLs.
- Navigate to the original long URL by clicking on the shortened alias.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Axios: A popular HTTP client for making API requests.
- React Router: A routing library for managing navigation in a React app.
- Toastify: A library for displaying toast notifications.

## Folder Structure

The folder structure of the React app is as follows:

- `src/`
- `components/`: Reusable React components
- `pages/`: Individual pages of the app
-  - `services/`: Services for making API requests and handling data
  - `utils/`: Utility functions and helpers
  - `App.js`: The main component that handles routing and layout
  - `index.js`: The entry point of the React app
- `public/`: Public assets and HTML template
- `package.json`: Project configuration and dependencies
- `README.md`: Project documentation (you're reading it!)

## Additional Notes

- Make sure to configure the `REACT_APP_API_URL` variable in the `.env` file to match the URL of the backend API. This allows the React app to communicate with the backend and make API requests.

- Customize and extend the app by modifying the existing components or creating new ones in the `components/` directory. You can also create additional pages in the `pages/` directory as needed.

- Use the `services/` directory to define API service functions that handle making requests to the backend API and processing the response data.

- The `utils/` directory can be used to store utility functions, helper classes, or constants that are used throughout the app.

- Feel free to explore and modify the existing styles, components, and functionality to meet your specific requirements.

## Contributions

Contributions to the URL Alias React app are welcome! If you encounter any issues or would like to suggest improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/chandrabharat/url-alias).

## License

The URL Alias React app is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).
