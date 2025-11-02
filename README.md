# React Quiz (Practice Project)

This is a small React quiz app created as a practice project to exercise React hooks (notably the `useReducer` hook) and building a small UI around quiz data.

The repository contains the app source in `src/` and quiz data in `data/questions.json`.

What this project demonstrates
- Using React with functional components
- Managing more complex component state with `useReducer` (practice)
- Fetching data from a local JSON file / simple API
- Basic routing-less single page app built with Create React App

Key packages used
- `react`, `react-dom`, `react-scripts` — the Create React App toolchain and React itself.
- `json-server` — an easy-to-run mock REST API used during development. The project includes a convenient npm script to serve `data/questions.json` as a REST endpoint at `http://localhost:8000`.

Local development

1. Install dependencies:

```powershell
npm install
```

2. Start the mock API (optional, used if the app fetches questions from an API):

```powershell
npm run server
# opens json-server watching data/questions.json on port 8000
```

3. Start the development server:

```powershell
npm start
```

The app will open in the browser at `http://localhost:3000` by default.

Deploying to Vercel

This project is a static single-page React app created with Create React App, so it can be deployed to Vercel as a static site. A `vercel.json` file is included to ensure the correct build settings and SPA routing.

Steps to deploy:

1. If you haven't already, push the project to a Git provider (GitHub/GitLab/Bitbucket).
2. Sign in to Vercel and import the repository.
3. Vercel will detect the project. If necessary, set the build command to `npm run build` and the output directory to `build`.

Notes about the included `vercel.json`
- It uses `@vercel/static-build` to run the `build` step and deploy the `build` folder.
- It adds a rewrite so that all routes fallback to `/index.html` (important for client-side routing in SPAs).

Extra notes
- The `json-server` dependency is included for local mock API use. It's not required in production on Vercel — Vercel will host the static build only. If your deployed app depends on a live API, point it to a proper backend or remove the mock-data fetch in production.
- The project is intentionally small and meant for learning; consider adding tests or CI as a next step.

If you want, I can also:
- Update `package.json` metadata (name/version) to match the project folder.
- Add short deployment instructions for GitHub Actions or other CI.

---
Last verified: November 2, 2025

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
