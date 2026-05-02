# Design Patterns in TypeScript

This project is a learning resource for understanding and implementing various design patterns using TypeScript and React. It provides practical examples of common design patterns with code snippets and demonstrations.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd design-patterns
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173` (or another port if 5173 is occupied).

## Design Patterns Implemented

### Decorator Pattern

The Decorator pattern allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

**Files:**
- [Class Decorator](src/patterns/decorator/1-class-decorator.ts)
- [Decorator Factory](src/patterns/decorator/2-decorator-factory.ts)
- [Method Decorator](src/patterns/decorator/3-method-decorator.ts)

### Iterator Pattern

The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

**Files:**

- [Custom Iterator](src/patterns/iterator/get-my-iterator.ts)
- [Generator Function](src/patterns/iterator/get-my-generator.ts)
- [Range Function using Custom Iterator & Generator Function](src/patterns/iterator/range.ts)

### Observer Pattern

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

**Files:**

- [Observer Implementation](src/patterns/observer/Observer.ts)
- [Toast Example](src/patterns/observer/ToastExample.tsx)
- [Toast Components](src/patterns/observer/components/)

## Usage

Explore the code in the `src/patterns/` directory to see implementations of each pattern. The main application in `src/App.tsx` may include demonstrations or examples.
