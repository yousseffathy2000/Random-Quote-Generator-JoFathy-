var quotesList = [
    {quote:"Be yourself; everyone else is already taken",
    auther:"Oscar Wilde"},

    {quote:"So many books, so little time",
    auther:"Frank Zappa"},

    {quote:"A room without books is like a body without a soul",
    auther:"Marcus Tullius Cicero"},

    {quote:"You only live once, but if you do it right, once is enough",
    auther:"Mae West"},

    {quote:"Be the change that you wish to see in the world",
    auther:"Mahatma Gandhi"},

    {quote:"In three words I can sum up everything I've learned about life: it goes on",
    auther:"Robert Frost"},

    {quote:"If you tell the truth, you don't have to remember anything",
    auther:"Mark Twain"},

    {quote:"A friend is someone who knows all about you and still loves you",
    auther:"Elbert Hubbard"},

    {quote:"To live is the rarest thing in the world. Most people exist, that is all",
    auther:"Oscar Wilde"},

    {quote:"It is better to be hated for what you are than to be loved for what you are not",
    auther:"Andre Gide"}
];

usedQuotes = [];

function displayQuote(){
var cartona = ``

    if (usedQuotes.length == quotesList.length) {
        usedQuotes = [];
    }

do {
    randomNumber = Math.trunc(Math.random() * quotesList.length);
} while (usedQuotes.includes(quotesList[randomNumber]));

    cartona += `
                <p id="quote">${quotesList[randomNumber].quote}</p>
                <p id="auther">-- ${quotesList[randomNumber].auther} --</p>
            `

usedQuotes.push(quotesList[randomNumber]);

document.getElementById("box").innerHTML = cartona;
};
