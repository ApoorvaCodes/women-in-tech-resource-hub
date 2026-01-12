import Navbar from "./components/Navbar";

import "./App.css";
import ResourceSection from "./components/ResourceSection";
import { resourceCategories } from "./data/resources";

function App() {
  return (
    <div className="app">
       <Navbar /> 
      <header className="header">
        <h1>Women in Tech Resource Hub</h1>
        <p>
          A curated, inclusive collection of opportunities designed to support
          women at every stage of their tech journey.
        </p>
      </header>

    <div className="sections-grid">
  {resourceCategories.map((category, index) => (
    <ResourceSection
      key={index}
      title={category.title}
      icon={category.icon}
      resources={category.resources}
    />
  ))}
</div>


      <footer style={{ textAlign: "center", opacity: 0.7, marginTop: "4rem" }}>
        Built with ❤️ by Apoorva • React + Vite
      </footer>
    </div>
  );
}

export default App;
