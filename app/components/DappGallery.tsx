'use client';

interface DappGalleryProps {
  onCreateNew: () => void;
}

export default function DappGallery({ onCreateNew }: DappGalleryProps) {
  const exampleDapps = [
    {
      id: 1,
      name: 'MoonShot Launchpad',
      type: 'Memecoin',
      icon: '🪙',
      description: 'Fair launch platform for community tokens',
      stats: { users: '2.4K', volume: '$1.2M' },
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      name: 'SolArt NFT',
      type: 'NFT Marketplace',
      icon: '🖼️',
      description: 'Curated digital art marketplace',
      stats: { users: '8.1K', volume: '$3.8M' },
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: 'QuickSwap Pro',
      type: 'DEX',
      icon: '💱',
      description: 'Lightning-fast token swaps',
      stats: { users: '15K', volume: '$12M' },
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 4,
      name: 'CryptoQuest',
      type: 'Gaming',
      icon: '🎮',
      description: 'Play-to-earn adventure game',
      stats: { users: '5.2K', volume: '$890K' },
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      name: 'StakeHub',
      type: 'DeFi',
      icon: '💰',
      description: 'Stake and earn rewards',
      stats: { users: '11K', volume: '$7.5M' },
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      name: 'SolFi Lending',
      type: 'DeFi',
      icon: '🏦',
      description: 'Decentralized lending protocol',
      stats: { users: '6.8K', volume: '$4.2M' },
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured dApps</h2>
            <p className="text-gray-400">Built with SolanaBot by our community</p>
          </div>
          <button
            onClick={onCreateNew}
            className="px-6 py-3 bg-gradient-to-r from-solana to-purple-600 hover:from-purple-600 hover:to-solana rounded-xl font-medium transition-all"
          >
            Create Your Own
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleDapps.map((dapp) => (
            <div
              key={dapp.id}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer border border-white border-opacity-10"
            >
              <div className={`h-32 bg-gradient-to-br ${dapp.gradient} flex items-center justify-center`}>
                <span className="text-6xl">{dapp.icon}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{dapp.name}</h3>
                    <span className="text-xs px-2 py-1 glass rounded-full">{dapp.type}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{dapp.description}</p>
                
                <div className="flex justify-between text-sm pt-4 border-t border-white border-opacity-10">
                  <div>
                    <p className="text-gray-400 text-xs">Users</p>
                    <p className="font-bold text-success">{dapp.stats.users}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Volume</p>
                    <p className="font-bold text-solana">{dapp.stats.volume}</p>
                  </div>
                  <button className="px-4 py-2 glass hover:bg-white hover:bg-opacity-10 rounded-lg text-xs font-medium transition-all">
                    View Live →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 text-center border border-solana border-opacity-30">
          <h3 className="text-2xl font-bold mb-3">Ready to Build Your dApp?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of creators who have launched successful dApps on Solana. 
            No coding skills required - just chat with our AI bot and watch your vision come to life.
          </p>
          <button
            onClick={onCreateNew}
            className="px-8 py-4 bg-gradient-to-r from-solana to-purple-600 hover:from-purple-600 hover:to-solana rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-solana/50"
          >
            Start Building for Free
          </button>
        </div>
      </div>
    </section>
  );
}