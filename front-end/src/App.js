import "./App.css";
import Form from "./Components/Form.js";
import { AllUrl } from "./Components/AllUrl";
import { UtilsProvider } from "./Context/UtilsContext.js";

function App() {
  return (
    <UtilsProvider>
      <h1 id="Page-Title"> URL Alias </h1>
      <Form />
      <AllUrl />
    </UtilsProvider>
  );
}

export default App;
