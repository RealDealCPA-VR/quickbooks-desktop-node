# Getting Started with QuickBooks Desktop Integration Project

This guide helps developers get started with setting up and contributing to the QuickBooks Desktop Node.js integration project.

## Prerequisites

Before starting, ensure you have the following installed:
1. Node.js (v18.x or higher)
2. npm/yarn (v9.x or higher)
3. QuickBooks Desktop (compatible version)
4. A code editor (VS Code recommended)

## Setting Up the Development Environment

1. Clone the repository to your local machine.
   ```bash
   git clone [your-repository-url]
   cd quickbooks-desktop-node
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```

3. Set up the required environment variables. Copy the `.env.example` file and update it with your actual values:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set appropriate values for QuickBooks connection parameters.

4. Install TypeScript globally if not already installed:
   ```bash
   npm install -g typescript
   ```
   or with yarn:
   ```bash
   yarn global add typescript
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the server in development mode with automatic reloading.

2. Test the API endpoints using tools like Postman or your preferred API testing client.

## Contributing

1. Familiarize yourself with the project structure as outlined in [Project Structure](docs/project-structure.md).

2. Make changes to the codebase using best practices and adhere to the existing code style.

3. Run tests before committing changes:
   ```bash
   npm test
   ```

4. Create meaningful commit messages following conventional commit guidelines.

5. Open a pull request for review.

## Building and Deployment

1. Run the build script:
   ```bash
   npm run build
   ```
   This will create the compiled artifacts in the `build` directory.

2. Deploy the built files to your production environment.

## Troubleshooting

For common issues and solutions, refer to the [Troubleshooting Guide](docs/troubleshooting.md).

This guide provides a step-by-step approach to setting up the development environment and contributing to the project. If you encounter any issues, please refer to the troubleshooting documentation or seek help from the community.