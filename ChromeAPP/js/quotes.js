const quotes = [
    {
        quote: "Most folks are about as happy as they make up their minds to be.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Every day is a new day.",
        author: "Carrie Underwood",
    },
    {
        quote: "The biggest adventure you can ever take is to live the life of your dreams.",
        author: "Oprah Winfrey",
    },
    {
        quote: "If you have only one smile in you give it to the people you love.",
        author: "Maya Angelou",
    },
    {
        quote: "It’s a helluva start, being able to recognize what makes you happy.",
        author: "Lucille Ball",
    },
    {
        quote: "I’d far rather be happy than right any day.",
        author: "Douglas Adams",
    },
    {
        quote: "The first recipe for happiness is: avoid too lengthy meditation on the past.",
        author: "Andre Maurois",
    },
    {
        quote: "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose.",
        author: "Helen Keller",
    },
    {
        quote: "The happiness of life is made up of the little charities of a kiss or smile, a kind look, a heartfelt compliment.",
        author: "Samuel Taylor Coleridge",
    },
    {
        quote: "Action may not always bring happiness, but there is no happiness without action.",
        author: "William James",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
