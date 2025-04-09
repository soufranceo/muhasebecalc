import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white/40 backdrop-blur-sm mt-auto">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="text-center sm:text-left">
          <p className="text-sm text-blue-600/80 flex items-center justify-center sm:justify-start gap-1.5">
            © 2030 • <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> Mehmet Akgül
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600/80">
            Yüzde Hesaplayıcı
          </p>
        </div>
      </div>
    </footer>
  );
}