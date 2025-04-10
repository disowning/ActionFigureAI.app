'use client';

import { useState } from 'react';
import Image from 'next/image';
import ResultPreview from './ResultPreview';
import Loading from './Loading';

interface FormUploadProps {
  dictionary: any;
  figureStyles: {
    id: string;
    name: string;
    image: string;
  }[];
}

export default function FormUpload({ dictionary, figureStyles }: FormUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setError(null);

    if (!file) return;

    // Check file type
    const fileType = file.type;
    if (!['image/jpeg', 'image/png'].includes(fileType)) {
      setError('Please upload a JPG or PNG image');
      return;
    }

    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setError(null);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      
      // Check file type
      const fileType = file.type;
      if (!['image/jpeg', 'image/png'].includes(fileType)) {
        setError('Please upload a JPG or PNG image');
        return;
      }

      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }

      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle style selection
  const handleStyleSelection = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  // Generate a sample action figure image URL based on the style
  const getSampleActionFigureImage = (styleId: string) => {
    // In a real app, this would call your AI service and generate a unique image
    // For the demo, we're just returning a placeholder image based on the style
    const styleColors: Record<string, string> = {
      'superhero': 'ff0000', // Red for superhero
      'scifi': '00ffff',     // Cyan for sci-fi
      'fantasy': '9933ff',   // Purple for fantasy
      'sports': '33cc33',    // Green for sports
      'space': '000033',     // Dark blue for space
      'western': 'cc9966',   // Brown for western
    };
    
    const color = styleColors[styleId] || '666666';
    
    // Using next.js image placeholder service - in a real app, replace with your actual image generation API
    return `https://placehold.co/600x600/${color}/ffffff?text=${encodeURIComponent(styleId.toUpperCase())}+FIGURE`;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!selectedFile) {
      setError('Please upload an image');
      return;
    }
    
    if (!selectedStyle) {
      setError('Please select a figure style');
      return;
    }
    
    setIsGenerating(true);
    
    try {
      // In a real app, this would be where you'd send the data to your API
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Get a sample action figure image based on the selected style
      const generatedImageUrl = getSampleActionFigureImage(selectedStyle);
      setGeneratedImage(generatedImageUrl);
    } catch (err) {
      setError('An error occurred while generating your action figure. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle regenerate button click
  const handleRegenerate = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate regeneration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate a different sample image (in a real app, this would call your AI service again)
      if (selectedStyle) {
        const generatedImageUrl = getSampleActionFigureImage(selectedStyle);
        setGeneratedImage(generatedImageUrl);
      }
    } catch (err) {
      setError('An error occurred while regenerating your action figure. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle reset button click
  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
    setSelectedStyle(null);
    setGeneratedImage(null);
    setError(null);
  };

  // If we have a generated image, show the result preview
  if (generatedImage) {
    return (
      <ResultPreview
        dictionary={dictionary}
        imageUrl={generatedImage}
        onRegenerate={handleRegenerate}
        onReset={handleReset}
      />
    );
  }

  // If we're generating, show the loading component
  if (isGenerating) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        {/* Step 1: Upload Photo */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
            {dictionary.features.upload.title}
          </h3>
          <p className="text-gray-600 mb-4">{dictionary.features.upload.description}</p>
          
          <div className="mt-4">
            <div 
              className={`border-2 border-dashed ${error ? 'border-red-300' : 'border-gray-300'} rounded-lg p-6 text-center ${!preview ? 'hover:border-primary' : ''}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {preview ? (
                <div className="relative w-full aspect-square max-w-xs mx-auto">
                  <Image 
                    src={preview} 
                    alt="Preview" 
                    className="rounded-md object-cover"
                    fill
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      setPreview(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 rounded-full p-1 text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 mb-2">Drag and drop your image here</p>
                  <p className="text-xs text-gray-400 mb-4">or</p>
                  <label className="btn-primary text-sm py-2 px-4 cursor-pointer">
                    Select File
                    <input
                      type="file"
                      accept="image/jpeg, image/png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-2">JPG, PNG. Max size: 5MB</p>
                </div>
              )}
            </div>
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </div>
        </div>
        
        {/* Step 2: Choose Style */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
            {dictionary.features.customize.title}
          </h3>
          <p className="text-gray-600 mb-4">{dictionary.features.customize.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {figureStyles.map((style) => (
              <div 
                key={style.id} 
                className={`border ${selectedStyle === style.id ? 'border-primary bg-primary/5' : 'border-gray-200'} rounded-lg p-3 cursor-pointer hover:border-primary transition-colors`}
                onClick={() => handleStyleSelection(style.id)}
              >
                <div className="aspect-square bg-gray-100 rounded-md mb-2 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700">{style.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Step 3: Generate */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
            {dictionary.features.generate.title}
          </h3>
          <p className="text-gray-600 mb-4">{dictionary.features.generate.description}</p>
          
          <div className="mt-6">
            <button 
              type="submit"
              className="btn-secondary py-3 px-8 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isGenerating || !selectedFile || !selectedStyle}
            >
              {isGenerating ? 'Generating...' : dictionary.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
} 