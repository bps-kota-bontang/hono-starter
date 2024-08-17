# Hono Starter
This repository serves as a template for building API applications using the Hono.js framework. It includes setup and configuration for a backend using Hono.js, with Prisma and Mongoose for database management, and Zod for schema validation.


## Project Structure
The following is an example of the project structure:

```
root
├── prisma
│   │   generated
│   │   migrations
│   └───schema.prisma
├── src
│   │   api
│   │   configs
│   │   libs
│   │   middlewares
│   │   models
│   │   routes
│   │   services
│   │   types
│   │   utils
│   │   validations
│   └───index.ts (entry point)
├── .env
├── docker-compose.yml
├── Dockerfile.development
├── Dockerfile.production
└── package.json
```

### Key Directories
Each directory is structured to separate concerns, making the codebase modular and easier to maintain.
- **`prisma`**: 
  - **`generated`**: Contains auto-generated files by Prisma, including Prisma Client.
  - **`migrations`**: Holds database migration files created by Prisma.
  - **`schema.prisma`**: Defines your database models and configurations.

- **`src`**: The main source directory containing the application logic.
  - **`api`**:
    - **`v1.ts`**: API route handlers for version 1 of your API. (just an example, as needed.)
  
  - **`configs`**:
    - **`constant.ts`**: Configuration constants used throughout the application.
  
  - **`libs`**:
    - **`mongoose.ts`**: Configuration and initialization of the Mongoose library.
    - **`prisma.ts`**: Configuration and initialization of the Prisma Client.
  
  - **`middlewares`**:
    - **`auth.ts`**: Middleware for handling authentication logic. (just an example, as needed.)
  
  - **`models`**:
    - **`chat.ts`**: Mongoose schema and model for the chat feature. (just an example, as needed.)
  
  - **`routes`**:
    - **`chat.ts`**: Routing chat-related endpoints. (just an example, as needed.)
  
  - **`services`**:
    - **`chat.ts`**: Service layer for handling business logic related to chat. (just an example, as needed.)
  
  - **`types`**:
    - **`jwt.ts`**: Type definitions related to JWT tokens. (just an example, as needed.)
    - **`result.ts`**: Common result type definitions used in the application. (just an example, as needed.)
  
  - **`utils`**:
    - **`jwt.ts`**: Utility functions for handling JWT operations. (just an example, as needed.)
    - **`date.ts`**: Utility functions for handling date operations. (just an example, as needed.)
  
  - **`validations`**:
    - **`auth.ts`**: Zod validation schemas for authentication requests. (just an example, as needed.)
  
  - **`index.ts`**: The entry point of the application, setting up the Hono.js server and routes.

## Tech Stack

- **[Hono.js](https://hono.dev/)**: Lightweight web framework for building APIs.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript.
- **[Mongoose](https://mongoosejs.com/)**: Elegant MongoDB object modeling for Node.js.
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
