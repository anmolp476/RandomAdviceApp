async function getQuote()
{
    const response = await fetch("https://api.adviceslip.com/advice")
    const quoteSlip = await response.json();
    const quote = quoteSlip.slip.advice;
    return quote;
}



async function setQuote()
{
    let advice = await getQuote();
    let paragraph = document.querySelector(".quote");
    paragraph.innerText = `"${advice}"`;
}