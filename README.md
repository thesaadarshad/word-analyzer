# Word Counter Pro 📝

A professional, modern word counter and text analysis tool built with Next.js 14, TypeScript, and Tailwind CSS. Features real-time text analysis, beautiful UI following golden ratio design principles, and AdSense integration ready.

## ✨ Features

- **Real-time Analysis**: Instant text statistics as you type
- **Comprehensive Metrics**: Words, characters, sentences, paragraphs, reading time, and more
- **Advanced Statistics**: Uppercase/lowercase letters, numbers, special characters
- **Golden Ratio Design**: Clean, modern UI following design best practices
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **SEO Optimized**: Built for search engine visibility
- **AdSense Ready**: Strategic ad placement zones included
- **Docker Support**: Easy deployment with Docker Compose

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production with Docker

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

### Production with Nginx (Recommended)

```bash
# Run with nginx reverse proxy
docker-compose --profile production up -d

# Access at http://localhost
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker + Docker Compose
- **Reverse Proxy**: Nginx (optional)

## 📊 Text Analysis Features

- **Basic Counts**: Words, characters (with/without spaces), sentences, paragraphs
- **Character Analysis**: Uppercase letters, lowercase letters, numbers, special characters, spaces
- **Reading Metrics**: Estimated reading time, average words per sentence, average characters per word
- **Real-time Updates**: All statistics update instantly as you type

## 🎨 Design Philosophy

- **Golden Ratio**: All spacing and proportions follow the golden ratio (1.618:1)
- **Minimal Interface**: Clean, distraction-free design
- **Modern Typography**: Inter font for excellent readability
- **Glass Morphism**: Subtle glass effects for modern appeal
- **Responsive Design**: Mobile-first approach

## 💰 Monetization

The app includes strategic AdSense placement zones:
- Sidebar rectangle (300x250)
- Footer leaderboard (728x90)
- Additional spaces can be easily added

## 🚀 Deployment Options

### 1. Simple Docker
```bash
docker build -t word-counter .
docker run -p 3000:3000 word-counter
```

### 2. Docker Compose (Recommended)
```bash
docker-compose up -d
```

### 3. Production with Nginx
```bash
docker-compose --profile production up -d
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=your-adsense-client-id
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-measurement-id
```

### Nginx Configuration
The included `nginx.conf` provides:
- Gzip compression
- Static asset caching
- Security headers
- Rate limiting
- SSL termination (when certificates are provided)

## 📈 SEO Features

- Optimized meta tags
- Structured data markup
- Semantic HTML
- Fast loading times
- Mobile-friendly design
- Clean URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for commercial purposes.

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔮 Future Enhancements

- [ ] Text readability analysis
- [ ] Keyword density checker
- [ ] Export statistics to PDF/CSV
- [ ] Text comparison tool
- [ ] Multiple language support
- [ ] Dark mode toggle
- [ ] User accounts and history

---

Built with ❤️ for writers, students, and professionals worldwide.
