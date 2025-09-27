import React from "react";

export function HeroSkeleton() {
  // Use the same wrapper structure as your actual Hero component
  return (
    <div className="min-h-screen w-full relative">
      {/* Violet Abyss Background - Keep it active so the skeleton blends */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)",
        }}
      />

      <section
        id="home-skeleton"
        className="h-screen pt-16 pb-20 flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Skeleton */}
            <div className="space-y-8 animate-pulse">
              {/* Headline Placeholder */}
              <div className="space-y-4">
                <div className="h-10 bg-gray-700 rounded w-full"></div>
                <div className="h-10 bg-gray-700 rounded w-11/12"></div>
                <div className="h-10 bg-gray-700 rounded w-10/12"></div>
              </div>

              {/* Paragraph Placeholder */}
              <div className="space-y-2 pt-4">
                <div className="h-5 bg-gray-800 rounded w-full"></div>
                <div className="h-5 bg-gray-800 rounded w-11/12"></div>
                <div className="h-5 bg-gray-800 rounded w-10/12"></div>
              </div>

              {/* CTA Buttons Placeholder */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="h-12 bg-purple-900 rounded-full w-40"></div>
                <div className="h-12 bg-gray-800 rounded-full w-32"></div>
              </div>

              {/* Stats Placeholder */}
              <div className="grid grid-cols-3 gap-8 pt-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="h-6 bg-gray-700 rounded w-1/2 mx-auto"></div>
                    <div className="h-4 bg-gray-800 rounded w-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image Skeleton */}
            <div className="relative animate-pulse">
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 p-4 md:p-8 aspect-video">
                {/* Main Image Placeholder */}
                <div className="w-full h-full bg-gray-700 rounded-xl"></div>

                {/* Floating Element 1 Placeholder */}
                <div className="absolute top-4 right-4 bg-gray-800/80 rounded-lg p-3 w-20 h-16">
                  <div className="h-4 bg-gray-600 rounded mb-1"></div>
                  <div className="h-6 bg-purple-800 rounded"></div>
                </div>

                {/* Floating Element 2 Placeholder */}
                <div className="absolute bottom-4 left-4 bg-gray-800/80 rounded-lg p-3 w-20 h-16">
                  <div className="h-4 bg-gray-600 rounded mb-1"></div>
                  <div className="h-6 bg-purple-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSkeleton;