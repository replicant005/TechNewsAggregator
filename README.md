# Tech News Aggregator


<p align="center">
  <i>Tech News Aggregator fetches current articles for the user</i>
</p>

---

## 📋 Table of Contents

- [Introduction](#introduction)  
- [Prerequisites](#prerequisites)  
- [Running the Application](#running-the-application)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Authors](#authors)  


---

## 🛠 Introduction

**TECH NEWS AGGREGATOR** fetches users top articles and news, updating them with everything going on in the tecg world. The system comprises:  
- **Backend:** Node.js, Express.js, Axios, CORS  
- **Frontend:** HTML, CSS, JS 

This application is containerized with **Docker**, ensuring smooth setup and deployment.

---

## ⚙️ Prerequisites

Ensure the following tools are installed before running the application:

- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)   
- [Node.js and npm](https://nodejs.org/)  

---

## 🚀 Running the Application

Follow these steps to start the application:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/replicant005/TechNewsAggregator.git
   cd TechNewsAggregator
   ```

2. **Start the application using Docker Compose:**  
   ```bash
   docker-compose up --build
   ```

   This command will build and start all services defined in the `docker-compose.yml` file.
3. **Access the application:**  
   Open your browser and navigate to `http://localhost:8080`.

---

## 📚 API Endpoint
- **Get Articles**
   ```http
  GET /api/techNews/
  ```

## 💻 Usage

1. On entering the URL , top 10 stories are displayed on the dashboard, on clicking the the links to articles , user naviagtes to the site where aricle was originally published.

---

## 👨‍💻 Authors

- **Mehak Kapur**  
 

---
