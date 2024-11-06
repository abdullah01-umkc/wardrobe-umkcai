## Wardrobe AI
Wardrobe AI is an AI-driven outfit recommendation application that helps users find suitable outfits based on specific events or occasions. Built using the MERN (MongoDB, Express, React, Node.js) stack and leveraging AI-based Retrieval-Augmented Generation (RAG) model techniques, the app provides real-time, relevant outfit suggestions based on user queries.

## Features
Event-Based Outfit Recommendations: Input any event type (e.g., wedding, party, meeting) to get personalized outfit suggestions.
User Registration & Authentication: Users can register, log in, and view their recommended outfits.
Big Data Analytics: The backend processes a large clothing collection to recommend suitable outfits.
Real-Time Suggestions: Using RAG, the app retrieves relevant clothing recommendations instantly.
Hosted on AWS: Deployment is compatible with AWS free-tier services.

## Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
AI Model: Retrieval-Augmented Generation (RAG) model
Deployment: MongoDB Atlas

## Installation
## Prerequisites
Ensure you have the following installed:
Node.js (version 16 or above)
MongoDB (for local database)

## Clone the Repository

git clone https://github.com/abdullah01-umkc/wardrobe-umkcai
cd wardrobe-ai
Backend Setup
Navigate to the backend directory:

cd backend
Install backend dependencies:
npm install

Create a .env file in the backend directory and add the following environment variables:

plaintext

MONGO_URI=your_mongodb_connection_string
PORT=5000

## Start the backend server:
npm start
The backend server should now be running on http://localhost:5000.

## Frontend Setup
Open a new terminal and navigate to the frontend directory:
cd ../frontend

## Install frontend dependencies:
npm install
Create a .env file in the frontend directory and add the following environment variable:
REACT_APP_API_URL=http://localhost:5000

## Start the frontend server:
npm start
The frontend server should now be running on http://localhost:3000.

