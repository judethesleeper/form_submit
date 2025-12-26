import { HashRouter, Routes, Route } from "react-router-dom";
import FormSubmit from "./FormSubmit";
import Register from "./Register"; // NEW

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormSubmit />} />
        <Route path="/form-submit" element={<FormSubmit />} />

        {/* NEW ASSIGNMENT */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
