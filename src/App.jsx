import { HashRouter, Routes, Route } from "react-router-dom";
import FormSubmit from "./FormSubmit";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormSubmit />} />
        <Route path="/form-submit" element={<FormSubmit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
