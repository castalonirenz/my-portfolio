# 🎨 Tailwind CSS Utility Cheat Sheet

A practical, developer-friendly reference for commonly used Tailwind CSS utility classes.

---

## 📦 Layout & Display

```html
block inline inline-block hidden
flex inline-flex grid
```

---

## 📐 Flexbox

```html
flex flex-row flex-col
justify-start justify-center justify-between justify-around
items-start items-center items-end
gap-2 gap-4 gap-6
```

---

## 📏 Spacing (Margin & Padding)

```html
m-4      mt-2 mb-2 ml-2 mr-2
p-4      pt-2 pb-2 pl-2 pr-2
mx-auto  px-4 py-2
```

**Scale:**
`0, 1, 2, 3, 4, 5, 6, 8, 10, 12...`
👉 `1 = 0.25rem`

---

## 📦 Width & Height

```html
w-full w-screen w-1/2 w-1/3 w-1/4
h-full h-screen

max-w-sm max-w-md max-w-lg max-w-xl
```

---

## 🎯 Positioning

```html
relative absolute fixed sticky
top-0 left-0 right-0 bottom-0
z-10 z-50
```

---

## 🎨 Background

```html
bg-blue-500 bg-red-500 bg-gray-100
bg-white bg-black

bg-opacity-50
bg-gradient-to-r from-blue-500 to-purple-500
```

---

## ✍️ Text & Font

```html
text-sm text-base text-lg text-xl text-2xl
text-[18px]   /* custom size */

font-light font-normal font-medium font-bold

text-left text-center text-right
text-gray-700 text-red-500 text-white
```

---

## 🔤 Font Family

```html
font-sans font-serif font-mono
```

---

## 📦 Border & Radius

```html
border border-2 border-gray-300
border-t border-b

rounded rounded-md rounded-lg rounded-full
```

---

## 🌫️ Shadow

```html
shadow-sm shadow shadow-md shadow-lg shadow-xl
```

---

## 🖱️ Cursor & Interaction

```html
cursor-pointer cursor-not-allowed

hover:bg-blue-600
hover:text-white
```

---

## 🎬 Transitions & Effects

```html
transition duration-300 ease-in-out

hover:scale-105
hover:opacity-80
```

---

## 📱 Responsive Design

```html
sm: md: lg: xl: 2xl:
```

**Example:**

```html
text-sm md:text-lg lg:text-xl
```

---

## 📏 Overflow & Scroll

```html
overflow-hidden overflow-auto overflow-scroll
```

---

## 🧩 Grid

```html
grid grid-cols-2 grid-cols-3
gap-4
```

---

## 🔒 Visibility

```html
visible invisible
```

---

## ⚡ Custom Values (Arbitrary Values)

```html
w-[300px]
text-[17px]
mt-[22px]
```

---

## 💡 Pro Tips

* Use **flex + gap** instead of margin spacing
* Use **max-w-* + mx-auto** for centered layouts
* Use **arbitrary values `[value]`** for quick custom styling
* Avoid overusing custom values → maintain consistency

---

## 🧠 Example Component

```html
<div class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
  <h1 class="text-xl font-bold mb-2">Title</h1>
  <p class="text-gray-600 text-sm">Description here</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
    Click me
  </button>
</div>
```

---

## 🚀 Notes

* Restart your dev server after editing `tailwind.config.js`
* Ensure correct `content` paths in config
* Avoid dynamic class names like `text-${size}` (won’t compile)

---

Happy coding! 🎯
