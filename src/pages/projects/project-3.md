---
layout: '@/templates/BasePost.astro'
title: FREEDAYQUIZ
description: This app is for create and play quizzes in virtual live.Each profile is designed to facilitate the flow of the game.
pubDate: 2024-11-24T00:00:00Z
imgSrc: '/assets/images/freedayQuiz.png'
imgAlt: 'Image FredayQuiz'
---
[![Repo](https://img.shields.io/badge/Repo-Link-blue?logo=github)](https://github.com/crisky94/Freeday-quiz)[![Demo](https://img.shields.io/badge/Demo-Live-green?logo=vercel)](https://freeday-quiz.onrender.com)

---

### 🚀 Project Kickoff: May 5, 2024  

# Welcome to **FreedayQuiz**  

FreedayQuiz is a platform where you can share your own quiz games or enjoy games created by others.  

---

## 🎮 **About FreedayQuiz**  

FreedayQuiz is an application designed to let users create and participate in engaging quiz games. Whether you're a creator or a player, FreedayQuiz offers endless hours of entertainment!  

---

## 🛠️ **Key Features**  

### 🔓 **For Players**  
- Enter a game by providing the PIN.  
- Set a nickname for identification.  
- Exit the game at any time.  
- User registration.  

### 🔐 **For Registered Users – Creator Role**  
- 📝 Create new games.  
- Edit existing games.  
- Delete games.  
- Invite players via a game PIN or QR code.  
- Complete control over the game:  
  - Pause the game.  
  - Resume the game.  
  - End the game entirely.  
  - Modify or remove questions during gameplay.  
  - View the ranking and optionally share it with players.  
  - End the game completely, sending players back to the home screen.  

---

## 🚀 **Getting Started**  

1.**Clone this repository:**  
   ```bash
   git clone https://github.com/crisky94/Freeday-quiz.git
```
2.**Install dependencies:**  
   ```bash
   npm install
   ```
3.**Run Prisma to create database tables:**  
   ```bash
   npx prisma migrate dev --name init

   ```
4.**Create environment variables:**  
   ```bash
    .env.local: Add your Clerk keys and API key.
    .env: Add your MySQL credentials.
   ```
5.**Start the frontend server:**  
   ```bash
   git clone https://github.com/crisky94/Freeday-quiz.git
   ```
