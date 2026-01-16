# 🌍 Destination Search App (React)

## 📌 Project Overview
The Destination Search App is a simple React application that allows users to search and filter destinations dynamically. As the user types in the search input, the destination list updates in real time.

This project is built using React **Class Components** and demonstrates state management, props usage, and JavaScript array filtering.

---

## 🚀 Features
 Real-time destination search
 Built using React Class Components
 State and props based data handling
 Dynamic filtering using JavaScript
Clean and responsive UI

---

##  Technologies Used
- React JS
- JavaScript (ES6)
- HTML5
- CSS3

---

---

## 🧠 How It Works
1. User enters text in the search input field.
2. The `onChangeSearchInput` method updates the component state.
3. The destination list is filtered using the `filter()` method.
4. Filtered destinations are displayed dynamically using `map()`.

Example filtering logic:
```js
destinationsList.filter(eachItem =>
  eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
)


