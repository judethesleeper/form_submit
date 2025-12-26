import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormSubmit from "./FormSubmit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormSubmit />} />
        <Route path="/form-submit" element={<FormSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
