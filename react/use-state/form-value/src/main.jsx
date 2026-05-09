import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import App1 from "./components/App1";
import Fruits from "./components/fruits";
import Fruits1 from "./components/Fruits1";

let root = createRoot(document.getElementById("root"));

root.render(<Fruits1></Fruits1>);
