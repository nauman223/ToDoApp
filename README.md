# 📝 Angular 19 Todos Application

A fully featured Todos Management application built with **Angular 19**, **NgRx 19**, **Angular Material**, **Standalone Components**, **Signals**, and **Modern Angular Best Practices**.

This application demonstrates:

- User authentication (JWT)
- Todo listing, creation, editing, details, and deletion
- Drag & drop (CDK) for updating status
- Infinite scrolling with load-more functionality
- State management using NgRx (Actions, Reducers, Effects, Selectors)
- API integration with DummyJSON
- Lazy-loaded routes with custom preloading
- A complete development quality pipeline (ESLint, Prettier, Husky, lint-staged, Commitlint)

---

## 🚀 Features

### ✔ Authentication  
- Login with DummyJSON `/auth/login`  
- JWT stored in `localStorage`  
- Interceptor auto-attaches token  
- Token expiration auto-detected (auto logout)

### ✔ Todos Management  
- Create, edit, delete todos  
- Task details page  
- Drag & drop status updates  
- Infinite scroll for loading more todos  
- Todo filtering (completed / todo)  
- Search functionality (optional using DummyJSON post search API)

### ✔ Architecture  
- Standalone components  
- Feature-based lazy-loaded routing  
- Angular Signals + NgRx  
- Strong TypeScript models  
- API services with type-safe responses  
- Interceptors + Guards  

---

# 📦 Tech Stack

| Technology | Purpose |
|-----------|----------|
| **Angular 19** | UI Framework |
| **NgRx 19** | State Management |
| **Angular Material 19** | UI Components |
| **CDK Drag & Drop** | Task movement |
| **Husky v9** | Git hooks |
| **Commitlint** | Commit message enforcement |
| **lint-staged** | Pre-commit linting |
| **Prettier** | Code formatting |
| **ESLint Flat Config** | Linting |

---

# 🔧 Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/your-repo/todo-app.git
cd todo-app
