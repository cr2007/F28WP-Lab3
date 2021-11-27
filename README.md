<div align="center">
    <h1>F28WP Lab 3</h1>
</div>

## Course: Web Programming ([F28WP](https://www.hw.ac.uk/documents/pams/202122/F28WP_202122.pdf))

<div align="center">
    <a href="https://nodejs.org/en/">
        <img alt="Node.js" title="Allows to run JS files locally" src="https://img.shields.io/badge/Node.js-informational?style=flat-sqaure&logo=node.js&logoColor=white&color=339933">
    </a>
    <a href="https://www.npmjs.com">
        <img alt="npm" title="Node Package Manager" src="https://img.shields.io/badge/npm-informational?style=flat-sqaure&logo=npm&logoColor=white&color=CB3837">
    </a>
    <a href="https://www.mysql.com/">
        <img alt="MySQL" title="Database" src="https://img.shields.io/badge/MySQL-informational?style=flat-sqaure&logo=mysql&logoColor=white&color=4479A1">
    </a>
    <a href="https://www.npmjs.com/package/nodemon">
        <img alt="Nodemon" title="Nodemon" src="https://img.shields.io/badge/nodemon-informational?style=flat-sqaure&logo=nodemon&logoColor=white&color=76D04B">
    </a>
    <a href="https://www.npmjs.com/package/express">
        <img alt="express" title="express" src="https://img.shields.io/badge/express-informational?style=flat-sqaure&logo=express&logoColor=white&color=000000">
    </a>
</div>

### Lab 3: Node.js and MySQL

---

### Index

- [Running the File](#running-the-file)
- [File Structure](#file-structure)

This lab uses [Node.js](https://nodejs.org/en/) and  to run server-side programming.<br>
We were tasked with developing basic functions for an online shopping application. 

---

### Running the File
Make sure you have [Node.js](https://nodejs.org/en/) installed and have the packages installed on your device.

To run the server, open the Terminal and type `npm run dev`<br>
The server will then run on [http://localhost:3000](http://localhost:3000).

<details><summary>Packages used for this Lab</summary>
    <ul>
        <li><a href="https://www.npmjs.com/package/express">express</a></li>
        <li><a href="https://www.npmjs.com/package/nodemon">nodemon</a></li>
        <li><a href="https://www.npmjs.com/package/ejs">ejs</a></li>
        <li><a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a></li>
        <li><a href="https://www.npmjs.com/package/express-session">express-session</a></li>
    </ul>
</details>

<div align="right">
    <a href="https://github.com/cr2007/F28WP-Lab3#Index">Back to Top</a>
</div>

### File Structure
```
├── README.md
├── controllers
│   ├── clientController.js
│   └── productController.js
├── db
│   ├── clientDAO.js
│   ├── dbQuery.js
│   └── productDAO.js
├── models
│   └── entities.js
├── node_modules
│   └── <all node packages>
├── public
│   ├── hwu.css
│   ├── hwu.png
│   └── index.html
├── routes
│   └── apis.js
├── services
│   ├── clientServices.js
│   └── productServices.js
├── views
│   ├── article.ejs
│   ├── catalogue.ejs
│   ├── contacts.ejs
│   ├── footer.ejs
│   ├── header.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── loginFailed.ejs
│   ├── postLogin.ejs
│   ├── postRegister.ejs
│   └── register.ejs
├── app.js
├── package-lock.json
├── package.json
└── sales.sql
```
<div align="right">
    <a href="https://github.com/cr2007/F28WP-Lab3#Index">Back to Top</a>
</div>