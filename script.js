let quoteList = [
    {
        quote : "The purpose of our lives is to be happy",
        author : "Dalai Lama"
    },
    {
        quote : "Get busy living or get busy dying",
        author : "Stephen King"
    },
    {
        quote : "If you want to live a happy life, tie it to a goal, not to people or things",
        author : "Albert Einstein"
    },
    {
        quote : "Money and success don’t change people; they merely amplify what is already there",
        author : "Will Smith"
    },
    {
        quote : "Turn your wounds into wisdom",
        author : "Oprah Winfrey"
    },
    {
        quote : "When we do the best we can, we never know what miracle is wrought in our life or the life of another",
        author : "Helen Keller"
    },
    {
        quote : "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship",
        author : "Buddha"
    },
    {
        quote : "A man who dares to waste one hour of time has not discovered the value of life",
        author : "Charles Darwin"
    },
    {
        quote : "At every moment where language can't go, that's your mind",
        author : "Bodhidharma"
    },
    {
        quote : "People still believe what they read is necessarily the truth",
        author : "Ratan Tata"
    },
]

let quoteElem = document.getElementById("quote");
let authorElem = document.getElementById("author")

function getQuote(){
    let i = Math.floor(Math.random() * 10)
    quoteElem.innerText = quoteList[i].quote;
    authorElem.innerText = "--" + " " + quoteList[i].author
}

document.getElementById("getQuote").onclick = getQuote;
