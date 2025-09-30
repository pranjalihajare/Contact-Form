# Contact Form with JavaScript Validation

## 📌 Overview
This is a simple **Contact Form** built with HTML, CSS, and JavaScript.  
It includes **client-side validation** for Name, Email, and Message fields.

## 🚀 Features
- Clean and responsive UI
- Validation rules:
  - **Name**: cannot be empty
  - **Email**: must follow valid format using regex
  - **Message**: cannot be empty
- Error messages shown inline under each input
- Prevents submission until all fields are valid
- Success message displayed on valid submission (no backend connection)

## 🛠️ Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)

## 📂 Project Structure
contact-form-validation/
│── index.html # Contains HTML, CSS, and JS
│── README.md # Documentation
│── screenshots/ # UI preview images


## 📷 Screenshots
Example form preview:

![Contact Form Preview](https://github.com/pranjalihajare/Contact-Form/blob/4185a5dc1c68ca3b719cb58b11e86fab629e0796/Screenshot%20from%202025-09-30%2017-43-42.png)

## ▶️ How to Run
1. Clone/download this repository.
2. Open `index.html` in **Chrome** or any modern browser.
3. Try submitting empty fields or invalid email → see validation in action.
4. Enter valid data → success message appears.

## 🧪 Test Cases
- **Empty Fields** → Show "required" errors.
- **Invalid Email** → Show email format error.
- **Valid Inputs** → Show success message.
