export const siteConfig = {
  // Basic Site Information
  name: "Word Counter Pro",
  title: "Word Counter Pro - Free Online Text Analysis Tool",
  description: "Professional word counter and text analysis tool. Count words, characters, paragraphs, and get detailed text statistics instantly. Perfect for writers, students, and professionals.",
  url: "https://wordcounter.pro",
  
  // SEO & Meta Tags
  keywords: "word counter, character counter, text analysis, writing tool, word count, text statistics",
  author: "Word Counter Pro",
  
  // Header Content
  header: {
    title: "Word Counter Pro",
    subtitle: "Professional text analysis tool. Count words, characters, and get detailed statistics instantly."
  },
  
  // Text Input Section
  textInput: {
    title: "Enter Your Text",
    placeholder: "Start typing or paste your text here...",
    helpText: "Real-time analysis • Start typing to see statistics",
    clearButtonText: "Clear"
  },
  
  // Statistics Section
  statistics: {
    title: "Detailed Analysis",
    sections: {
      characterBreakdown: {
        title: "Character Breakdown",
        labels: {
          spaces: "Spaces:",
          uppercaseLetters: "Uppercase letters:",
          lowercaseLetters: "Lowercase letters:",
          numbers: "Numbers:",
          specialCharacters: "Special characters:"
        }
      },
      readingMetrics: {
        title: "Reading Metrics",
        labels: {
          readingTime: "Reading time:",
          avgWordsPerSentence: "Avg. words/sentence:",
          avgCharsPerWord: "Avg. chars/word:"
        }
      },
      textStructure: {
        title: "Text Structure",
        labels: {
          totalWords: "Total words:",
          totalSentences: "Total sentences:",
          totalParagraphs: "Total paragraphs:",
          charactersTotal: "Characters (total):",
          charactersNoSpaces: "Characters (no spaces):"
        }
      }
    }
  },
  
  // Quick Stats Labels
  quickStats: {
    words: "Words",
    characters: "Characters",
    sentences: "Sentences",
    paragraphs: "Paragraphs",
    minRead: "Min Read",
    noSpaces: "No Spaces"
  },
  
  // Footer
  footer: {
    text: "Built with ❤️ for writers and professionals.",
    copyright: "2024 Word Counter Pro."
  },
  
  // AdSense Configuration
  ads: {
    enabled: true,
    placeholders: {
      sidebar: {
        text: "AdSense Ad Space",
        size: "300x250 Rectangle"
      },
      footer: {
        text: "AdSense Ad Space",
        size: "728x90 Leaderboard"
      }
    }
  },
  
  // Social Media & Open Graph
  social: {
    twitter: {
      handle: "@wordcounterpro",
      card: "summary_large_image"
    },
    openGraph: {
      type: "website",
      locale: "en_US"
    }
  },
  
  // Branding
  branding: {
    primaryColor: "primary-600",
    accentColor: "primary-500",
    favicon: "/favicon.ico"
  },
  
  // Features Toggle
  features: {
    clearButton: true,
    realTimeAnalysis: true,
    detailedStats: true,
    readingTime: true,
    quickStatsBar: true
  }
}
