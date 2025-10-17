# KJC Gate Pass System - Secure Campus

<div align="center">
  <img src="https://www.kristujayanti.edu.in/images/kjc-flag-latest.png" alt="Secure Campus Logo" width="500"/>
  <h3>A comprehensive campus security and visitor management solution</h3>
  <p>Developed at Kristu Jayanti Software Development Centre</p>
</div>

## 🎯 Overview

The **KJC Gate Pass System** is a comprehensive visitor and access management solution designed for educational institutions. Built with modern web technologies, it provides secure, efficient, and user-friendly interfaces for managing visitors, temporary ID cards, pre-approved guests, and vehicle registrations.

This innovative security and management solution ensures efficient visitor handling, student authentication, and vehicle tracking, providing a safe, structured, and technology-driven environment for educational institutions.

## ✨ Key Features

### 🔐 Multi-Role Authentication System
- **Admin Role:** Full system access, user management, analytics
- **Security Role:** Visitor operations, gate control, security monitoring
- **Visitor Role:** Self-service operations, profile management

### 👥 Visitor Management
- **Walk-in Registration:** Quick visitor registration with photo capture
- **Check-in/Check-out:** Streamlined process with card assignment
- **Group Visits:** Support for multiple visitors in a single session
- **Visit Tracking:** Complete audit trail of all visits

### 🆔 Temporary ID System
- **Student ID Management:** Temporary ID issuance for students
- **Card Inventory:** Real-time tracking of available cards
- **Fee Management:** Integrated challan system
- **Return Processing:** Automated return and fee settlement

### 🚗 Vehicle Log Management
- **Registration System:** Vehicle registration with sticker assignment
- **Parking Permits:** Digital parking permit management
- **Access Control:** Gate-based vehicle verification
- **Compliance Tracking:** Vehicle document management

### 📧 Pre-Approved Guest System
- **Event-based Invitations:** Create invitations for specific events
- **Email Integration:** Automated invitation emails with QR codes
- **Approval Workflow:** Multi-step approval process
- **Guest Management:** Comprehensive guest database

### 🔔 Automated Notifications & Integrations
- **WhatsApp Integration:** Real-time notifications via WhatsApp API
- **Email Alerts:** SMTP-based email notifications
- **Real-time Updates:** Live dashboard updates
- **Multi-channel Communication:** Ensure timely information delivery

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI framework with hooks and functional components
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Material-UI** - Component library for enhanced UI elements
- **React Router** - Client-side routing and navigation

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling library
- **JWT** - JSON Web Tokens for authentication

### Additional Services
- **WhatsApp API** - Real-time notifications
- **Email Service** - SMTP-based email notifications
- **File Upload** - Multer for handling file uploads
- **SSL/HTTPS** - Secure communication

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KJC-SDC/secure-campus-kjc.git
   cd secure-campus-kjc
   ```

2. **Install dependencies:**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../KJC_Gate_Pass
   npm install
   ```

3. **Environment Configuration:**

   Create `.env` files in both `server/` and `KJC_Gate_Pass/` directories:

   **Backend (`server/.env`):**
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/kjc_gate_pass
   
   # Authentication
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=24h
   SESSION_SECRET=your-session-secret
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # WhatsApp API (Optional)
   WHATSAPP_API_KEY=your-whatsapp-api-key
   WHATSAPP_API_URL=https://api.whatsapp.com
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

   **Frontend (`KJC_Gate_Pass/.env`):**
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   REACT_APP_WS_URL=ws://localhost:5000
   ```

4. **Database Setup:**
   ```bash
   # Make sure MongoDB is running
   # The application will automatically create collections on first run
   
   # Optional: Initialize with sample data
   cd server
   node routes/initialize.js
   ```

### Development

1. **Start the backend server:**
   ```bash
   cd server
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start the frontend development server:**
   ```bash
   cd KJC_Gate_Pass
   npm run dev
   # Frontend runs on http://localhost:3000
   ```

3. **Access the application:**
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:5000/api
   - **Default Admin:** username: `admin`, password: `admin123`

## 📂 Project Structure

```
secure-campus-kjc/
├── 📁 KJC_Gate_Pass/           # Frontend React application
│   ├── 📁 public/              # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   ├── 📁 pages/           # Application pages
│   │   ├── 📁 contexts/        # React context providers
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   ├── 📁 utils/           # Utility functions
│   │   └── 📁 assets/          # Images, icons, audio
│   └── 📄 package.json         # Frontend dependencies
├── 📁 server/                  # Backend Node.js application
│   ├── 📁 controllers/         # Business logic controllers
│   ├── 📁 models/              # Database models
│   ├── 📁 routes/              # API route definitions
│   ├── 📁 middleware/          # Express middleware
│   ├── 📁 config/              # Configuration files
│   ├── 📁 utils/               # Backend utilities
│   └── 📄 server.js            # Server entry point
├── 📁 documentation/           # Comprehensive documentation
│   ├── 📁 backend/             # Backend documentation
│   └── 📁 frontend/            # Frontend documentation
└── 📄 README.md               # This file
```

## 📚 Documentation

For detailed documentation, explore the `/documentation` folder:

### Backend Documentation
- [**File Structure**](./documentation/backend/file-structure.md) - Backend organization
- [**Routes**](./documentation/backend/routes.md) - API endpoints
- [**Models**](./documentation/backend/models.md) - Database schemas
- [**Controllers**](./documentation/backend/controllers.md) - Business logic
- [**Authentication**](./documentation/backend/authentication.md) - Security system
- [**Database**](./documentation/backend/database.md) - Database architecture

### Frontend Documentation
- [**File Structure**](./documentation/frontend/file-structure.md) - Frontend organization
- [**Components**](./documentation/frontend/components.md) - UI components
- [**Pages**](./documentation/frontend/pages.md) - Application pages
- [**State Management**](./documentation/frontend/state-management.md) - State architecture
- [**Styling**](./documentation/frontend/styling.md) - CSS and design system
- [**Communication**](./documentation/frontend/communication.md) - API integration

## 🔐 Security Features

- **JWT Authentication** with role-based access control
- **Password Encryption** using bcrypt
- **Input Validation** and sanitization
- **Rate Limiting** on authentication endpoints
- **CORS Protection** for cross-origin requests
- **SSL/HTTPS** encryption for data transmission
- **Session Management** with automatic expiration
- **Audit Logging** for security events

## 👥 Development Team

**KJC Software Development Cell - Batch 2022-2025**

- **Anthony Pinto Robinson** (22BCAD08) - Full Stack Developer & Project Lead
- **Mohamed Yunus** (22BCAD06) - Full Stack Developer & Backend Specialist
- **Isaac Tapa** (22BCAD10) - Frontend Developer & UI/UX Designer
- **Vandana** (22BCAD12) - Backend Developer & Database Administrator

## 📞 Support & Contact

For support and questions:

- **Email:** sdc@kjc.edu
- **GitHub Issues:** [Create an Issue](https://github.com/KJC-SDC/secure-campus-kjc/issues)
- **Institution:** Kristu Jayanti College (Autonomous)
- **Department:** Software Development Centre

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error:**
```bash
# Check MongoDB service status (Linux/Mac)
sudo systemctl status mongod

# Windows - Check if MongoDB service is running
net start MongoDB
```

**Port Already in Use:**
```bash
# Kill process on port 5000 (Linux/Mac)
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Frontend Build Issues:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
npm run dev -- --force
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔄 Version History

- **v2.0.0** - Current version with enhanced features
- **v1.5.0** - Added pre-approval system
- **v1.0.0** - Initial release with basic visitor management

---

**Built with ❤️ by KJC Software Development Cell**

Latest Commit - 1e9398e
