# EliteMart BD - E-Commerce Angular Application

EliteMart BD is a modern Angular-based E-Commerce platform focusing on high-quality branded products of Bangladesh. This platform provides a seamless shopping experience with user authentication, admin privileges, interactive navigation, and a beautifully designed interface.

## 🚀 **Features**

### 🔹 **Authentication & Authorization**

* User login and signup using `db.json` as the mock backend.
* Role-based access control (Admin & Customer):

  * **Admin:** Can view user information, manage products, and access protected routes.
  * **Customer:** Can browse products, view their own profile, and make purchases.
* Custom `AuthGuard` implementation to restrict routes based on roles.
* Real-time updates to `db.json` during registration.
* Authentication messages with custom sound alerts:

  * If a non-admin user tries to access an admin page, a sound (`bip.mp3`) is played with a notification.

### 🔹 **Navigation & Routing**

* Beautifully designed **navbar** with:

  * Home, About, Contact, User, and Logout links.
  * A search bar with smooth animations.
  * Sticky-top and shadow effect for better user experience.
* Conditional navigation based on authentication status.

### 🔹 **Owl Carousel Integration**

* Interactive product slider using **Owl Carousel**.
* Auto-play and navigation controls for smooth transitions.

### 🔹 **Contact Form**

* Modern Material Design contact form with image background.
* Input fields for Name, Email, Phone, and Message.
* Submission button with hover effects.

### 🔹 **Header Design**

* Integrated company logo with the title **EliteMart BD**.
* Gradient background and improved aesthetics.

### 🔹 **Admin-Only Access Control**

* If a non-admin tries to access the `/user` route:

  * They are redirected to the home page.
  * A warning with sound alert is triggered: *"Only Admin can access this page. If you are an Admin, log in with your Admin ID."*
* If a user is not logged in and tries to access a protected page:

  * They are redirected to the login page with an alert: *"You have to log in as Admin to see user information."*

---

## 🛠 **Technologies Used**

| Technology       | Purpose                               |
| ---------------- | ------------------------------------- |
| Angular          | Frontend framework                    |
| Angular Router   | Client-side navigation                |
| Angular Material | UI Components and styling             |
| JSON Server      | Mock backend and database (`db.json`) |
| Bootstrap 5      | Responsive design and grid system     |
| Owl Carousel     | Image sliders and carousels           |
| ngx-toastr       | Toast notifications with sound alerts |

---

## 📂 **Folder Structure**

```
src/
│
├── app/
│   ├── auth-guard.service.ts
│   ├── auth.service.ts
│   ├── header/
│   ├── contact/
│   ├── user/
│   ├── login/
│   ├── signup/
│   └── ...
│
├── assets/
│   ├── logo.jpeg
│   ├── bip.mp3
│   └── ...
│
├── environments/
│
├── index.html
├── main.ts
├── styles.css
└── ...
```

---

## 🔄 **Database (db.json)**

* Manages user data with real-time updates on registration.
* Structure:

```json
{
  "users": [
    {
      "id": "admin1",
      "name": "Admin1",
      "password": "Russel@admin1",
      "email": "abc@email.com",
      "gender": "male",
      "role": "admin",
      "isactive": true
    },
    {
      "id": "russel",
      "name": "Abdur Rahman Russel",
      "password": "Test@1234",
      "email": "test@in.com",
      "gender": "male",
      "role": "tech",
      "isactive": true
    }
  ]
}
```

---

## 📌 **Getting Started**

1. Clone the repository:

   ```bash
   git clone https://github.com/username/EliteMartBD.git
   ```
2. Navigate to the project directory:

   ```bash
   cd EliteMartBD
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run JSON Server:

   ```bash
   json-server --watch db.json
   ```
5. Start the Angular application:

   ```bash
   ng serve --open
   ```

---

## 🔒 **Admin Credentials**

* **id:** admin1
* **Password:** Russel@admin1

## 🔒 **User Credentials**

* **id:** russel
* **Password:** Test@1234

---

## 📝 **Future Improvements**

* Integration with real backend API.
* Enhanced product management dashboard for admins.
* Order tracking and history for customers.
* Payment gateway integration.

---

## 📞 **Support**

For support, contact **Md. Abdur Rahman** at **[abdurrahmanrussel77@gmail.com](mailto:abdurrahmanrussel77@gmail.com)**.
