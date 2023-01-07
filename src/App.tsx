import { Link, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import "./App.css";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";

export const App = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    <Navigate to="/" />;
  };

  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Pagina Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};
