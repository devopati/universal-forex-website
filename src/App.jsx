import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { Store } from "./Redux/Store/Store";
import { Provider } from "react-redux";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ToastContainer />
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
