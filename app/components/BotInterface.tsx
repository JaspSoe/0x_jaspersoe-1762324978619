'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  actions?: Action[];
}

interface Action {
  label: string;
  type: 'deploy' | 'share' | 'preview';
  data?: any;
}

interface BotInterfaceProps {
  isAuthenticated: boolean;
  walletConnected: boolean;
}

export default function BotInterface({ isAuthenticated, walletConnected }: BotInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m SolanaBot 🤖. I can help you create and deploy Solana dApps instantly. What would you like to build today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [deployedDapps, setDeployedDapps] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickCommands = [
    { icon: '🪙', label: 'Memecoin Launchpad', command: 'create memecoin launchpad' },
    { icon: '🖼️', label: 'NFT Marketplace', command: 'create nft marketplace' },
    { icon: '💰', label: 'Token Swap', command: 'create token swap dapp' },
    { icon: '🎮', label: 'Gaming dApp', command: 'create web3 game' },
  ];

  const handleQuickCommand = (command: string) => {
    handleSend(command);
  };

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('memecoin') || lowerMessage.includes('launchpad')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: '🚀 Awesome! I\'ll create a memecoin launchpad for you. This dApp will include:\n\n• Token creation interface\n• Liquidity pool setup\n• Fair launch mechanics\n• Trading interface\n• Social sharing features\n\nGenerating your dApp now...',
        timestamp: new Date(),
        actions: [
          { label: '🚀 Deploy to Solana', type: 'deploy', data: { type: 'memecoin' } },
          { label: '👁️ Preview', type: 'preview', data: { type: 'memecoin' } },
        ],
      };
    }
    
    if (lowerMessage.includes('nft') || lowerMessage.includes('marketplace')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: '🖼️ Perfect! Creating an NFT marketplace with:\n\n• Minting interface\n• Collection gallery\n• Buy/Sell functionality\n• Royalty management\n• Metadata storage\n\nYour NFT marketplace is ready!',
        timestamp: new Date(),
        actions: [
          { label: '🚀 Deploy to Solana', type: 'deploy', data: { type: 'nft' } },
          { label: '👁️ Preview', type: 'preview', data: { type: 'nft' } },
        ],
      };
    }
    
    if (lowerMessage.includes('swap') || lowerMessage.includes('dex')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: '💱 Great choice! Building a token swap dApp with:\n\n• Token swapping engine\n• Liquidity pools\n• Real-time pricing\n• Slippage protection\n• Transaction history\n\nSwap dApp is ready to deploy!',
        timestamp: new Date(),
        actions: [
          { label: '🚀 Deploy to Solana', type: 'deploy', data: { type: 'swap' } },
          { label: '👁️ Preview', type: 'preview', data: { type: 'swap' } },
        ],
      };
    }

    if (lowerMessage.includes('game') || lowerMessage.includes('gaming')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: '🎮 Exciting! Creating a Web3 gaming dApp with:\n\n• On-chain game logic\n• NFT-based assets\n• Reward system\n• Leaderboard\n• Play-to-earn mechanics\n\nYour game dApp is ready!',
        timestamp: new Date(),
        actions: [
          { label: '🚀 Deploy to Solana', type: 'deploy', data: { type: 'game' } },
          { label: '👁️ Preview', type: 'preview', data: { type: 'game' } },
        ],
      };
    }
    
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: 'I can help you create:\n\n🪙 Memecoin Launchpads\n🖼️ NFT Marketplaces\n💱 Token Swap dApps\n🎮 Gaming dApps\n💰 DeFi Platforms\n\nJust tell me what you\'d like to build, or use the quick commands below!',
      timestamp: new Date(),
    };
  };

  const handleSend = async (customMessage?: string) => {
    const messageText = customMessage || input.trim();
    if (!messageText) return;

    if (!isAuthenticated || !walletConnected) {
      const warningMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: '⚠️ Please connect your X account and Solana wallet to start building dApps.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, warningMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleAction = (action: Action) => {
    if (action.type === 'deploy') {
      const dappId = `dapp-${Date.now()}`;
      const dappUrl = `https://solana.bot/${dappId}`;
      
      const newDapp = {
        id: dappId,
        type: action.data.type,
        url: dappUrl,
        timestamp: new Date(),
      };
      
      setDeployedDapps(prev => [...prev, newDapp]);
      
      const deployMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: `🎉 Your dApp has been deployed successfully!\n\n📱 Live URL: ${dappUrl}\n\nYou can now share this link with your community!`,
        timestamp: new Date(),
        actions: [
          { label: '🔗 Copy Link', type: 'share', data: { url: dappUrl } },
          { label: '𝕏 Share on X', type: 'share', data: { url: dappUrl, platform: 'x' } },
        ],
      };
      
      setMessages(prev => [...prev, deployMessage]);
    } else if (action.type === 'share') {
      if (action.data.platform === 'x') {
        const tweetText = `Just deployed my dApp on Solana using @SolanaBot! 🚀\n\nCheck it out: ${action.data.url}`;
        alert(`Opening X to share:\n\n${tweetText}\n\n(In production, this would open Twitter/X)`);
      } else {
        navigator.clipboard.writeText(action.data.url);
        alert('Link copied to clipboard!');
      }
    } else if (action.type === 'preview') {
      alert(`Preview functionality would show a live demo of your ${action.data.type} dApp here!`);
    }
  };

  return (
    <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl overflow-hidden border border-white border-opacity-10">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-solana to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h2 className="font-bold">SolanaBot AI</h2>
                <p className="text-xs opacity-90 flex items-center gap-1">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                  Online & Ready
                </p>
              </div>
            </div>
            <div className="text-sm opacity-90">
              {deployedDapps.length} dApp{deployedDapps.length !== 1 ? 's' : ''} deployed
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 bg-dark-light">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                <div className={`max-w-[80%] ${message.type === 'user' ? 'user-message' : 'bot-message'}`}>
                  <p className="whitespace-pre-line">{message.content}</p>
                  {message.actions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.actions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAction(action)}
                          className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg text-sm font-medium transition-all"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="bot-message max-w-[80%]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Commands */}
          <div className="p-4 bg-dark-lighter border-t border-white border-opacity-10">
            <p className="text-xs text-gray-400 mb-2">Quick Commands:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {quickCommands.map((cmd, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickCommand(cmd.command)}
                  className="px-3 py-2 glass hover:bg-white hover:bg-opacity-10 rounded-lg text-sm transition-all flex items-center gap-2"
                  disabled={!isAuthenticated || !walletConnected}
                >
                  <span>{cmd.icon}</span>
                  <span className="truncate">{cmd.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-dark border-t border-white border-opacity-10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={
                  !isAuthenticated || !walletConnected
                    ? 'Connect X and wallet to start...'
                    : 'Type your command or describe your dApp...'
                }
                disabled={!isAuthenticated || !walletConnected}
                className="flex-1 px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-solana disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || !isAuthenticated || !walletConnected}
                className="px-6 py-3 bg-gradient-to-r from-solana to-purple-600 hover:from-purple-600 hover:to-solana rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Deployed dApps */}
        {deployedDapps.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Your Deployed dApps</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {deployedDapps.map((dapp) => (
                <div key={dapp.id} className="glass rounded-xl p-4 border border-success border-opacity-30">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">
                          {dapp.type === 'memecoin' && '🪙'}
                          {dapp.type === 'nft' && '🖼️'}
                          {dapp.type === 'swap' && '💱'}
                          {dapp.type === 'game' && '🎮'}
                        </span>
                        <h4 className="font-bold capitalize">{dapp.type} dApp</h4>
                      </div>
                      <p className="text-xs text-gray-400">
                        {dapp.timestamp.toLocaleString()}
                      </p>
                    </div>
                    <div className="px-2 py-1 bg-success bg-opacity-20 text-success rounded-full text-xs font-medium">
                      Live
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-dark rounded-lg">
                    <p className="text-xs font-mono text-gray-300 truncate">{dapp.url}</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 px-3 py-2 glass hover:bg-white hover:bg-opacity-10 rounded-lg text-sm transition-all">
                      Open
                    </button>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(dapp.url);
                        alert('Link copied!');
                      }}
                      className="flex-1 px-3 py-2 glass hover:bg-white hover:bg-opacity-10 rounded-lg text-sm transition-all"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}