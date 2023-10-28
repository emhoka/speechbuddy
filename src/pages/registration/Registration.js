import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import FormInput from "../../components/widget/FormInput";
import Button from "../../components/widget/Button";
import authImage from "../../assets/images/woman-doing-speech-therapy-with-little-blonde-boy.png";
// import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult} from "firebase/auth";
// import {initializeApp} from "firebase/app";
const Registration = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordsMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
  };

  const checkPasswordsMatch = (password, confirmPassword) => {
    if (password === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   // e.preventDefault();
  //   const dataToSend = {
  //     first_name,
  //     last_name,
  //     email,
  //     password,
  //   };

  //   try {
  //     const response = await fetch("https://veibrbsp9b.execute-api.us-east-1.amazonaws.com/dev/auth/register/anonymous", {
  //       method: "POST",
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         "Access-Control-Allow-Origin": "https://veibrbsp9b.execute-api.us-east-1.amazonaws.com",
  //         "Access-Control-Allow-Methods": "OPTIONS,POST",
  //       },
  //       body: JSON.stringify(dataToSend),
  //     });

  //     if (response.ok) {
  //       navigate("/role");
  //       console.log("Registration successful");
  //       console.log(response.status)
  //       console.log(response.statusText)
  //     } else {
  //       navigate("/checkemail");
  //       console.error("Registration failed");
  //       console.log('error',response.data)
  //       console.log(response.status)
  //       console.log(response.statusText)
  //     }
  //   } catch (error) {
  //     console.error("An error occurred", error);
  //   }
  // };
  // const googleAuthentication = ()=>{
  //   console.log("googleAuthentication");
  // }

  // const handleLogin = async () => {
  //   try {
  //         //  console.error(error);
  //     const response = await fetch("http://localhost:3000/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  
  //     if (response.status === 200) {
  //       navigate("/dashboard");
  //     } else {
  //       // setError("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // setError("An error occurred during login.");
  //   }
  // };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDh6HImSARhXBWTMYmHKkUBLb_V3j2hE4w",
  //   authDomain: "speechbuddy-ai.firebaseapp.com",
  //   projectId: "speechbuddy-ai",
  //   storageBucket: "speechbuddy-ai.appspot.com",
  //   messagingSenderId: "1098208952316",
  //   appId: "1:1098208952316:web:2bd341232595c58702fc79"
  // };

  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // const loginWithGoogle = async () => {
  //   console.log("loginWithGoogle");
  //   // is_loading_google_login.value = true

  //   const provider = new GoogleAuthProvider()

  //   if (isMobile) {
  //     console.log("using redirect")
  //     signInWithRedirect(auth, provider)
  //         .catch(error => {
  //           console.error(error)
  //           // toast.add({severity: 'warn', summary: 'Sign In', detail: "signing failed", life: 15000})
  //         });
  //   } else {
  //     console.log("using popup")
  //     signInWithPopup(auth, provider)
  //         .then(async (result) => {
  //           console.log(result);
  //           await loginUser(result)
  //         }).catch((error) => {
  //       console.log(error)
  //       // toast.add({severity: 'warn', summary: 'Google Sign In', detail: "signing with google failed", life: 15000})
  //     })
  //         .finally(() => {
  //           // is_loading_google_login.value = false
  //         })
  //   }
  // }

  // const loginUser = async (result) => {
  //   const {uid, email,displayName} = result.user

  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email,
  //       firebase_uid: uid,displayName
  //     })
  //   };
  //   const {message, success} = await fetch("http://localhost:3000/dev/auth/register/google", options)
  //       .then(result => result.json())
  //       .catch(error => console.error(error));

  //   // If success show success message
  //   if (success) {
  //     navigate("/dashboard");
  //     // window.location.href = '/dashboard';
  //   } else {
  //     console.error(message);
  //     // toast.add({severity: 'warn', summary: 'Registration', detail: message, life: 15000});
  //   }
  // };

  return (
    <AuthLayout heading="Register with" authImage={authImage}  >
      {/* <form onSubmit={handleSubmit}> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FormInput
            title="First name"
            type="text"
            value={first_name}
            className="w-full"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormInput
            title="Password"
            type="password"
            value={password}
            className="w-full"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
          <FormInput
            title="Last name"
            type="text"
            value={last_name}
            className="w-full"
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormInput
            title="Confirm Password"
            type="password"
            InvalidText="Password must match"
            className="w-full"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            invalid={!passwordsMatch}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-7">
          <FormInput
            title="Email"
            type="email"
            value={email}
            className="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          buttonText="Sign up"
          className="mt-10 text-white"
          type="submit"
          disabled={!passwordsMatch}
        />
      {/* </form> */}
      <p className="mt-4 text-md text-gray-900 text-start font-medium">
        Already have an account?
        <Link to="/" className="text-green ml-2">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Registration;