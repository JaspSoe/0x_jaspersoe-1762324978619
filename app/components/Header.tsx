'use client';

import { useState } from 'react';

interface HeaderProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  walletConnected: boolean;
  setWalletConnected: (value: boolean) => void;
}

export default function Header({
  isAuthenticated,
  setIsAuthenticated,
  walletConnected,
  setWalletConnected,
}: HeaderProps) {
  const [showWalletMenu, setShowWalletMenu] = useState(false);

  const handleTwitterLogin = () => {
    setIsAuthenticated(true);
    setTimeout(() => {
      alert('Twitter OAuth login simulated! In production, this would redirect to Twitter OAuth.');
    }, 100);
  };

  const handleWalletConnect = () => {
    setWalletConnected(true);
    setShowWalletMenu(false);
    setTimeout(() => {
      alert('Wallet connected! Address: 5xY7...k3Pm (simulated)');
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-solana to-success rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">SolanaBot</h1>
              <p className="text-xs text-gray-400">AI dApp Generator</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <button
                onClick={handleTwitterLogin}
                className="flex items-center gap-2 px-4 py-2 bg-twitter hover:bg-blue-600 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Connect X
              </button>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg">
                <div className="w-6 h-6 bg-twitter rounded-full flex items-center justify-center text-xs font-bold">
                  U
                </div>
                <span className="text-sm font-medium">@user</span>
              </div>
            )}

            {!walletConnected ? (
              <div className="relative">
                <button
                  onClick={() => setShowWalletMenu(!showWalletMenu)}
                  className="px-4 py-2 bg-gradient-to-r from-solana to-purple-600 hover:from-purple-600 hover:to-solana rounded-lg transition-all duration-200 font-medium text-sm"
                >
                  Connect Wallet
                </button>
                
                {showWalletMenu && (
                  <div className="absolute right-0 mt-2 w-56 glass rounded-xl p-2 border border-white border-opacity-10">
                    <button
                      onClick={handleWalletConnect}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                      <div className="text-left">
                        <div className="font-medium text-sm">Phantom</div>
                        <div className="text-xs text-gray-400">Popular</div>
                      </div>
                    </button>
                    <button
                      onClick={handleWalletConnect}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                      <div className="text-left">
                        <div className="font-medium text-sm">Solflare</div>
                        <div className="text-xs text-gray-400">Secure</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 py-2 glass rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-mono">5xY7...k3Pm</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}