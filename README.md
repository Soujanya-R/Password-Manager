# Password Manager
## SecureStash
A simple password manager built using React that allows users to securely save and manage passwords for different sites. The app stores passwords locally in the browser using localStorage and provides features like showing/hiding passwords, copying password details to clipboard, and managing saved passwords.
## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Soujanya-R/Password-Manager/refs/heads/main/Screenshot%202025-02-01%20152627.png)


## Features
1. Add new passwords (site URL, username, and password).
2. Show or hide password input.
3. Copy site URL, username, or password to clipboard.
4. Edit or delete saved passwords.
5. Local storage for persistent data across page reloads.


## Tech Stack
- React: Frontend library for building the user interface.
- UUID: Used to generate unique IDs for each password entry.
- React Toastify: For displaying toast notifications on actions like adding, deleting, or copying passwords.
- LocalStorage: For storing password data locally on the user's browser.
## Installation


1. Clone the repository:

```bash
git clone https://github.com/your-username/password-manager.git
  ``` 
2. Navigate to the project directory:

```bash
cd password-manager
  ```

3. Install dependencies:
```bash
npm install
  ```
 
4. Start the development server:
```bash
npm start
  ```

5. Open http://localhost:3000 in your browser.

## Usage
- Add a new password by entering the site URL, username, and password.
- Click on the eye icon to toggle password visibility.
- Copy any entry (site, username, or password) to the clipboard using the copy icon.
- Edit or delete existing passwords using the edit or delete icons.
## License
This project is open-source and available under the 
[MIT](https://choosealicense.com/licenses/mit/).

