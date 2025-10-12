# Configuration Guide

This Word Counter Pro application is fully configurable through the `config/site.ts` file. You can customize all text, branding, and features without touching the main code.

## 🎯 Quick Customization

Edit the `config/site.ts` file to customize your word counter tool:

### Basic Site Information
```typescript
name: "Your Tool Name",
title: "Your Tool - SEO Title",
description: "Your tool description for SEO",
url: "https://yourdomain.com",
```

### Header & Branding
```typescript
header: {
  title: "Your Tool Name",
  subtitle: "Your tool description"
},
```

### Text Input Customization
```typescript
textInput: {
  title: "Enter Your Text",
  placeholder: "Your custom placeholder...",
  helpText: "Your help text",
  clearButtonText: "Clear"
},
```

### Statistics Labels
```typescript
quickStats: {
  words: "Words",
  characters: "Characters",
  // ... customize all labels
},
```

### Detailed Statistics Sections
```typescript
statistics: {
  title: "Analysis Title",
  sections: {
    characterBreakdown: {
      title: "Character Analysis",
      labels: {
        spaces: "Spaces:",
        // ... customize all labels
      }
    }
  }
}
```

### Footer Customization
```typescript
footer: {
  text: "Your footer text",
  copyright: "2024 Your Company"
}
```

### AdSense Configuration
```typescript
ads: {
  enabled: true, // Set to false to hide ads
  placeholders: {
    sidebar: {
      text: "Your Ad Text",
      size: "300x250"
    }
  }
}
```

### Feature Toggles
```typescript
features: {
  clearButton: true,        // Show/hide clear button
  realTimeAnalysis: true,   // Enable real-time updates
  detailedStats: true,      // Show detailed statistics
  readingTime: true,        // Calculate reading time
  quickStatsBar: true       // Show quick stats bar
}
```

## 🎨 Branding Customization

### Colors
```typescript
branding: {
  primaryColor: "primary-600",  // Main brand color
  accentColor: "primary-500",   // Accent color
  favicon: "/favicon.ico"       // Favicon path
}
```

### SEO & Social Media
```typescript
keywords: "your, keywords, here",
social: {
  twitter: {
    handle: "@yourtwitterhandle",
    card: "summary_large_image"
  },
  openGraph: {
    type: "website",
    locale: "en_US"
  }
}
```

## 🌍 Multi-language Support

To create versions in different languages, simply:

1. Copy `config/site.ts` to `config/site-es.ts` (for Spanish)
2. Translate all text values
3. Import the appropriate config based on locale

## 🎯 Use Cases

### 1. Character Counter Tool
```typescript
name: "Character Counter Pro",
header: {
  title: "Character Counter Pro",
  subtitle: "Count characters, words, and analyze your text instantly"
}
```

### 2. Writing Assistant
```typescript
name: "Writing Assistant",
header: {
  title: "Writing Assistant Pro",
  subtitle: "Improve your writing with detailed text analysis"
}
```

### 3. SEO Text Analyzer
```typescript
name: "SEO Text Analyzer",
header: {
  title: "SEO Text Analyzer",
  subtitle: "Optimize your content for search engines"
}
```

## 🚀 Deployment

After making changes to `config/site.ts`:

1. **Development**: Changes are applied automatically
2. **Production**: Rebuild the Docker container:
   ```bash
   docker-compose up --build -d
   ```

## 📝 Tips

- Keep titles under 60 characters for better SEO
- Use descriptive keywords in your description
- Test different placeholder texts to see what works best
- Consider your target audience when customizing labels
- Use feature toggles to A/B test different configurations

## 🔧 Advanced Customization

For more advanced customization beyond the config file:

- **Styling**: Edit `tailwind.config.js` and `app/globals.css`
- **Layout**: Modify `app/page.tsx` and `app/layout.tsx`
- **Functionality**: Add new features in the main component

---

**Need help?** The configuration system makes it easy to create multiple branded versions of the word counter tool without code changes!
