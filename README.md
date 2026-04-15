# IdeaForge

IdeaForge is a vibrant space where people from diverse backgrounds and interests come together to engage in meaningful conversations, fostering an environment rich in idea exchange, knowledge sharing, and diverse experiences.

# Preview

<img src="/preview.png">
<a href="https://ideaforge-main.vercel.app/" target="_blank">Live Preview</a> | <a href="https://ideaforge-main.onrender.com/" target="_blank">Live API</a> | <a href="https://documenter.getpostman.com/view/27027258/2sA3dxEXJh" target="_blank">Postman</a>

# Requirements

[Install Node On Your Device](https://nodejs.org/)

# How to Run

```
git clone <your-repository-url>

# BACKEND
cd server
npm install
npx nodemon index.js

# FRONTEND
cd ../client
npm install
npm run dev
```

# Environment Variables

## Frontend

```
VITE_SERVER_ENDPOINT = http://localhost:3000/api
VITE_TOKEN_KEY = ideaforge
VITE_USER_ROLE = role
VITE_COOKIE_EXPIRES = 1
```

## Backend

```
PORT = 3000
DATABASE_URL = mongodb://localhost:27017/
DATABASE_NAME = ideaforge
BCRYPT_GEN_SALT_NUMBER = 10
JWT_SECRET_KEY = abcdefghijklmnopqrstuvwxyz
COOKIE_EXPIRES = 5d
COOKIE_KEY = ideaforge
UPLOAD_DIRECTORY = uploads
```

# Deployment Guide

This project is configured to be deployed with **MongoDB Atlas** for the database, **Render** for the backend, and **Vercel** for the frontend.

### 1. Database (MongoDB Atlas)
1. Set up a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Ensure you allow all IPs (`0.0.0.0/0`) in your Network access settings.
3. Keep track of your connection string.

### 2. Backend (Render)
1. Create a new Web Service on [Render](https://render.com) and point it to your repository.
2. Set **Root Directory** to `server`.
3. Set **Build Command** to `npm install`.
4. Set **Start Command** to `npm start`.
5. Add the backend environment variables specified above, replacing `DATABASE_URL` with your Atlas connection string.

### 3. Frontend (Vercel)
1. Create a new project on [Vercel](https://vercel.com) and import your repository.
2. Set **Root Directory** to `client`.
3. Fill in the frontend environment variables, setting `VITE_SERVER_ENDPOINT` to your new Render URL (e.g., `https://your-backend.onrender.com/api`).
4. Click Deploy.

### 4. CORS Configuration
Ensure `server/index.js` includes your deployed Vercel frontend URL in its `cors` connection origins.

---

# Features

## Admin

- Profile
  - Last Month User Activity
  - Role Based User Distribution
- Users Management
- Sign Out

## Student

- Profile
- Add Post
- My Posts
- Add Product
- My Products
- Task Manager
- Setting
  - Change Password
- Sign Out

# Contribution Ideas

- Continue with Google signup/signin
- Single Product Sell Page
- View Task Details
- View User Details(public)
- Edit user, post, product
- Loading View

## Institution/Teacher

- post(text, image)
  - by admin/institution
  - by teacher
- assignments
- poll
- resource sharing
- test

### Design Idea

```
|----------------------------------------------------------------
|                 |                                |  Analytics |
|-----------------|                                |------------|
|                 |          ----------            |  Teachers  |
|-----------------|          | Create |            |  Students  |
|   Institution   |          ----------            |  Courses   |
|-----------------|                                |    Posts   |
|                 |                                |    ....    |
|-----------------|--------------------------------|------------|
```

### Assignments

- title
- description
- subject
- deadline
- total marks
- status
- audience

### Polls

- title
- description
- type(singl, multiple)
- options
- deadline
- status
- anonymous member
- audience

### Resource

- title
- description
- visibility
- url
- audience
