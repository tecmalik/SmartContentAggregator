# Smart-Content-Aggregator

A RESTful API for a content aggregator service built with TypeScript, Node.js, Express, and MongoDB. This project implements core functionality for managing articles, users, and interactions, with AI-powered summary generation.
Features

    Article Management: Create, retrieve, and list articles with automatic summary generation

    User Profiles: Create and manage user profiles with interests

    Interaction Tracking: Record user interactions with articles (views, likes)

    AI-Powered Summaries: Mock integration with Hugging Face for automatic article summarization

    RESTful Design: Clean API endpoints following REST conventions

    TypeScript: Full type safety throughout the application

Technology Stack

    Runtime: Node.js (v18 or higher)

    Language: TypeScript

    Framework: Express.js

    Database: MongoDB with Mongoose ODM

    Testing: Jest + Supertest

    Development: Compatible with WebStorm, VS Code, or any IDE

Project Structure
text

smart-content-aggregator/
├── src/
│   ├── controllers/         # Route handlers
│   ├── models/             # MongoDB schemas
│   ├── services/           # Business logic (e.g., AI summary)
│   ├── routes/             # Express route definitions
│   ├── app.ts              # Express application setup
│   └── server.ts           # Server entry point
├── tests/                  # Test suites
├── .env                    # Environment variables
├── package.json
├── tsconfig.json
└── README.md

Prerequisites

Before running this application, ensure you have:

    Node.js (v18 or higher) installed

    MongoDB running locally or a MongoDB Atlas connection string

    npm or yarn package manager

Installation

    Clone the repository:

bash

git clone <repository-url>
cd smart-content-aggregator

    Install dependencies:

bash

npm install

    Create a .env file in the root directory:

env

MONGODB_URI=mongodb://localhost:27017/content-aggregator
PORT=3000
HUGGINGFACE_API_KEY=your-huggingface-api-key-placeholder

    Start MongoDB (if running locally):

bash

# On macOS with Homebrew:
brew services start mongodb-community

# On Ubuntu/Debian:
sudo systemctl start mongod

# Or manually:
mongod

    Start the application:

bash

npm start

The API will be available at http://localhost:3000.
API Endpoints
Articles

    POST /articles - Create a new article

    GET /articles - Retrieve paginated list of articles

    GET /articles/:id - Retrieve a specific article

Users

    POST /users - Create a new user profile

Interactions

    POST /interactions - Record a user interaction with an article

Example Usage
Create an Article
bash

curl -X POST http://localhost:3000/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Article",
    "content": "This is a test article content that will be summarized automatically by the AI system.",
    "author": "Jane Doe",
    "summary": ""
  }'

Get Paginated Articles
bash

curl "http://localhost:3000/articles?limit=5&offset=10"

Create a User
bash

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "interests": ["technology", "science"]
  }'

Record an Interaction
bash

curl -X POST http://localhost:3000/interactions \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "USER_OBJECT_ID",
    "article_id": "ARTICLE_OBJECT_ID",
    "interaction_type": "view"
  }'

Testing

To run the test suite:
bash

npm test

The tests use Jest and Supertest to verify API functionality, including the article creation with automatic summary generation.
Development Scripts

    npm start - Start the production server

    npm run dev - Start the development server with auto-restart

    npm test - Run the test suite

    npm run build - Compile TypeScript to JavaScript

Technical Choices

    Express.js: Lightweight web framework ideal for RESTful APIs

    MongoDB: NoSQL database for flexible data modeling

    TypeScript: Type safety and improved developer experience

    Jest: Testing framework for reliable test coverage

    Mongoose: MongoDB object modeling for Node.js

Future Enhancements

    Authentication with JWT

    Advanced error handling and validation

    Real Hugging Face API integration

    Recommendation system based on user interests

    Redis caching for improved performance

    Docker containerization

    API rate limiting

License

This project is created for assessment purposes.
