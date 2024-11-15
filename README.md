
# Celonis Angular Signals Workshop

Welcome to the **Celonis Angular Signals Workshop**! 🎉 In this workshop, we’re diving into how signal help us to solve 
commons problems in Angular, exploring traditional approaches and then introducing **Signals** as a modern, reactive alternative. If you’ve encountered `ExpressionChangedAfterItHasBeenChecked` errors or struggled with managing complex state across components, you’re in the right place.

This workshop is ideal for beginners and intermediate Angular developers using **Angular 18.2**. We’ll cover topics like , why is not change or ExpressionChangedAfterItHasBeenChecked and how Signals can make Angular applications cleaner and more efficient.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Workshop Flow](#workshop-flow)
3. [Branch Guide](#branch-guide)
4. [Setting Up the Environment](#setting-up-the-environment)
5. [Running the Project](#running-the-project)
6. [Contributing](#contributing)

---

## Project Overview

The project is structured in `src/app` with the following main folders:

- **services**: Contains files like `users.service.ts` for managing API communication and business logic.
- **user**: Contains user-related components, such as `user.component.ts`.
- **utils**: Shared utilities and helper functions located in `utils.ts`.

Our main component, `app.component`, will be the focal point where we experiment with Change Detection, reactivity, and Signals.

## Workshop Flow

This workshop is divided into branches, each covering a specific part of our journey:

1. **Problem Branches**: Start with `workshop-01-problem` and `workshop-02-problem` to see how Change Detection issues arise in Angular and why they can be challenging.
2. **Solution Branches**: In `workshop-01-solution` and `workshop-02-solution`, we’ll apply traditional techniques to address these issues.
3. **Signals Branches**: Finally, explore `workshop-01-solution-signals` and `workshop-02-solution-signals` to refactor with **Signals**, **Computed**, **Effect**, and **Model**, transforming how we handle state and reactivity.

### Topics Covered

Throughout the workshop, we’ll cover essential concepts including:
- **Reactivity** in Angular and its limitations with complex state.
- **Change Detection**: Understanding Angular’s default strategy and challenges.
- **OnPush Strategy**: How to use it for better performance and control over updates.
- **ExpressionChangedAfterItHasBeenChecked**: Why this error happens and how to prevent it.
- **Signals**: Using Signals for cleaner, reactive state management.
- **Signal Model**: Organizing state in a way that simplifies component interactions.
- **Computed**: Creating derived state without complex bindings.
- **Effect**: Managing side effects reactively without relying heavily on lifecycle hooks.
... and more

Following the branches in order will help you understand the transition from traditional methods to a more reactive, Signal-based approach.

---


## Setting Up the Environment

To follow along, make sure you have:

- **Node.js** (version 16 or higher)
- **Angular CLI** (compatible with Angular 18.2)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/danywalls/celonis-workshop-signals.git
   cd celonis-workshop-signals
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Switch to the branch you’re working on:
   ```bash
   git checkout workshop-01-problem
   ```
2. Start the development server:
   ```bash
   ng serve
   ```

Follow the branch-specific instructions to learn about specific problems and solutions.

## Contributing

We welcome contributions! If you have ideas or improvements:
1. Fork the repository.
2. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Submit a pull request, and let’s make this workshop even better.

---
Thanks
