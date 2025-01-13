import { SignupForm } from "@/components/signup/signup-form"
import { useNavigate } from "react-router-dom"
import { useState , useContext} from "react"
import axiosInstance from "../../config/axios"
import { UserContext } from "../../context/UserContext"

export default function LoginPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/register', {
        email: email.target.value,
        password: password.target.value,
        username: username.target.value
      });

      console.log(response.data);

      localStorage.setItem('token', response.data.token);
      setUser(response.data);
      setError(null);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignupForm 
          email={email}
          password={password}
          username={username}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onUsernameChange={setUsername}
          onSubmit={handleSubmit}
        />
        {error && <div className="text-red-500 mt-2">{JSON.stringify(error)}</div>}
      </div>
    </div>
  )
}


