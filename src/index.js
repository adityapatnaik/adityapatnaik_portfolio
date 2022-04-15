import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Overlay } from "./StyledComponents/Components";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Overlay /> */}
  </BrowserRouter>,
  rootElement
);
