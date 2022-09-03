async function getQuote()
{
    const response = await fetch("https://api.adviceslip.com/advice")
    const quoteSlip = await response.json();
    const quote = quoteSlip.slip.advice;
    const quoteNum = quoteSlip.slip.id;
    const quoteArr = [quote, quoteNum]
    return quoteArr;
}



async function setQuote()
{
    let advice = await getQuote();
    let paragraph = document.querySelector(".quote");
    let advicePar = document.querySelector(".advice-count");
    advicePar.innerText = `Advice #${advice[1]}`
    paragraph.innerText = `"${advice[0]}"`;
}