import React from "react";
import Input from "./input";
import Label from "./label";

export default function Login() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label labelTitle={"Email"} htmlFor={"email"} />
                <Input
                  type={"email"}
                  name={"email"}
                  placeholder={"your username"}
                />
              </div>
              <div>
                <Label labelTitle={"Password"} htmlFor={"password"} />
                <Input
                  type={"password"}
                  name={"password"}
                  placeholder={"••••••••"}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
