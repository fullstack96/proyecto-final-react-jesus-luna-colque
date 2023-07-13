import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBl4H1s94vm_BnBmTLevzYf4ww7RCQwiE",
  authDomain: "proyecto-react-coder-436e8.firebaseapp.com",
  projectId: "proyecto-react-coder-436e8",
  storageBucket: "proyecto-react-coder-436e8.appspot.com",
  messagingSenderId: "907435801757",
  appId: "1:907435801757:web:7e70749eeb25373ed7e874",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
