// src/components/PleaseSignIn.jsx
import { SignInButton } from "@clerk/clerk-react";
import { Lock } from "lucide-react";

export default function PleaseSignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <Lock className="w-12 h-12 text-gray-500 dark:text-gray-300 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Please Sign In</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
        You must be signed in to access this page. Click the button below to
        continue.
      </p>
      <SignInButton mode="modal">
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Sign In
        </button>
      </SignInButton>
    </div>
  );
}