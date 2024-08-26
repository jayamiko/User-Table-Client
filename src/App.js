import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const UserDetail = lazy(() => import("./pages/UserDetail"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
