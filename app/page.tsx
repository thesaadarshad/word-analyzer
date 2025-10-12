'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FileText, Hash, Clock, BarChart3, Type, AlignLeft } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
  spaces: number
  uppercaseLetters: number
  lowercaseLetters: number
  numbers: number
  specialCharacters: number
  readingTime: number
  averageWordsPerSentence: number
  averageCharactersPerWord: number
}

export default function WordCounter() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    spaces: 0,
    uppercaseLetters: 0,
    lowercaseLetters: 0,
    numbers: 0,
    specialCharacters: 0,
    readingTime: 0,
    averageWordsPerSentence: 0,
    averageCharactersPerWord: 0,
  })

  const calculateStats = useMemo(() => {
    if (!text.trim()) {
      return {
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        spaces: 0,
        uppercaseLetters: 0,
        lowercaseLetters: 0,
        numbers: 0,
        specialCharacters: 0,
        readingTime: 0,
        averageWordsPerSentence: 0,
        averageCharactersPerWord: 0,
      }
    }

    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length
    const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length
    const spaces = (text.match(/\s/g) || []).length
    const uppercaseLetters = (text.match(/[A-Z]/g) || []).length
    const lowercaseLetters = (text.match(/[a-z]/g) || []).length
    const numbers = (text.match(/[0-9]/g) || []).length
    const specialCharacters = (text.match(/[^a-zA-Z0-9\s]/g) || []).length
    
    // Reading time calculation (average 200 words per minute)
    const readingTime = Math.ceil(words / 200)
    
    const averageWordsPerSentence = sentences > 0 ? Math.round((words / sentences) * 10) / 10 : 0
    const averageCharactersPerWord = words > 0 ? Math.round((charactersNoSpaces / words) * 10) / 10 : 0

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      spaces,
      uppercaseLetters,
      lowercaseLetters,
      numbers,
      specialCharacters,
      readingTime,
      averageWordsPerSentence,
      averageCharactersPerWord,
    }
  }, [text])

  useEffect(() => {
    setStats(calculateStats)
  }, [calculateStats])

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const clearText = () => {
    setText('')
  }


  return (
    <div className="min-h-screen py-4 md:py-golden-lg px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:golden-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-golden-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-shadow-sm">
            {siteConfig.header.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.header.subtitle}
          </p>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 md:mb-golden-md"
        >
          <div className="glass-effect rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{stats.words.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">{siteConfig.quickStats.words}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{stats.characters.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">{siteConfig.quickStats.characters}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{stats.sentences.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">{siteConfig.quickStats.sentences}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{stats.paragraphs.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">{siteConfig.quickStats.paragraphs}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{stats.readingTime}</p>
                <p className="text-xs text-gray-500 font-medium">{siteConfig.quickStats.minRead}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{stats.charactersNoSpaces.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">{siteConfig.quickStats.noSpaces}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-golden-lg">
          {/* Text Input Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="glass-effect rounded-2xl p-4 md:p-golden-md shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary-600" />
                  {siteConfig.textInput.title}
                </h2>
                {text && siteConfig.features.clearButton && (
                  <button
                    onClick={clearText}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {siteConfig.textInput.clearButtonText}
                  </button>
                )}
              </div>
              
              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder={siteConfig.textInput.placeholder}
                className="w-full h-64 md:h-96 p-3 md:p-golden-md border-2 border-gray-200 rounded-xl resize-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              />
              
              <div className="mt-4 text-sm text-gray-500">
                {siteConfig.textInput.helpText}
              </div>
            </div>
          </motion.div>

          {/* Detailed Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-2xl p-4 md:p-golden-md shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4 md:mb-golden-md">
              <BarChart3 className="w-5 h-5 mr-2 text-primary-600" />
              {siteConfig.statistics.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-golden-md">
              {/* Character Breakdown */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 text-sm uppercase tracking-wide">{siteConfig.statistics.sections.characterBreakdown.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.characterBreakdown.labels.spaces}</span>
                    <span className="font-medium text-gray-900">{stats.spaces.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.characterBreakdown.labels.uppercaseLetters}</span>
                    <span className="font-medium text-gray-900">{stats.uppercaseLetters.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.characterBreakdown.labels.lowercaseLetters}</span>
                    <span className="font-medium text-gray-900">{stats.lowercaseLetters.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.characterBreakdown.labels.numbers}</span>
                    <span className="font-medium text-gray-900">{stats.numbers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.characterBreakdown.labels.specialCharacters}</span>
                    <span className="font-medium text-gray-900">{stats.specialCharacters.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Reading Metrics */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 text-sm uppercase tracking-wide">{siteConfig.statistics.sections.readingMetrics.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.readingMetrics.labels.readingTime}</span>
                    <span className="font-medium text-gray-900">{stats.readingTime} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.readingMetrics.labels.avgWordsPerSentence}</span>
                    <span className="font-medium text-gray-900">{stats.averageWordsPerSentence}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.readingMetrics.labels.avgCharsPerWord}</span>
                    <span className="font-medium text-gray-900">{stats.averageCharactersPerWord}</span>
                  </div>
                </div>
              </div>

              {/* Text Structure */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 text-sm uppercase tracking-wide">{siteConfig.statistics.sections.textStructure.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.textStructure.labels.totalWords}</span>
                    <span className="font-medium text-gray-900">{stats.words.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.textStructure.labels.totalSentences}</span>
                    <span className="font-medium text-gray-900">{stats.sentences.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.textStructure.labels.totalParagraphs}</span>
                    <span className="font-medium text-gray-900">{stats.paragraphs.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.textStructure.labels.charactersTotal}</span>
                    <span className="font-medium text-gray-900">{stats.characters.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{siteConfig.statistics.sections.textStructure.labels.charactersNoSpaces}</span>
                    <span className="font-medium text-gray-900">{stats.charactersNoSpaces.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AdSense Placeholder - Sidebar style */}
          {siteConfig.ads.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-4 md:p-golden-md text-center"
            >
              <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">{siteConfig.ads.placeholders.sidebar.text}</p>
                <p className="text-xs text-gray-400 mt-1">{siteConfig.ads.placeholders.sidebar.size}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer AdSense Placeholder */}
        {siteConfig.ads.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 md:mt-golden-xl"
          >
            <div className="glass-effect rounded-xl p-4 md:p-golden-md text-center">
              <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">{siteConfig.ads.placeholders.footer.text}</p>
                <p className="text-xs text-gray-400 mt-1">{siteConfig.ads.placeholders.footer.size}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <footer className="mt-8 md:mt-golden-xl text-center text-gray-500 text-sm">
          <p>&copy; {siteConfig.footer.copyright} {siteConfig.footer.text}</p>
        </footer>
      </div>
    </div>
  )
}
