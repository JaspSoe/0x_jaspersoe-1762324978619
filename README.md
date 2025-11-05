# SolanaBot - AI-Powered dApp Generator

A next-generation Web3 platform that allows users to create and deploy Solana dApps using natural language commands through an AI bot interface.

## Features

- 🤖 **AI Bot Interface**: Natural language processing for dApp creation
- ⚡ **Instant Deployment**: Deploy to Solana blockchain in seconds
- 🔗 **X (Twitter) Integration**: OAuth authentication and social sharing
- 💼 **Wallet Connection**: Phantom, Solflare, and other Solana wallets
- 🪙 **Multiple dApp Types**: Memecoin launchpads, NFT marketplaces, DEX, gaming, and more
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- 🚀 **Shareable Links**: Each dApp gets a unique URL for easy sharing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Connect X Account**: Click "Connect X" to authenticate via Twitter/X
2. **Connect Wallet**: Select your Solana wallet (Phantom, Solflare, etc.)
3. **Start Building**: Use the bot interface to describe your dApp
4. **Deploy**: Click deploy when your dApp is ready
5. **Share**: Get a shareable link to your live dApp

### Quick Commands

- "create memecoin launchpad"
- "create nft marketplace"
- "create token swap dapp"
- "create web3 game"

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Solana
- **Authentication**: X (Twitter) OAuth (simulated)
- **Wallet**: Web3 wallet integration (simulated)

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation and auth
│   │   ├── Hero.tsx            # Landing page hero
│   │   ├── BotInterface.tsx    # AI bot chat interface
│   │   └── DappGallery.tsx     # Featured dApps showcase
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## Features in Detail

### AI Bot Interface
- Natural language understanding
- Context-aware responses
- Quick command buttons
- Real-time typing indicators
- Action buttons for deployment

### dApp Types Supported
- **Memecoin Launchpad**: Token creation, liquidity pools, fair launch
- **NFT Marketplace**: Minting, gallery, trading, royalties
- **Token Swap**: DEX functionality, liquidity pools, slippage protection
- **Gaming dApps**: On-chain logic, NFT assets, play-to-earn
- **DeFi Platforms**: Staking, lending, yield farming

### Deployment
- One-click deployment to Solana
- Unique shareable URLs
- Live dApp tracking
- Social media sharing integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Inspired by the Solana ecosystem
- Designed for Web3 creators and entrepreneurs