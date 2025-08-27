# Payra Pay – Digital Wallet System (Frontend)

A secure, role-based, and user-friendly **digital wallet** built with **React, Redux Toolkit, RTK Query, and Tailwind CSS**.  
Payra Pay enables **Users, Agents, and Admins** to perform seamless financial operations while ensuring security and smooth user experience.  


## Live Deployment
[View Frontend](https://parya-pay-frontend.vercel.app)
[View Backend](https://payra-pay-backend.vercel.app)

## Backend Github Repo
[View Backend Github Repo](https://github.com/nabilsiddik/payra-pay-backend)

## Project Explaination Video
[View Explaination Video](https://www.youtube.com/@Code-With-Nabil)


## Features

### Public Landing (No Login Required)
- **Home Page** 
- **About Page** 
- **Features Page**  
- **Pricing Page** 
- **Contact Page**  
- **FAQ Page**

### Authentication
- JWT-based **Login & Registration**
- Role Based Redirection After successful login
- Credential Based **Passport.js Authentication**

### Admin Dashboard
- Global overview: **users, agents, transaction count & charts
- **Manage Users** block/unblock.  
- **Manage Agents** approve/suspend.  
- **View all transactions** with advanced filters & search.   
- **Profile management** update name, phone, password

### User Dashboard
- Wallet overview with **balance, quick actions, and transactions**.  
- Add Money, Withdraw Money, Send Money, Cash Out  
- **Transaction history** with filters, pagination 
- **Profile management** update name, phone, password

### Agent Dashboard
- Cash-in/out overview & recent activity.  
- Cash In to user wallet.  
- **Agent’s handled transactions** list with filters  
- **Profile management** update name, phone, password

### General Features 
- Skeleton loaders, error handling & toasts.   
- Interactive **charts, graphs, and data tables**  
- **Guided Tour** (Driver.js)  
- **Light/Dark theme toggle** 
- Fully **responsive UI**.


## Tech Stack

**Frontend**
- React, TypeScript  
- React Router  
- Redux Toolkit & RTK Query  
- Tailwind CSS  
- Shadcn UI  

**Backend (separate repo)**
- Node.js, Express  
- MongoDB, Mongoose  
- JWT + bcrypt for auth  


## Setup Instructions

### Clone Repository
git clone https://github.com/nabilsiddik/parya-pay-frontend.git

### Install Dependencies
npm install

### Configure Environment
Create a .env file in the root and setup this env variables.
VITE_BASE_URL=

### Run Development Server
npm run dev


## Project Structure

```bash
PAYRA-PAY-FRONTEND/
│── node_modules/
│── public/
│── src/
│   ├── assets/      
│   ├── components/    
│   ├── config/        
│   ├── constants/     
│   ├── data/          
│   ├── hooks/         
│   ├── layouts/      
│   ├── lib/           
│   ├── modules/       
│   ├── pages/       
│   ├── providers/    
│   ├── redux/         
│   ├── routes/       
│   ├── types/      
│   ├── utils/        
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│── .env
│── .gitignore
│── bun.lock
│── components.json
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── tsconfig.app.json
│── tsconfig.json
│── tsconfig.node.json
│── vercel.json
│── vite.config.ts
