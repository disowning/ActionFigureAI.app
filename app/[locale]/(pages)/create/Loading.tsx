'use client';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700">Generating your action figure...</p>
      <p className="mt-2 text-sm text-gray-500">This may take a few moments.</p>
      
      <div className="mt-6 max-w-md text-center">
        <p className="text-xs text-gray-500">Our AI is carefully crafting your personalized action figure, combining your photo with the selected style to create something unique.</p>
      </div>
    </div>
  );
} 