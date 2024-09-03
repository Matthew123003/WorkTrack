// index.js
import { AppRegistry } from 'react-native';
import App from './App'; // Your main App component
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // If using routing

// Register the app with AppRegistry
AppRegistry.registerComponent(appName, () => App);

// Render the app component to the DOM
const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
// Web Bundling failed 336ms index.js (1 module)
// Unable to resolve "react-router-dom" from "index.js"

