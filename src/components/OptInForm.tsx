"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  email: string;
}

export function OptInForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Email submitted:", data.email);
    
    // Clear form and show success state
    reset();
    setIsSubmitted(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col sm:flex-row gap-2 justify-center mb-8 w-full max-w-md mx-auto"
    >
      <div className="flex-1">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
          placeholder="Enter your email"
          className={`w-full px-4 py-3 rounded-full rounded-l-full-sm border border-red-800 text-grey placeholder-grey focus:outline-none focus:ring-2 focus:ring-red-800 ${
            errors.email ? 'border-red-500' : ''
          }`}
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-6 py-3 rounded-full rounded-r-full-sm text-white font-semibold transition-all ${
          isSubmitted 
            ? 'bg-green-600 hover:bg-green-700' 
            : 'bg-red-500 hover:bg-red-800'
        } ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Joining...' : isSubmitted ? 'Success!' : 'Join Newsletter'}
      </button>
      
      {isSubmitted && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm text-center w-full">
          Thanks for subscribing!
        </div>
      )}
    </form>
  );
} 