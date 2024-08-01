import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      type="submit" 
      onClick={onClick}
      className="block w-full p-3 text-center text-white bg-indigo-500 rounded hover:bg-indigo-600"
    >
      {text}
    </button>
  );
};
