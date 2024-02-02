import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={
            "https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/10557/netflixa.jpg?w=1280&ar=default&fit=crop&crop=faces,edges&auto=format"
          }
          alt="image"
          fill
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 w-[600px] bg-black/60 rounded-md h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4">
        <div className="flex items-center flex-col justify-center h-full">
          <h1 className="text-4xl font-bold">Welcome to Netflix App</h1>
          <p className="text-neutral-200 text-sm">
            Unlimited movies, TV shows, and more
          </p>

          <Button className="mt-4 flex items-center w-full h-[56px] rounded bg-red-600 !text-white hover:bg-red-500 transition">
            <AiFillGithub className="w-7 h-7 mr-2" />
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
