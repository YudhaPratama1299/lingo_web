import React from "react";

export default function Label({ labelTitle, htmlFor }: any) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {labelTitle}
    </label>
  );
}
