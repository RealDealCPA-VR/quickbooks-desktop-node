# Environment Setup Requirements

This document outlines the necessary steps and prerequisites for setting up the development environment for the QuickBooks Desktop Node.js integration project.

## Prerequisites

1. **Node.js**
   - Version: 18.x or higher
   - Installation: Download from [Node.js Official Website](https://nodejs.org/)

2. **Package Manager**
   - npm: Included with Node.js
   - yarn: Optional, download from [Yarn Installation](https://yarnpkg.com/getting-started/install)

3. **QuickBooks Desktop**
   - Version: Compatible with the latest QuickBooks Desktop version
   - Installation: Obtain from [QuickBooks Desktop](https://quickbooks.intuit.com/desktop/)

4. **Development Tools**
   - Editor: Visual Studio Code (Recommended)
   - Terminal: Git Bash or similar
   - Git: Version control system

5. **System Requirements**
   - Operating System: Windows 11 (64-bit)
   - RAM: 8GB or more
   - Disk Space: 5GB or more

## Setup Steps

1. **Clone the Repository**
   ```bash
   git clone [REPOSITORY_URL]
   cd quickbooks-desktop-node
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with appropriate values.

4. **QuickBooks Configuration**
   - Ensure QuickBooks Desktop is installed and configured.
   - Set up the necessary QuickBooks user permissions.

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Run Tests**
   ```bash
   npm test
   ```

## Build and Deployment

1. **Build**
   ```bash
   npm run build
   ```
   This creates production-ready artifacts in the `build/` directory.

2. **Deployment**
   - Follow project-specific deployment guidelines
   - Use environment variables for configuration

## Troubleshooting

Common issues and solutions:

- **Missing Dependencies:** Re-run `npm install`
- **QuickBooks Connectivity:** Verify QB installation and user permissions
- **Environment Variables:** Ensure `.env` is correctly configured

## Maintenance

- **Updates:** Regularly update dependencies and Node.js
- **Backups:** Implement proper backup strategies
- **Security:** Keep QuickBooks and system updated

By following these steps, you can set up the development environment and start contributing to the project.