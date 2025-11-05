'use client';

import { useState, useEffect, useRef } from 'react';
import BotInterface from './components/BotInterface';
import Header from './components/Header';
import DappGallery from './components/DappGallery';
import Hero from './components/Hero';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showBot, setShowBot] = useState(false);

  return (
    <main className="min-h-screen bg-dark">
      <Header 
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        walletConnected={walletConnected}
        setWalletConnected={setWalletConnected}
      />
      
      {!showBot ? (
        <>
          <Hero 
            onGetStarted={() => setShowBot(true)}
            isAuthenticated={isAuthenticated}
            walletConnected={walletConnected}
          />
          <DappGallery onCreateNew={() => setShowBot(true)} />
        </>
      ) : (
        <BotInterface 
          isAuthenticated={isAuthenticated}
          walletConnected={walletConnected}
        />
      )}

      <footer className="border-t border-white border-opacity-10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SolanaBot. Powered by Solana Blockchain.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}