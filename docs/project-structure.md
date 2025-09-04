# QuickBooks Desktop Node.js Integration Project

This project provides a comprehensive Node.js TypeScript implementation for integrating with QuickBooks Desktop. The solution is structured as a monorepo containing multiple packages and modules.

## Project Structure

```
.
├── packages/
│   └── mcp-server/
│       ├── build/                # Compiled build artifacts
│       ├── src/                 # Source code
│       │   ├── tools/            # QuickBooks business objects and operations
│       │   │   └── qbd/          # QuickBooks Desktop (QBD) specific implementations
│       │   └── ...               # Other supporting modules
│       └── tests/                # Unit and integration tests
├── src/                         # Core utilities and shims
├── scripts/                     # Build, test, and deployment scripts
└── ...                          # Other supporting files
```

## Key Features

- Comprehensive QuickBooks Desktop integration
- Extensive business object support
- TypeScript with proper type definitions
- Modular monorepo structure
- Robust testing framework

This document provides a high-level overview of the project structure. For detailed information about specific components, please refer to the respective documentation sections.