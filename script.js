const nextQuote = () =>
{
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(msg => console.log(msg.slip.advice));
}