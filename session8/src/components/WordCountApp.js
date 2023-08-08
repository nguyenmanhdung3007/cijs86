import React, { useState, useEffect } from 'react';

function WordCountApp() {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const updateWordCount = () => {
      const words = inputText.trim().split(/\s+/);
      const filteredWords = words.filter(word => word !== ''); // Remove empty strings
      setWordCount(filteredWords.length);
    };

    const intervalId = setInterval(updateWordCount, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [inputText]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h1>Word Count App</h1>
      <textarea
        rows="4"
        cols="100"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text ....."
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default WordCountApp;
