# URL Shortener

## Overview

The URL Shortener application is designed to provide a convenient way to generate short and customized aliases for long URLs. It offers a user-friendly interface for managing and accessing shortened URLs.

## Key Features

- **URL Shortening:** Generate short and customized aliases for long URLs.
- **Clipboard Copy:** Copy the shortened URL to the clipboard with a single click.
- **Alias List:** View the list of created aliases with their associated long URLs.
- **URL Navigation:** Navigate to the original long URL by clicking on the shortened alias.

## Use Case

The URL Shortener is useful for individuals or businesses that need to share long URLs in a more compact and manageable format. It can be used in various scenarios, such as:

- Social media sharing: Shorten URLs for sharing on platforms with character limitations.
- Marketing campaigns: Create custom aliases to track and analyze campaign performance.
- Simplified sharing: Share lengthy URLs more easily through messaging apps or email.

## Functionality

The core functionality of the application includes:

- User registration and authentication
- Shortening long URLs and customizing aliases
- Retrieving and displaying the list of created aliases
- Redirection to the original long URL when accessing a shortened alias

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment for server-side development.
- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A popular NoSQL database for storing application data.
- Axios: A promise-based HTTP client for making API requests.
- React Router: A routing library for managing navigation in a React app.
- Toastify: A library for displaying toast notifications.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database

### Installation

1. Clone the repository: ```git clone https://github.com/your-username/url-shortener.git```
2. Navigate to the project directory: ```cd url-shortener```
3. Install dependencies: ```npm install```
4. Set up environment variables: ```Create a .env file in the project root directory.
Specify the necessary environment variables (e.g., database connection details, API keys, etc.) ```
5. Start the development server: ```npm run dev```
6. Open your web browser and access the application at ```http://localhost:3000```

## API Endpoints
The URL Shortener application provides the following API endpoints:

### POST /urls/createUrl: 
Creates a shortened URL by accepting a long URL and an optional custom alias.
### GET /urls: 
Retrieves a list of all created aliases with their associated long URLs.
### GET /urls/:alias: 
Redirects to the original long URL associated with the provided alias.
Refer to the API documentation or codebase for more detailed information about the API endpoints and their usage.

## Folder Structure
The folder structure of the URL Shortener application is as follows:

### backend/: 
Backend server code and configuration files
### frontend/: 
Frontend React application code and static files
### shared/: 
Shared code and utilities used by both the backend and frontend

## Feedback and Support
If you have any feedback, questions, or need support, please don't hesitate to reach out. You can contact us through email@example.com.

We appreciate your interest in the URL Shortener application and welcome any contributions to enhance its functionality and usability.

Happy URL shortening!
