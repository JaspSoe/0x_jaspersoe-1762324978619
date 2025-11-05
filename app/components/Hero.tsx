'use client';

interface HeroProps {
  onGetStarted: () => void;
  isAuthenticated: boolean;
  walletConnected: boolean;
}

export default function Hero({ onGetStarted, isAuthenticated, walletConnected }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 glass rounded-full text-sm font-medium border border-success border-opacity-30">
              🚀 AI-Powered • Instant Deployment • Solana Native
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Solana dApps with
            <br />
            <span className="gradient-text">Simple Commands</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Launch memecoin launchpads, NFT platforms, and DeFi apps in seconds. 
            No coding required. Just chat with our AI bot and deploy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-solana to-purple-600 hover:from-purple-600 hover:to-solana rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-solana/50 hover:scale-105"
            >
              Start Building Now
            </button>
            <button className="px-8 py-4 glass hover:bg-white hover:bg-opacity-10 rounded-xl font-semibold text-lg transition-all duration-200">
              View Examples
            </button>
          </div>

          {(!isAuthenticated || !walletConnected) && (
            <p className="mt-6 text-sm text-gray-500">
              {!isAuthenticated && !walletConnected && "Connect X and wallet to get started"}
              {isAuthenticated && !walletConnected && "Connect wallet to continue"}
              {!isAuthenticated && walletConnected && "Connect X account to continue"}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-solana bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-solana" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI Bot Commands</h3>
            <p className="text-gray-400">Natural language processing understands your dApp requirements instantly</p>
          </div>

          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-success bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Deployment</h3>
            <p className="text-gray-400">Your dApp goes live on Solana in seconds with shareable links</p>
          </div>

          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-twitter bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-twitter" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Social Integration</h3>
            <p className="text-gray-400">X authentication enables easy sharing and community building</p>
          </div>
        </div>
      </div>
    </section>
  );
}