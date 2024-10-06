# Portfolio API

This is a simple portfolio API built with Node.js and Express. It serves portfolio data in JSON format.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node index.js
    ```
2. The server will be running on `http://localhost:<port>`.

## Endpoints

### GET /

- **Description**: Returns a simple HTML message.
- **Response**:
    ```html
    <h1>Portfolio api</h1>
    ```

### GET /api

- **Description**: Returns the entire portfolio in JSON format.
- **Response**:
    ```json
    {
      "portfolio": [
        {
          "name": "Project 1",
          "description": "This is a project",
          "url": "https://www.google.com"
        },
        {
          "name": "Project 2",
          "description": "This is a project",
          "url": "https://www.google.com"
        }
      ]
    }
    ```

### GET /api/:id

- **Description**: Returns a specific project by ID.
- **Parameters**:
    - `id` (integer): The ID of the project.
- **Response**:
    - **Success** (status 200):
        ```json
        {
          "name": "Project 1",
          "description": "This is a project",
          "url": "https://www.google.com"
        }
        ```
    - **Error** (status 404):
        ```json
        {
          "error": "Project not found"
        }
        ```

## License

This project is licensed under the MIT License.