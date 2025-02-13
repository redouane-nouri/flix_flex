# TMDB API

TMDB API exploitation

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the Repository
```sh
git https://github.com/redouane-nouri/flix_flex.git
cd flix_flex
```

## Backend Setup

1. Navigate to the backend directory:
```sh
cd backend
```
2. Install dependencies:
```sh
npm install
```
3. Create a `.env` file in the `backend` folder and add the following variables:
```
DATABASE_URL="file:./db/database.db"
PASSPORT_SECRET=your_secret_key
FRONTEND_BASE_URL=http://localhost:3000
PORT=3001
```
4. Generate Prisma Client & Migrate Database:
```sh
npx prisma generate
npx prisma migrate deploy
```
5. Run the backend:
```sh
npm run build
npm start
```

## Frontend Setup

1. Navigate to the frontend directory:
```sh
cd ../frontend
```
2. Install dependencies:
```sh
npm install
```
3. Create a `.env` file in the `frontend` folder and add the following variables:
```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_BACKEND_BASE_URL=http://localhost:3001
```
4. Build the frontend:
```sh
npm run build
```
5. Serve the frontend:
```sh
npx serve -s build
```

## Running the Project

Once both the frontend and backend are running:
- Open `http://localhost:3000` in your browser to access the frontend.
- The backend runs on `http://localhost:3001`.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.