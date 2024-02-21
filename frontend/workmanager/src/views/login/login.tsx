import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/auth/auth_context";
import LoginForm from "../../forms/login_form"

export default function LoginPage() {
    const auth = useAuth();
    // We need to check if there is a user that is already logged in. If there is, navigate to the dashboard else show the login screen
    if(auth?.token !== '') 
        return <Navigate to="/dashboard" />
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <LoginForm />
            </div>
        </main>
    )
}