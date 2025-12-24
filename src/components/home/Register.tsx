import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Cookies from "js-cookie";
import { isAuthenticated } from "../../../src/helper";
export default function Register() {
  const [showLogin, setShowLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState<string[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const auth = isAuthenticated();
    if (auth) {
      navigate("/");
    } else {
      console.log("Not authenticated");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginErrors([]);
    const errors: string[] = [];

    if (!loginEmail.trim()) errors.push("Email is required");
    if (!loginPassword.trim()) errors.push("Password is required");
    if (errors.length > 0) {
      setLoginErrors(errors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: loginEmail,
        password: loginPassword,
      });

      const { token, user } = response.data;
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("user", JSON.stringify(user), { expires: 7 });

      setLoginEmail("");
      setLoginPassword("");
      navigate("/"); // redirect to homepage
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoginErrors([error.response?.data?.message || "Login failed"]);
      } else {
        setLoginErrors(["Something went wrong"]);
      }
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex p-8 gap-12">
      {/* Left column: 2/3 */}
      <div className="w-2/3 flex flex-col gap-6">
        <div>
          <Link
            to="/"
            className="text-[40px] font-bold bg-gray-200 border-2 border-black p-2 inline-block text-black"
          >
            LUXE
          </Link>
        </div>
        <div className="text-black text-5xl font-bold">
          Your online store is just a click away
        </div>
        <div className="text-black text-xl">
          Sell on your website, social media, marketplaces, all from a single
          dashboard.
        
        </div>
      </div>

      {/* Right column: 1/3 toggle */}
      <div className="w-full md:w-1/3">
        {!showLogin ? (
          // Registration Form
          <div className="border-2 border-gray-300 shadow-[6px_8px_15px_14px_rgba(0,0,0,0.4)] rounded-lg p-8 bg-white flex flex-col gap-6">
            <h2 className="text-4xl text-center font-bold text-gray-800">
              New Account!
            </h2>

            <input
              type="text"
              placeholder="First Name"
              className="flex-1 border  text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1  text-black border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              autoComplete="off"
              name="loginEmail"
              className="border  text-black border-gray-300 rounded  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              autoComplete="new-password"
              name="loginPassword"
              className="border  text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button variant="secondary" className="text-2xl p-5">
              Next: Set up your Store
            </Button>

            <p className="text-gray-600 text-2xl">
              If you already have an account,{" "}
              <span
                className="text-blue-500 font-medium cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </span>
            </p>
          </div>
        ) : (
          // Login Form
          <form
            className="border-2 border-gray-300 shadow-[6px_8px_15px_14px_rgba(0,0,0,0.4)] rounded-lg p-8 bg-white flex flex-col gap-6"
            /*             onSubmit={handleLogin}
             */
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Sign In to Your Account
            </h2>

            {loginErrors.length > 0 && (
              <div className="text-red-500 flex flex-col gap-1">
                {loginErrors.map((err, idx) => (
                  <span key={idx}>{err}</span>
                ))}
              </div>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="border  text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="border  text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Login Button */}
            <button
              /*               type="submit"
               */ className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition"
            >
              Sign In
            </button>

            {/* Footer */}
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <span
                className="text-blue-500 font-medium cursor-pointer"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
