# 📝 Angular 19 Todos Application

A fully featured Todos Management application built using **Angular 19**, **NgRx 19**, **Angular Material**, **Standalone Components**, **Angular Signals**, and modern Angular best practices.

This project demonstrates real-world application architecture, including:

- JWT Authentication
- Todo Listing, Creation, Editing, Details, Deletion
- Drag-and-Drop (change status between Todo & Completed)
- Infinite Scrolling
- State Management using NgRx
- API Integration with DummyJSON
- Lazy-Loaded Routes with Custom Preloading
- Global Code Quality Pipeline (ESLint, Prettier, Husky, lint-staged, Commitlint)

---

## 🚀 Features

### ✔ Authentication
- Login using DummyJSON `/auth/login`
- JWT stored in `localStorage`
- Token expiration auto-detected
- Auth interceptor injects token into all requests
- Auto-redirect to `/login` when expired

### ✔ Todo Management
- List Todos & Completed items
- Drag & Drop using CDK
- Infinite scroll with `limit` & `skip`
- Create / Edit / Delete Todo
- Todo Details Page
- Material UI Styling

### ✔ Architecture
- Standalone Components
- Angular Signals for UI state
- NgRx for global state
- Lazy loading
- Type-safe services & models
- Error Handling (lazy loading & interceptors)

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```
App: http://localhost:4200

### 4. Build the project
```bash
npm run build
```
Output: `/dist`

---

## 🔐 Authentication

Uses DummyJSON Auth API.

**Login**
```
POST https://dummyjson.com/auth/login
```

Request:
```json
{ "username": "emilys", "password": "emilyspass" }
```

Response:
```json
{ "id": 1, "username": "emilys", "token": "..." }
```

Token Expiration:
```
"exp": 1765027771
```

---

## 📡 Backend API Assumptions

### Todos Endpoints
```
GET /todos?limit={limit}&skip={skip}
GET /todos/{id}
POST /todos/add
PUT /todos/{id}
DELETE /todos/{id}
GET /posts/search?q={query}
```

Expected:
```json
{ "todos": [], "total": 150, "skip": 0, "limit": 10 }
```

---

## 🧱 Project Folder Structure

```
src/
 ├── app/
 │   ├── core/
 │   ├── auth/
 │   ├── todos/
 │   │   ├── pages/
 │   │   ├── components/
 │   │   └── state/
 │   ├── shared/
 │   └── app.config.ts
 ├── assets/
 └── environments/
```

---

## 🧪 State Management (NgRx 19)

Includes:
- loadTodos
- loadMoreTodos
- createTodo
- updateTodo
- deleteTodo

Components:
- Reducers
- Selectors
- Effects
- Type models

Signals used for UI state.

---

## 🎯 Implementation Notes

### Modern Angular:
- `inject()`
- `signal()`
- `@if`, `@for`
- Standalone components

### Lazy Loading:
```
loadComponent: () => import(...)
```

### Preloading:
```
data: { preload: true }
```

### Fallback:
Lazy load errors → NotFound component.

### Infinite Scroll:
```
limit = 10
skip += 10
```

---

## 🧹 Code Quality Tools

Includes:
- ESLint
- Prettier
- Husky v9
- lint-staged
- Commitlint

### Lint:
```bash
npm run lint
npm run lint:fix
npm run format
```

---

## 🔐 Git Hooks (Husky v9)

### Pre-commit:
```
npx lint-staged
```

### Commit-msg:
```
npx --no-install commitlint --edit "$1"
```

Commit conventions:
```
feat: add drag-drop feature
fix: correct infinite scroll issue
```

---

## 🤝 Contributing

1. Fork
2. Create feature branch:
```bash
git checkout -b feat/my-feature
```
3. Commit using Angular conventions
4. Push & create PR

---
