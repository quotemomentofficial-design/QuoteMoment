const quotes = [
    { text: "Small steps, big change.", author: "Quote Moment" },
    { text: "A mother’s hug lasts long after she lets go.", author: "Unknown" },
    { text: "Dogs are not our whole life, but they make our lives whole.", author: "Roger Caras" },
    { text: "Love is the bridge between two hearts.", author: "Unknown" },
    { text: "Breathe in calm, breathe out noise.", author: "Unknown" },
    { text: "I followed my heart, and it led me to the fridge.", author: "Unknown" }
  ];
  
  function dailyQuote() {
    const day = new Date().getDate();
    const quote = quotes[day % quotes.length];
    document.getElementById("quote-text").textContent = `“${quote.text}”`;
    document.getElementById("quote-author").textContent = `– ${quote.author}`;
  }
  
  dailyQuote();
  