import React from "react";

export default function Input({type,name,placeholder,requireds}:any) {
  return (
    <input
      type={type}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required
    />
  );
}
