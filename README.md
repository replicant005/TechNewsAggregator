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
- [To Do](#ToDo)
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

## To Do 

1. For now it is a single wep page , which fetches articles from a single endpoint , which originally consumes 2 API endpoints from hackernews and dev.to,
2. User gets to see a dashboard for articles which are top 5 articles fetched from both external APIs each
3. I plan to add in features such as login and registration, upon registration, user gets to chose their interests and what particular tech stack they would want to know more about.
4. and further using node library such as Natural, i will be training the content to be as per it.
5. Additionally, the application will have tabs for different technologies, with content as per that. With that user can view the content of their interest.


## 👨‍💻 Authors

- **Mehak Kapur**  
 

---
