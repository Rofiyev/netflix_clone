import Image from "next/image";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import background from "@/assets/background.jpg";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute inset-0">
        <Image src={background.src} alt="image" fill className="opacity-50" />
      </div>
      <div className="relative z-10 w-[600px] bg-black/60 rounded-md h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4">
        <div className="flex items-center flex-col justify-center h-full">
          <h1 className="text-4xl font-bold">Welcome to Netflix App</h1>
          <p className="text-neutral-200 text-sm">
            Unlimited movies, TV shows, and more
          </p>

          <Button
            className="mt-4 flex items-center w-full h-[56px] rounded bg-red-600 !text-white hover:bg-red-500 transition"
            onClick={() => signIn("github")}
          >
            <AiFillGithub className="w-7 h-7 mr-2" />
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
