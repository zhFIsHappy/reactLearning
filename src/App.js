import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";
import { Profile } from "./pages/Profile";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const AppContext = createContext();
function App() {
  const [username, setUserName] = useState("Frank")
  // switch tab and don't refresh data on page 
  const client = new QueryClient({defaultOptions : {
    queries : {
      refetchOnWindowFocus : false,
    }
  }});
  return (
    <div className="App">
      <QueryClientProvider client = {client}>
        <AppContext.Provider value = {{username, setUserName}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>

     
     
    </div>
  );
}

export default App;