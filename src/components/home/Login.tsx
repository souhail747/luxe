import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import axios from "axios"
interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit  =async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([])
    const newErrors: string[] = [];
    
    if (!email.trim()) newErrors.push("Email is required");
    if (!password.trim()) newErrors.push("Password is required");
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const   response = await axios.post("http://localhost:4000/login",{
        email , password
        
      });
      const{token,user}=response.data
      Cookies.set("token",token,{expires:7}); 
      Cookies.set("user", JSON.stringify(user), { expires: 7 });
      
      setEmail("")
      setPassword("")

onClose();
    }catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors([error.response?.data?.message || "Login failed"]);
    } else {
      setErrors(["Something went wrong"]);
    }
  }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-black rounded-lg p-6 w-full max-w-md z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl text-center font-bold mb-4">Sign In</h2>

        {errors.length > 0 && (
          <ul className="mb-2 text-red-600 text-sm list-disc list-inside">
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
