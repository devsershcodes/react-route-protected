import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Admin, Analytics1, Dashboard, Home, Landing } from "./pages";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    //  request done
    setUser({
      id: 1,
      name: "John",
      permissions: ['analize'],
      role: ['admin']
    });
  };

  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}> Login </button>
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user}/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/analytics1" element={
          <ProtectedRoute 
          isAllowed={!!user && user.permissions.includes('analize')}
          redirectTo="/home"
          >
            <Analytics1 />
          </ProtectedRoute>
        } />
        
        <Route path="/admin" element={
          <ProtectedRoute 
          isAllowed={!!user && user.role.includes('admin')}
          redirectTo="/home"
          >
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing"> Landing </Link>
        </li>
        <li>
          <Link to="/home"> Home </Link>
        </li>
        <li>
          <Link to="/dashboard"> Dashboard </Link>
        </li>
        <li>
          <Link to="/analytics1"> Analytics1 </Link>
        </li>
        <li>
          <Link to="/admin"> Admin </Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
