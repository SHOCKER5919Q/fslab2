# FSWD Lab — Sets 1 to 15

Full Stack Web Development lab programs. Each set has two programs in their own folder.
The lab code is unchanged; setup files (`package.json`, `vite.config.js`, `src/main.jsx`, `index.html`) are added only so each program runs.

## Prerequisites

| Tool | Needed for | Check |
|------|-----------|-------|
| Node.js 18+ and npm | all React and Node programs | `node -v`, `npm -v` |
| MongoDB server + `mongosh` | Set 3 query, Set 7 update, Set 9 mongo | `mongod --version`, `mongosh --version` |
| A web browser | React apps, Set 8 form | — |

```bash
git clone https://github.com/SHOCKER5919Q/fslab2.git
cd fslab2
```

## All programs at a glance

| Set | Folder | Type | How to run |
|-----|--------|------|-----------|
| 1 | `set01/counter` | React | [React](#react-programs) |
| 1 | `set01/http` | Node (http) | `node server.js` → http://localhost:3000 |
| 2 | `set02/props` | React | [React](#react-programs) |
| 2 | `set02/crud` | Express | `npm install && node app.js` → see [routes](#set-2--crud-set02crud) |
| 3 | `set03/map` | React | [React](#react-programs) |
| 3 | `set03/query` | MongoDB | [Mongo shell](#mongodb-shell-programs) |
| 4 | `set04/children` | React | [React](#react-programs) |
| 4 | `set04/users` | Express | `npm install && node app.js` → see [routes](#set-4--users-rest-api-set04users) |
| 5 | `set05/blocking` | Node (fs) | `echo Hello Saket > input.txt`, then `node blocking.js` and `node nonblocking.js` |
| 5 | `set05/redirect` | Express | `npm install && node app.js` → `/`, `/about`, `/old` |
| 6 | `set06/class` | React | [React](#react-programs) |
| 6 | `set06/events` | Node (events) | `node events.js` |
| 7 | `set07/create` | Node (fs) | `node createfile.js` |
| 7 | `set07/update` | Mongoose | start `mongod`, then `npm install && node update.js` |
| 8 | `set08/form` | HTML | open `form.html` in a browser |
| 8 | `set08/longest` | Node | `node longest.js` |
| 9 | `set09/mongo` | MongoDB | [Mongo shell](#mongodb-shell-programs) |
| 9 | `set09/timer` | React | [React](#react-programs) |
| 10 | `set10/httpfile` | Node (http + fs) | `node httpfile.js` → open http://localhost:3000 |
| 10 | `set10/express` | Express | `npm install && node app.js` → `/`, `/student` |
| 11 | `set11/login` | Node (events) | `node login.js` |
| 11 | `set11/body` | Express | `npm install && node app.js` → see [routes](#set-11--body-set11body) |
| 12 | `set12/greeting` | React | [React](#react-programs) |
| 12 | `set12/router` | React + React Router | [React](#react-programs) → `/`, `/about`, `/contact` |
| 13 | `set13/color` | React | [React](#react-programs) |
| 13 | `set13/foreach` | Node | `node foreach.js` |
| 14 | `set14/clicks` | React | [React](#react-programs) |
| 14 | `set14/list` | React | [React](#react-programs) |
| 15 | `set15/jsx` | React | [React](#react-programs) |
| 15 | `set15/validation` | React | [React](#react-programs) |

Every command is run **inside that program's folder**, e.g. `cd set10/express`.

## React programs

Folders: `set01/counter`, `set02/props`, `set03/map`, `set04/children`, `set06/class`, `set09/timer`, `set12/greeting`, `set12/router`, `set13/color`, `set14/clicks`, `set14/list`, `set15/jsx`, `set15/validation`.

```bash
cd set01/counter
npm install      # first time only
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). Press `Ctrl+C` to stop.
The lab code is in `App.jsx`; `src/main.jsx` and `index.html` only mount it.

## Plain Node programs

No `npm install` needed — just `node <file>`:

```bash
cd set06/events && node events.js
cd set08/longest && node longest.js
cd set11/login && node login.js
cd set13/foreach && node foreach.js
cd set07/create && node createfile.js     # creates student.txt and prints it
```

**Set 5 — blocking vs non-blocking** (both files are in `set05/blocking`):

```bash
cd set05/blocking
echo Hello Saket > input.txt
node blocking.js
node nonblocking.js
```

Compare the order of the printed lines: the blocking version waits for the file, the non-blocking one prints the next line first.

## Server programs (port 3000)

All servers listen on **port 3000**. Stop one (`Ctrl+C`) before starting another, or you'll get `EADDRINUSE`.

Express programs need their dependency once: `npm install` in the folder (a `package.json` is already there).

### Set 1 — HTTP server (`set01/http`)

```bash
node server.js
curl http://localhost:3000        # Hello from Node HTTP server
```

### Set 2 — CRUD (`set02/crud`)

```bash
npm install && node app.js
curl http://localhost:3000/user
curl -X POST   http://localhost:3000/user
curl -X PUT    http://localhost:3000/user
curl -X DELETE http://localhost:3000/user
```

### Set 4 — Users REST API (`set04/users`)

```bash
npm install && node app.js
curl http://localhost:3000/users
curl -X POST   http://localhost:3000/users   -H "Content-Type: application/json" -d '{"name":"Arjun"}'
curl -X PUT    http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"Saket Kumar"}'
curl -X DELETE http://localhost:3000/users/1
```

`MONGODB_VARIANT.txt` in this folder describes the optional Mongoose version.

### Set 5 — Redirect (`set05/redirect`)

```bash
npm install && node app.js
```

Visit http://localhost:3000/, `/about`, and `/old` (redirects to `/about`).
With curl: `curl -i http://localhost:3000/old` shows the `302` and `Location: /about`.

### Set 10 — HTTP + file (`set10/httpfile`)

```bash
node httpfile.js
```

Open http://localhost:3000 — the server writes `newfile.txt` in the folder.

### Set 10 — Express (`set10/express`)

```bash
npm install && node app.js
```

Visit http://localhost:3000/ and http://localhost:3000/student.

### Set 11 — Body (`set11/body`)

```bash
npm install && node app.js
curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name":"Saket","age":20}'
curl -X POST http://localhost:3000/submit -d "name=Saket&age=20"     # form-encoded
```

Response: `Hello Saket, you are 20`. The server terminal logs the received body.

## MongoDB programs

Start the MongoDB server first (leave it running in its own terminal):

```bash
mongod
# or, if installed as a service:  sudo systemctl start mongod
```

### MongoDB shell programs

Folders: `set03/query` (`query.mongosh.js`), `set09/mongo` (`mongo.mongosh.js`).

The simplest way, and how they're done in the lab: open `mongosh` and paste the commands in, one at a time, to see each result.

```bash
mongosh
# then paste the lines from query.mongosh.js
```

Running the whole file with `mongosh query.mongosh.js` also works, but a script does not print the result of `find()` the way the interactive shell does, so you won't see the query output unless you paste it in.

### Set 7 — Mongoose update (`set07/update`)

```bash
cd set07/update
npm install
node update.js
```

Connects to `mongodb://127.0.0.1:27017/college`, inserts a student, updates one and many documents, and prints the result.

## HTML program

**Set 8 — Form:** open `set08/form/form.html` directly in a browser (double-click it, or `xdg-open set08/form/form.html`).

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Error: listen EADDRINUSE :::3000` | Another server is still running. Stop it with `Ctrl+C`, or `npx kill-port 3000`. |
| `Cannot find module 'express'` / `'mongoose'` | Run `npm install` in that program's folder. |
| `ENOENT: no such file ... input.txt` (Set 5) | Run `echo Hello Saket > input.txt` in `set05/blocking`. |
| `MongooseServerSelectionError` / `ECONNREFUSED 27017` | MongoDB isn't running — start `mongod`. |
| `vite: not found` | Run `npm install` in the React folder first. |
