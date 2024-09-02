import React from "react";

import Image from "next/image";
import InputField from "../../../components/input-field/input-field";
import LoginIllustration from "../../../assets/images/login-illustration.png";
import SignUpIllustration from "../../../assets/images/SignUp.svg";
import Link from "next/link";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800 p-10 flex flex-col md:flex-row items-center bg-gray-900 justify-evenly w-full">
      <div className="flex flex-col justify-center space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Sign up as</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-purple-500">BeyondOTC Employee Account</h2>
        <p className="text-white">
          If you already have an account You can
          <Link href="/login" className="text-blue-400 hover:underline">
            {" "}
            Login here!
          </Link>
        </p>
        <div className="hidden md:block self-end">
          <Image src={SignUpIllustration} layout="responsive" style={{ maxWidth: 300 }} alt="" loading="lazy" />
        </div>
      </div>

      <div className="p-10 rounded-lg w-96 lg:w-1/4">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-5">Sign in</h2>
        <form>
          <div className="flex gap-3">
            <InputField label="First Name" placeholder="First Name" />
            <InputField label="Last Name" placeholder="Last Name" />
          </div>
          <InputField label="Create User Name" placeholder="Create User Name" />
          <InputField label="Enter Email Address" placeholder="Enter Email Address" />
          <InputField label="Password" placeholder="Password" />
          <InputField label="Confirm Password" placeholder="Confirm Password" />
          <button type="submit" className="mt-5 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
