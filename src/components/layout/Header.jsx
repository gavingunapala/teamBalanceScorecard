import React from 'react';
import { Activity } from 'lucide-react';

export default function Header({ formSubmitted }) {
  return (
    <header className="mb-10 max-w-4xl w-full mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 gap-3">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          Work-From-Home Balance Scorecard
        </h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">Individual Digital Health and Telepressure Assessment Tool</p>
      </div>
    </header>
  );
}
