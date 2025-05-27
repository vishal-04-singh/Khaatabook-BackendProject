# Khaatabook-BackendProject

A simple Node.js backend for maintaining digital "hisaab" (accounts/ledger) with file-based storage. This project allows users to create, view, edit, and delete "hisaab" entries, ideal for tracking daily expenses or shared accounts in a minimal, easy-to-use manner.

## Features

- 📝 **Create New Hisaab:** Start a new hisaab by providing a title and content.
- 📋 **List All Hisaab:** View all saved hisaab entries, each named by date or custom title.
- 👀 **View Hisaab:** See the details of any hisaab entry.
- ✏️ **Edit Hisaab:** Update the content of any existing hisaab.
- 🗑️ **Delete Hisaab:** Remove any hisaab entry.
- 🖥️ **Minimal UI:** Simple and clean frontend using HTML, CSS, and EJS templating.
- 💾 **File-based Storage:** Each hisaab entry is stored as a file on the server.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Storage:** File System (fs)
- **Frontend:** HTML, CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishal-04-singh/Khaatabook-BackendProject.git
    cd Khaatabook-BackendProject
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm start
    ```
    or, if there's no `start` script:
    ```bash
    node app.js
    ```

4. **Open in your browser:**
    ```
    http://localhost:3000
    ```
    (or the port specified in your code)

## Project Structure

```
Khaatabook-BackendProject/
├── app.js            # Main server file
├── package.json      # Dependencies and scripts
├── views/            # EJS templates for UI
│   ├── index.ejs
│   ├── view.ejs
│   ├── edit.ejs
│   └── create.ejs
├── public/           # Static assets (CSS, JS)
├── hisaabs/          # Directory where hisaab files are stored
└── README.md
```

## API Endpoints

These endpoints are primarily used by the frontend forms:

- `GET /` : Home page, lists all hisaab files.
- `GET /create` : Form to create a new hisaab.
- `POST /createhisaab` : Create a new hisaab entry.
- `GET /hisaab/:filename` : View a specific hisaab.
- `GET /edit/:filename` : Edit form for a hisaab.
- `POST /update/:filename` : Update a hisaab file.
- `GET /delete/:filename` : Delete a hisaab file.

## Screenshots

> You can add screenshots here for Home, Create, View, and Edit pages.

## Contributing

Pull requests and suggestions are welcome!  
To contribute:
1. Fork this repo.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes.
4. Push to your fork.
5. Open a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for simple digital accounting.**