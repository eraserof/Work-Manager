import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CurrentUserContextType {
  token: string | null,
  user: string | null,
  loginAction: (data: {}) => void,
  logOut: () => void
}

const AuthContext = createContext<CurrentUserContextType | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  console.log("AuthProvider Called.")
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = async (data: any) => {
    console.log("Login Called.")

    setUser("steve");
    setToken("asdf");
    localStorage.setItem("site", "asdf");
    navigate("/dashboard");

    // try {
    //   const response = await fetch("your-api-endpoint/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const res = await response.json();
    //   if (res.data) {
    //     setUser(res.data.user);
    //     setToken(res.token);
    //     localStorage.setItem("site", res.token);
    //     navigate("/dashboard");
    //     return;
    //   }
    //   throw new Error(res.message);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  const logOut = () => {
    console.log("Logout Called.")
    setUser("");
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

}

export const useAuth = () => {
  console.log("useAuth Called.")
  return useContext(AuthContext);
};