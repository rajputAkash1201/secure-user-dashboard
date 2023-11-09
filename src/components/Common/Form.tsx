// src/components/Common/Form.tsx
import React from 'react';

interface FormProps {
  onSubmit: (event: React.FormEvent) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded shadow">
      {children}
    </form>
  );
};

export default Form;
