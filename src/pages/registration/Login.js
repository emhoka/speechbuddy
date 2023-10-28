import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import FormInput from "../../components/widget/FormInput";
import Button from "../../components/widget/Button";
import authImage from "../../assets/images/woman-doing-speech-therapy-with-little-blonde-boy.png";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setError(null); 
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred during login.");
    }
  };
  
  return (
    <AuthLayout heading="Sign in with" authImage={authImage}>
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <FormInput
          title="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 w-full mt-10">
        <FormInput
          title="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button buttonText="Sign in" className="mt-10 text-white" onClick={handleLogin} />
      {error && <p className="mt-2 text-red-500 font-normal italic">{error}</p>}
      <p className="mt-4 text-md text-gray-900 text-start font-medium">
        Dont have and account?
        <Link to="/" className="text-green ml-2">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
