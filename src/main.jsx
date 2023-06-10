import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { getRoutes } from "./09-useContext/Routes";
const router = getRoutes();

console.log(router);

// import './08-useReduce/intro-reducer'

// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-examples/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReduce/TodoApp';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
      <RouterProvider router={router} />    
  </React.StrictMode>
);
