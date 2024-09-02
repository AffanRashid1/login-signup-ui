import React from "react";

import Image from "next/image";
import InputField from "../../../components/input-field/input-field";
import LoginIllustration from "../../../assets/images/login-illustration.png";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800 p-10 flex flex-col sm:flex-row items-center bg-gray-900 justify-evenly w-full">
      <div className="flex flex-col justify-center space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Sign in to</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-purple-500">BeyondOTC Employee Account</h2>
        <p className="text-white">
          If you don’t have an account registered
          <Link href="/signup" className="text-blue-400 hover:underline">
            {" "}
            Register here!
          </Link>
        </p>
        {/* <Image src={LoginIllustration} layout="responsive" style={{ maxWidth: 400 }} alt="" loading="lazy" /> */}
      </div>

      <div className="p-10 rounded-lg w-96 lg:w-1/4">
        <h2 className="text-2xl font-semibold text-white mb-5">Sign in</h2>
        <form>
          <InputField label="Enter Employee Username" placeholder="Enter Employee Username" />
          <InputField label="Password" placeholder="Password" type="password" />
          <p className="text-slate-200 text-right text-sm">Forgot Password ?</p>
          <button type="submit" className="mt-5 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
