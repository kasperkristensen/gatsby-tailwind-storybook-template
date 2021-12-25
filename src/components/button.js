import React from "react"
import Bell from "./icons/bell"

const Button = ({ text }) => {
  return (
    <button className="bg-indigo-700 rounded-lg font-semibold text-white px-4 py-2 flex items-center">
      <Bell />
      {text}
    </button>
  )
}

export default Button
