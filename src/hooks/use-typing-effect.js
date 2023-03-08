import { useState, useEffect } from 'react'

export const useTypingEffect = (words) => {
  const [text, setText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [delay, setDelay] = useState(100)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex]
      if (!isDeleting) {
        setText((prevText) =>
          currentWord.substring(0, prevText.length + 1)
        )
        if (text === currentWord) {
          setIsDeleting(true)
          setDelay(200)
        }
      } else {
        setText((prevText) => currentWord.substring(0, prevText.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          )
          setDelay(100)
        }
      }
    }
    const typingInterval = setTimeout(handleTyping, delay)
    return () => clearTimeout(typingInterval)
  }, [text, isDeleting, delay, currentWordIndex])

  return [text]
}
