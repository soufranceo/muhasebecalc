import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto py-4 bg-white/50">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm text-blue-600/80 flex items-center justify-center gap-1.5">
          © 2024 • <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> Mehmet Akgül
        </p>
      </div>
    </footer>
  );
}