# Flappy Bird React

A React implementation of the classic Flappy Bird game. This project recreates the addictive gameplay of the original Flappy Bird using modern web technologies.

## 🎮 About Flappy Bird

Flappy Bird is a mobile game developed by Vietnamese developer Dong Nguyen and published by his game development company .Gears. Released in May 2013, it became a global phenomenon in early 2014, reaching the top of the App Store and Google Play charts.

### Game Design

The game features a simple one-button mechanic where players tap the screen to make a bird fly through pipes. Despite its straightforward gameplay, the game's challenging nature and "easy to learn, hard to master" design philosophy made it incredibly addictive. The game's difficulty comes from the precise timing required to navigate through the pipes, combined with the bird's constant downward momentum.

### Cultural Impact

- Generated over $50,000 in daily revenue at its peak
- Inspired countless clones and parodies
- Became a cultural phenomenon with memes and references in popular media
- Demonstrated the potential of simple, well-designed mobile games
- Influenced the design of many subsequent mobile games

### Technical Achievement

The original game was developed in just 2-3 days using the Phaser framework. Its success proved that a simple, well-executed game concept could achieve massive popularity without complex graphics or mechanics.

## 🎮 Game Features

- Classic Flappy Bird gameplay mechanics
- Smooth animations and physics
- Score tracking
- Touch and mouse controls
- Game replay functionality
- Responsive design
- Mobile-friendly interface

## 🛠️ Technology Stack

- React 15.2.1
- Create React App
- Relite (State Management)
- CSS3 Animations
- FastClick (Mobile Touch Optimization)

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MehdiiRezakhani/flappy-bird.git
cd flappy-bird
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🎯 How to Play

1. Click or tap the screen to make the bird fly
2. Navigate through the pipes
3. Each successful pipe passage adds 1 point to your score
4. Avoid hitting the pipes and the ground
5. Try to achieve the highest score possible!

## 🏗️ Project Structure

```
src/
├── components/         # React components
│   ├── Bird.js        # Bird component
│   ├── Piping.js      # Pipe obstacles
│   └── Menu.js        # Game menu
├── store/             # State management
│   ├── actions.js     # Game actions
│   └── index.js       # Store setup
├── App.js             # Main app component
├── index.js           # Entry point
├── initialState.js    # Initial game state
├── record.js          # Game recording functionality
└── index.css          # Game styles
```

## 🎨 Game Constants

- Bird size: 34x24 pixels
- Pipe width: 52 pixels
- Game dimensions: 288x512 pixels
- Pipe generation interval: 1600ms
- Pipe movement speed: 2800ms
- Bird fly height: 60 pixels
- Bird fly time: 140ms
- Bird drop time: 1400ms

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Original Flappy Bird game by Dong Nguyen
- React team for the amazing framework
- Create React App for the development environment
