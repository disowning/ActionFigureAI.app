'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResultPreviewProps {
  dictionary: any;
  imageUrl: string;
  onRegenerate: () => void;
  onReset: () => void;
}

export default function ResultPreview({
  dictionary,
  imageUrl,
  onRegenerate,
  onReset,
}: ResultPreviewProps) {
  const [copied, setCopied] = useState(false);
  
  // Handle share click
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My AI-Generated Action Figure',
          text: 'Check out my personalized action figure created with ActionFigureAI!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing: ', err);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.log('Error copying to clipboard: ', err);
      }
    }
  };

  return (
    <div className="p-6 md:p-8 bg-white shadow-xl rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Your Action Figure is Ready!
        </h2>
        <p className="text-gray-600">
          Here's your personalized AI-generated action figure. You can download it, share it, or create a new one.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8 md:items-start">
        {/* Image Preview */}
        <div className="mb-6 md:mb-0 flex-1">
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-md">
            <Image
              src={imageUrl}
              alt="Generated action figure"
              fill
              className="object-contain"
              unoptimized={imageUrl.startsWith('http')}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Like Your Result?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => window.open(imageUrl, '_blank')}
                  className="btn-primary py-2.5 px-4 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </button>
                <button
                  type="button"
                  onClick={handleShareClick}
                  className="btn-secondary py-2.5 px-4 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  {copied ? 'Link Copied!' : 'Share'}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Want to Try Again?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={onRegenerate}
                  className="bg-gray-100 text-gray-700 font-medium py-2.5 px-4 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Regenerate
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  className="bg-gray-100 text-gray-700 font-medium py-2.5 px-4 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Start Over
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Want a Physical Action Figure?</h3>
              <p className="text-gray-600 mb-4">We can 3D print your action figure and ship it to you!</p>
              <button
                type="button"
                className="bg-primary text-white font-medium py-2.5 px-4 rounded-md hover:bg-primary-dark transition-colors w-full"
              >
                Order Physical Figure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 