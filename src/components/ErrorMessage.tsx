import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div
      id="error-block"
      className="flex flex-col items-center justify-center rounded-2xl border border-red-500/10 bg-red-500/5 p-8 text-center backdrop-blur-xs max-w-xl mx-auto my-12"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400">
        <AlertCircle className="h-6 w-6" />
      </div>
      
      <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-slate-100">
        Something went wrong
      </h3>
      
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-md">
        {message || 'We had trouble building or communicating with the REST Countries API. Please check your network connection and try again.'}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 shadow-sm"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
      )}
    </div>
  );
};
