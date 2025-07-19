import React from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

const SearchInput = ({ value, onChange, placeholder = "Search..." }: Props) => {
  return (
    <div className="relative w-full md:w-72">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-3.5-3.5" />
        </svg>
      </span>
    </div>
  );
};

export default SearchInput;
