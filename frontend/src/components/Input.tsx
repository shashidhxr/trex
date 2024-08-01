import React from 'react';

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const Input: React.FC<InputProps> = ({ id, type, value, onChange, label }) => {
  return (
    <div className="space-y-1 text-sm">
      <label htmlFor={id} className="block text-gray-600">{label}</label>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-2 bg-gray-200 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
