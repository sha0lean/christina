// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./Layout"
import Christina from "./pages/Christina"
import Home from "./pages/Home"

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/christina" element={<Christina />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
