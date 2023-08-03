import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../components/App/App";
import Home from "../components/App/Home";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route index element={<Home/>}/>
  </Route>
));