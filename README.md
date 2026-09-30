<div align="center">

# 🍽️ Restro — Restaurant POS System

### A modern, full-stack Point of Sale system for restaurants — built with the MERN stack.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-success?style=for-the-badge)](https://restro-plum-six.vercel.app)
[![API](https://img.shields.io/badge/🔗_Backend_API-Render-blue?style=for-the-badge)](https://restro-backend-bmoc.onrender.com)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)](#-license)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](#-contributing)

<img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/ibjxvy5o1ikbsdebrjky.png" alt="Restro POS Dashboard" width="800"/>

</div>

---

## 📖 **About the Project**

**Restro** is a production-ready Restaurant POS System designed to streamline daily restaurant operations — from **order management** and **table reservations** to **payment processing** and **billing**. Built using the **MERN stack** with a modern, responsive UI powered by Tailwind CSS.

Whether you're running a small café or a large restaurant, Restro helps you serve customers faster, manage your staff efficiently, and keep your business running smoothly.

---

## 🚀 **Live Demo**

| Service | URL | Status |
|---------|-----|--------|
| 🖥️ **Frontend** | [restro-plum-six.vercel.app](https://restro-plum-six.vercel.app) | ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel) |
| 🔙 **Backend API** | [restro-backend-bmoc.onrender.com](https://restro-backend-bmoc.onrender.com) | ![Render](https://img.shields.io/badge/Render-Live-46E3B7?logo=render) |
| 🗄️ **Database** | MongoDB Atlas (Cloud) | ![MongoDB](https://img.shields.io/badge/Atlas-Connected-47A248?logo=mongodb) |

> 💡 **Note:** The backend is hosted on Render's **free tier**, so the first request may take **30–50 seconds** if the server has been idle.

---

## ✨ **Features**

<table>
  <tr>
    <td width="50%">

### 🍽️ Order Management
Real-time order creation, tracking, and status updates. Manage dine-in, takeaway, and delivery orders seamlessly.

### 🪑 Table Reservations
Book, manage, and track table availability. Assign waiters and monitor occupancy at a glance.

### 🔐 Authentication & Authorization
Secure JWT-based login with **role-based access control** (Admin, Cashier, Waiter, Customer).

  </td>
  <td width="50%">

### 💸 Payment Integration
Integrated with **Razorpay** for secure online payments. Supports UPI, cards, and net banking.

### 🧾 Billing & Invoicing
Auto-generated bills and invoices with detailed item breakdowns and tax calculations.

### 📊 Dashboard & Analytics
Beautiful metrics dashboard showing sales, recent orders, and popular dishes.

  </td>
  </tr>
</table>

---

## 🛠️ **Tech Stack**

<table>
  <tr>
    <th>Category</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td>🖥️ <b>Frontend</b></td>
    <td>
      <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/Redux-593D88?logo=redux&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" />
      <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
      <img src="https://img.shields.io/badge/React_Query-FF4154?logo=reactquery&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>🔙 <b>Backend</b></td>
    <td>
      <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
      <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" />
      <img src="https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white" />
      <img src="https://img.shields.io/badge/bcrypt-003A70?logo=letsencrypt&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>🗄️ <b>Database</b></td>
    <td>
      <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
      <img src="https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>💳 <b>Payments</b></td>
    <td>
      <img src="https://img.shields.io/badge/Razorpay-02042B?logo=razorpay&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>☁️ <b>Deployment</b></td>
    <td>
      <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" />
      <img src="https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white" />
      <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248?logo=mongodb&logoColor=white" />
    </td>
  </tr>
</table>

---

## 📂 **Project Structure**

```
Restro-POS/
├── backend/
│   ├── config/              # Database & app configuration
│   ├── controllers/         # Route logic (user, order, table, payment)
│   ├── middlewares/         # Auth, error handling, token verification
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API endpoints
│   ├── app.js               # Express app entry point
│   └── package.json
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images & fonts
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── https/           # Axios wrapper & API endpoints
│   │   ├── pages/           # Route pages (Auth, Dashboard, Menu, etc.)
│   │   ├── redux/           # Redux Toolkit slices & store
│   │   └── App.jsx
│   ├── vercel.json          # Vercel SPA rewrites
│   └── package.json
│
└── README.md
```

---

## 🚀 **Getting Started**

### **Prerequisites**

Make sure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?logo=npm&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_Account-47A248?logo=mongodb&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-latest-F05032?logo=git&logoColor=white)

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Mahfooj12/Restro.git
cd Restro
```

### **2️⃣ Setup Backend**

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=8000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/pos-db
JWT_SECRET=your_super_secret_key
FRONTEND_URL=http://localhost:5173

# Razorpay (optional)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

Start the backend server:

```bash
npm run dev
```

Backend runs on → `http://localhost:8000`

### **3️⃣ Setup Frontend**

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:8000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on → `http://localhost:5173`

---

## 🔌 **API Endpoints**

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr><td>POST</td><td><code>/api/user/register</code></td><td>Register a new user</td></tr>
  <tr><td>POST</td><td><code>/api/user/login</code></td><td>Login user & set JWT cookie</td></tr>
  <tr><td>GET</td><td><code>/api/user</code></td><td>Get current user data</td></tr>
  <tr><td>POST</td><td><code>/api/user/logout</code></td><td>Logout user</td></tr>
  <tr><td>GET</td><td><code>/api/order</code></td><td>Fetch all orders</td></tr>
  <tr><td>POST</td><td><code>/api/order</code></td><td>Create a new order</td></tr>
  <tr><td>PUT</td><td><code>/api/order/:id</code></td><td>Update order status</td></tr>
  <tr><td>GET</td><td><code>/api/table</code></td><td>Fetch all tables</td></tr>
  <tr><td>POST</td><td><code>/api/table</code></td><td>Add a new table</td></tr>
  <tr><td>POST</td><td><code>/api/payment/create-order</code></td><td>Create Razorpay order</td></tr>
  <tr><td>POST</td><td><code>/api/payment/verify-payment</code></td><td>Verify Razorpay payment</td></tr>
</table>

---

## 🖼️ **Screenshots**

<div align="center">

### 🔐 Login Page
<img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/ibjxvy5o1ikbsdebrjky.png" alt="Login Page" width="700"/>

### 📊 Dashboard
<img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502773/ietao6dnw6yjsh4f71zn.png" alt="Dashboard" width="700"/>

### 🍽️ Menu & Orders
<img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/vesokdfpa1jb7ytm9abi.png" alt="Menu" width="700"/>

### 🪑 Tables
<img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/setoqzhzbwbp9udpri1f.png" alt="Tables" width="700"/>

### 🧾 Invoicing
<img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/fc4tiwzdoisqwac1j01y.png" alt="Invoice" width="700"/>

</div>

---

## 📚 **Resources**

- 📺 **YouTube Playlist:** [Watch Full Tutorial](https://www.youtube.com/playlist?list=PL9OdiypqS7Nk0DHnSNFIi8RgEFJCIWB6X)
- 📦 **Project Assets:** [Google Drive](https://drive.google.com/drive/folders/193N-F1jpzyfPCRCLc9wCyaxjYu2K6PC_)
- 🗺️ **Flow Chart:** [View on Eraser](https://app.eraser.io/workspace/IcU1b6EHu9ZyS9JKi0aY?origin=share)
- 🎨 **Design Inspiration:** [Behance](https://www.behance.net/gallery/210280099/Restaurant-POS-System-Point-of-Sale-UIUX-Design)

---

## 🤝 **Contributing**

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please check out the **`CONTRIBUTING.md`** for guidelines.

---

## 🐛 **Known Issues**

- ⏳ **Cold Start:** Backend hosted on Render's free tier sleeps after 15 minutes of inactivity. The first request after sleep takes 30–50 seconds.
- 🍪 **Cross-Domain Cookies:** Uses `SameSite=None` + `Secure` for cross-domain auth. May require third-party cookie support in some browsers.

---

## 📄 **License**

This project is licensed under the **ISC License**. See the `LICENSE` file for details.

---

## 👨‍💻 **Author**

<div align="center">

**Mohd Mahfooj**

[![GitHub](https://img.shields.io/badge/GitHub-Mahfooj12-181717?logo=github)](https://github.com/Mahfooj12)

</div>

---

<div align="center">

### ⭐ **If you find this project helpful, please give it a star!** ⭐

Made with ❤️ using the MERN Stack

<img src="https://capsule-render.vercel.app/api?type=waving&color=FACC15&height=100&section=footer" width="100%"/>

</div>
