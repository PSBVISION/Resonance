"use client";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";


export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.addition);
  return (
    <>
    <Authenticated>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton/>
      <Button onClick={() => addUser()}>Add</Button>
      <pre className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
    </Authenticated>
    <Unauthenticated>
      Must be signed in
    </Unauthenticated>
    <SignInButton>Sign In!</SignInButton>
    </>
  );
}
