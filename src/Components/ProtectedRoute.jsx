// src/components/ProtectedRoute.jsx
import PleaseSignIn from "@/Components/PleaseSignIn";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>

      <SignedOut>
        <PleaseSignIn />
      </SignedOut>
    </>
  );
}