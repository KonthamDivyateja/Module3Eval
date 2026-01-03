import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import AddRestaurant from "./pages/AddRestaurant";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import {AuthProvider} from "/context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/dashboard" element={
                    <ProtectedRoute role="Admin">
                        <AdminDashboard />
                    </ProtectedRoute>
                }
                />
              <Route path="/customers/dashboard" element={
                <ProtectedRoute role="customer">
                    <CustomerDashboard />
                </ProtectedRoute>
              }
              />
              <Route path="/admin/add" element={<ProtectedRoute role="admin">
                <AddRestaurant />
              </ProtectedRoute>}
              />
              <Route path="/admin/update/:id" element={
                <ProtectedRoute role="admin">
                    <UpdateRestaurant/>
                </ProtectedRoute>
              }
              />
            </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}