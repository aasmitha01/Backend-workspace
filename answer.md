# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with in their browser. It focuses on presentation, interaction, and communication with the backend.

### User Interface
- The frontend is responsible for designing and displaying the user interface.
- It includes elements like buttons, forms, text, images, navigation bars, and layouts.
- Technologies commonly used are HTML for structure, CSS for styling, and JavaScript for behavior.

### User Interaction
- Frontend handles user actions such as clicks, typing, scrolling, and form submissions.
- It provides immediate feedback to users, like validation messages or loading indicators.
- Smooth interaction improves user experience and usability.

### Communication with Backend
- The frontend sends requests to the backend using APIs (usually via HTTP/HTTPS).
- It receives responses such as data or error messages and displays them to the user.
- Example: sending login credentials and showing success or failure messages.

---

## Q2. Role of Backend (BE)

The Backend (BE) is the core logic part of a web application that runs on the server. It handles data processing, security, and communication with databases.

### Server-side Processing
- Backend processes requests sent from the frontend.
- It applies rules, calculations, and validations before sending responses.
- Example: calculating total price in an e-commerce application.

### Database Handling
- Backend connects to databases to store, retrieve, update, and delete data.
- It manages user records, product details, orders, and other application data.
- Common databases include MySQL, PostgreSQL, MongoDB, etc.

### Security and Authentication
- Backend ensures secure access to the application.
- It handles user authentication (login, logout) and authorization (permissions).
- Sensitive data like passwords is encrypted and protected on the server side.

---

## Q3. Business Logic

Business Logic refers to the set of rules and conditions that define how a business operates within a web application. It controls how data is processed based on real-world business requirements.

### Explanation
- Business logic decides **what should happen** when a user performs an action.
- It is usually implemented in the backend but sometimes shared with frontend.
- It ensures the application behaves according to business rules, not just technical flow.

### Real-World Examples

1. **E-commerce Website**
   - Applying discounts only if the cart value exceeds a certain amount.
   - Preventing users from ordering out-of-stock products.

2. **Banking Application**
   - Allowing money transfer only if the account balance is sufficient.
   - Limiting daily transaction amounts.

3. **Online Examination System**
   - Automatically submitting the exam when time expires.
   - Preventing multiple attempts if only one attempt is allowed.

---

## Q4. Client–Server Model

The Client–Server Model is a communication model where tasks are divided between service requesters (clients) and service providers (servers).

### Who is the Client
- The client is the user’s device or application.
- Examples include web browsers, mobile apps, or desktop applications.
- It sends requests and displays responses.

### Who is the Server
- The server is a system that processes client requests.
- It stores data, applies business logic, and sends responses.
- It runs continuously and serves multiple clients.

### Communication Between Client and Server
- Communication happens using HTTP/HTTPS protocols.
- The client sends a request, and the server responds with data or status.
- Example: browser requests a webpage, server sends HTML content.

---

## Q5. Three-Tier Architecture

Three-Tier Architecture is a software design pattern that separates an application into three distinct layers to improve scalability and maintainability.

### Presentation Layer
- This is the frontend layer.
- It handles user interface and user interaction.
- Example: web pages built using HTML, CSS, and JavaScript.

### Application (Business) Layer
- This layer contains business logic.
- It processes requests and applies rules.
- Example: validating login credentials or calculating prices.

### Data Layer
- This layer manages the database.
- It stores and retrieves application data.
- Example: user details, orders, transaction records.

### Why This Architecture Is Used
- Improves scalability and performance.
- Makes maintenance and updates easier.
- Separates responsibilities clearly between layers.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its speed, flexibility, and strong ecosystem.

### Performance
- JavaScript uses non-blocking, event-driven architecture.
- It handles multiple requests efficiently using asynchronous operations.
- This makes it suitable for real-time applications.

### Ecosystem
- JavaScript has a huge ecosystem with npm (Node Package Manager).
- Thousands of libraries and tools are available for backend development.
- This speeds up development and reduces effort.

### Popular Backend Frameworks
- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Lightweight framework for building APIs.
- **NestJS**: Structured framework for scalable applications.

---
