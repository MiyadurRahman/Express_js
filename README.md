# Node.js & Express.js — Notes and Interview Prep

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A beginner-friendly reference for **Node.js** and **Express.js**, with a comparison table, practice questions, and interview Q&A for intern/junior roles.

---

## Table of Contents

- [What is Node.js?](#what-is-nodejs)
- [What is Express.js?](#what-is-expressjs)
- [Node.js vs Express.js](#nodejs-vs-expressjs)
- [Quick Start](#quick-start)
- [Practice Questions](#practice-questions)
- [Interview Questions](#interview-questions)
  - [Node.js Basics](#nodejs-basics)
  - [Express.js Basics](#expressjs-basics)
  - [REST API Concepts](#rest-api-concepts)
  - [Error Handling & Project Structure](#error-handling--project-structure)
  - [Security & Authentication](#security--authentication)
- [Coding Exercises](#coding-exercises)
- [Resources](#resources)

---

## What is Node.js?

**Node.js** is a JavaScript runtime (built on Chrome's V8 engine) that lets you run JavaScript **outside the browser** — mainly on a server.

**Common uses**

- Web servers and REST APIs
- Backend logic (authentication, database access, file handling)
- Real-time apps (chat, notifications) using WebSockets
- Command-line tools and scripts

**Minimal server without Express**

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello from Node.js");
  })
  .listen(3000);
```

---

## What is Express.js?

**Express.js** (often just **Express**) is a small framework built on top of Node.js that makes it easier to build **web servers and APIs**.

> **Node.js** lets JavaScript run on the server.
> **Express.js** is a helper layer on top of Node.js that simplifies common server tasks.

**What you can build**

1. **Website backends** — handle requests coming from the browser
2. **REST APIs** — endpoints like `/users`, `/products`
3. **Routing** — decide what happens when someone visits a URL
4. **Middleware pipelines** — small functions that run before the final response (login checks, logging, parsing)

**Minimal Express server**

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(3000);
```

Your server now responds with `Hello!` at `http://localhost:3000/`.

**Why people like Express**

- Easy to learn
- Fast to build APIs
- Huge community and plugin ecosystem

---

## Node.js vs Express.js

| Topic | Node.js | Express.js | Relationship |
| --- | --- | --- | --- |
| What it is | JavaScript runtime (runs JS outside the browser) | Web framework built on top of Node.js | Express **uses** Node.js to run server code |
| Main purpose | Provides the environment to run server-side JS | Makes building web servers/APIs easier | Both are used to build backend applications |
| Runs by itself? | Yes | No — needs Node.js | Express depends on Node |
| Level | Lower-level (core APIs like `http`, `fs`) | Higher-level (structure + helpers) | Express simplifies what Node already does |
| Creating a server | Manual, via `http.createServer()` | Cleaner, via `app.get()` / `app.post()` | Both can create servers; Express is easier |
| Routing | Handled manually | Built-in routing system | A main reason people choose Express |
| Middleware | Not built in | Core concept (middleware pipeline) | Express is known for middleware |
| Best for | Real-time apps, tools/scripts, performance control | REST APIs, web apps, structured backends | Many projects use **Node + Express together** |
| Example | `http.createServer((req, res) => ...)` | `app.get("/", (req, res) => ...)` | Express code still runs on Node |

---

## Quick Start

```bash
# create a project
mkdir my-app && cd my-app
npm init -y

# install express
npm install express

# optional: auto-restart on file changes
npm install --save-dev nodemon
```

Add to `package.json`:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

Create `index.js`:

```js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

app.listen(3000, () => console.log("Server running on port 3000"));
```

Run it:

```bash
npm run dev
```

**Suggested project structure**

```
my-app/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── index.js
└── package.json
```

---

## Practice Questions

<details>
<summary><strong>1. What is Node.js?</strong></summary>

A JavaScript runtime that lets you run JavaScript outside the browser, mainly on a server.
</details>

<details>
<summary><strong>2. What is Express.js?</strong></summary>

A small web framework built on top of Node.js that makes building web servers and APIs easier.
</details>

<details>
<summary><strong>3. Can Express run without Node.js?</strong></summary>

No. Express depends on Node.js to run.
</details>

<details>
<summary><strong>4. What is the main purpose of Express.js?</strong></summary>

To simplify building backend web apps and REST APIs through easy routing and middleware support.
</details>

<details>
<summary><strong>5. What does "routing" mean in Express?</strong></summary>

Deciding what happens when a user visits a specific URL, such as `/`, `/users`, or `/products`.
</details>

<details>
<summary><strong>6. What does <code>app.get("/", (req, res) => { ... })</code> do?</strong></summary>

It handles HTTP GET requests to the `/` route and sends a response back.
</details>

<details>
<summary><strong>7. What is middleware in Express?</strong></summary>

A function that runs during the request-response cycle — for example logging, authentication checks, or parsing JSON.
</details>

<details>
<summary><strong>8. Give one example of what Node.js can do without Express.</strong></summary>

Create a server using the built-in `http` module, e.g. `http.createServer(...)`.
</details>

<details>
<summary><strong>9. When would you choose Express over plain Node <code>http</code>?</strong></summary>

When you want faster development with cleaner code for routing, APIs, and middleware instead of handling everything manually.
</details>

<details>
<summary><strong>10. What kind of projects commonly use Node + Express together?</strong></summary>

REST APIs, website backends, and structured backend services.
</details>

---

## Interview Questions

### Node.js Basics

| # | Question | Answer |
| --- | --- | --- |
| 1 | What is Node.js? | A JavaScript runtime built on Chrome's V8 that runs JS on the server. |
| 2 | Why is Node.js popular? | Non-blocking I/O, fast performance, huge npm ecosystem, great for APIs and real-time apps. |
| 3 | What is the event loop? | A mechanism that lets Node handle many requests without blocking, by processing callbacks when operations finish. |
| 4 | What is non-blocking I/O? | Node starts an I/O task (file or network) and continues running other code instead of waiting. |
| 5 | What is npm? | Node Package Manager — used to install and manage packages. |
| 6 | What is `package.json`? | Project metadata, dependencies, and scripts such as `start`, `dev`, `test`. |
| 7 | `dependencies` vs `devDependencies`? | `dependencies` are needed in production; `devDependencies` only during development (nodemon, testing tools). |
| 8 | `require()` vs `import`? | `require()` is CommonJS; `import` is ES Modules. ES Modules need `"type": "module"` or a `.mjs` extension. |

### Express.js Basics

**1. What is Express.js?**
A lightweight Node.js framework for building web servers and REST APIs.

**2. What is routing in Express?**
Defining how the server responds to a given request URL + method (GET, POST, etc.).

**3. What is middleware?**
A function that runs before the final route handler — used for logging, auth, parsing, and more.

```js
(req, res, next) => {
  // do something
  next();
};
```

**4. What does `next()` do?**
Passes control to the next middleware or route handler. Without it, the request may hang.

**5. How do you parse a JSON body?**

```js
app.use(express.json());
```

**6. Difference between `req.params` and `req.query`?**

| | Comes from | Example URL | Access |
| --- | --- | --- | --- |
| `req.params` | The URL **path** | `/users/5` with route `/users/:id` | `req.params.id` → `"5"` |
| `req.query` | The **query string** | `/users?age=20` | `req.query.age` → `"20"` |

Reading the name: `req` is the request (what the browser sent), and `params` is short for *parameters* — values taken from the URL path.

**7. What is `req.body`?**
Data sent by the client, usually with POST/PUT/PATCH. Requires a body-parsing middleware such as `express.json()`.

**8. How do you serve static files?**

```js
app.use(express.static("public"));
```

### REST API Concepts

**1. What is REST?**
A design style that uses HTTP methods to manage resources (GET, POST, PUT, PATCH, DELETE).

**2. PUT vs PATCH?**
PUT replaces the whole resource; PATCH updates only part of it.

**3. Common HTTP status codes**

| Code | Meaning |
| --- | --- |
| `200` | OK |
| `201` | Created |
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `500` | Server Error |

**4. What is CORS?**
A browser security rule that blocks cross-origin requests unless the server allows them. Use the `cors` middleware.

### Error Handling & Project Structure

**1. How do you handle errors in Express?**
With an error-handling middleware that takes four arguments:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});
```

**2. What is `nodemon` used for?**
Automatically restarting the server when files change during development.

**3. How do you organize a real Express project?**
Separate concerns into folders: `routes/`, `controllers/`, `middlewares/`, `models/`, `config/`.

### Security & Authentication

**1. What is JWT?**
A signed token used for stateless authentication, sent in a header like `Authorization: Bearer <token>`.

**2. How do you store passwords securely?**
Hash them with a salt using bcrypt. Never store plain passwords.

**3. What is SQL / NoSQL injection?**
Attacks where malicious input alters a query. Prevent with input validation, parameterized queries, and sanitization.

---

## Coding Exercises

**Create a basic Express server**

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello"));

app.listen(3000, () => console.log("Server running"));
```

**Create a GET route with a URL parameter**

```js
app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});
```

**Create a POST route that reads a JSON body**

```js
app.use(express.json());

app.post("/users", (req, res) => {
  res.status(201).json({ user: req.body });
});
```

---

## Resources

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express.js Documentation](https://expressjs.com/)
- [MDN — HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

## License

Released under the [MIT License](LICENSE).
