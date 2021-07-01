import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import QuizDialog from "./components/QuizDialog";
import ThemeDrawer from "./components/ThemeDrawer";
import MainView from "./views/MainView";

function App() {
  return (
    <React.Fragment>
      <Router>
        <ThemeDrawer />
        <QuizDialog />
        <MainView />
      </Router>
    </React.Fragment>
  );
}

export default App;
