var quotes = [
  {
    "content": "Stack Overflow. Yes it's far from perfect. But man have I gotten a ton of value from that site and its users.",
    "author": "Ghopper21"
  },
  {
    "content": "Open source. Whilst not limited to programming, I do not think I have seen it used, supported and encouraged in activities outside of programming as much as it is in it.",
    "author": "Always_SFW"
  },
  {
    "content": "I really appreciate Github. It let's you share your code, follow others, contribute and more. The availability of code and information really affected my programming learning.",
    "author": "gilmi"
  },
  {
    "content": "Linux :)",
    "author": "realfuzzhead"
  },
  {
    "content": "Virtual machines, like the JVM and CLR. I've been exploring which next language to play around with, and I'm focusing on F# (CLR), Clojure (JVM), or Scala (JVM). There's also Elixir (Erlang VM). And many many more. It's awesome that relatively obscure languages are viable for practical use because of the VMs. What a wonderful programming world we live in.",
    "author": "Ghopper21"
  },
  {
    "content": "Firefox ended the long tyranny of IE oppression for experienced web users. The extension-enabled browser has forced IE to play catch up and improve their lukewarm browser, which hadn’t seen an update for 5 years.",
    "author": "webjackalope"
  },
  {
    "content": "Amazon S3 and EC2. Amazon’s on demand services S3 and EC2 have made developer’s lives a lot simpler. Not only do they not have to worry about traffic influxes and scaling headaches, they don’t have to spend buckets of cash on reserve servers.",
    "author": "Nicholas T."
  },
  {
    "content": "CSS seems to be one of those technologies that is taken for granted. Can anyone remember what the pre-CSS days were like? It wasn’t pretty. Modifying a web layout’s design meant going through each page and changing each inline style. Ugh.",
    "author": "CSSEdit"
  },
  {
    "content": "Ah, coffee. I don’t think I’m in the minority when I say that coffee is a staple to my day. Web workers in general crave the bean, and without it the day doesn’t go as well. There’s something about the smell of a fresh pot of coffee that makes the senses come alive.",
    "author": "Chris Owens"
  },
];

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Fetch a random quote from the quote array
function getRandomQuote() {
  var i = getRandomInt(0, quotes.length);
  return quotes[i];
}

function displayRandomQuote() {
  var quote = getRandomQuote();

  var quoteContent = document.getElementById('js-quote-content');
  var quoteAuthor = document.getElementById('js-quote-author');

  quoteContent.innerHTML = quote.content;
  quoteAuthor.innerHTML = quote.author;
}

// Display a random quote
displayRandomQuote();
