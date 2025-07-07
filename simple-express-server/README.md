# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile            # Dockerfile to build the application image
├── package.json          # Configuration file for npm
├── yarn.lock             # Yarn lock file for dependency management
└── README.md             # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the server:**
   ```
   yarn start
   ```

The server will start and listen on port 8001. You can access it at `http://localhost:8001`.

## Docker

To run the server in a Docker container, you can build the Docker image and run it using the following commands:

1. **Build the Docker image:**
   ```
   docker build -t simple-express-server .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.