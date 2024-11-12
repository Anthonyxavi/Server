
/**
 * @returns{promise => object} information quote
 */
const fetchQuote = async () =>{
    
    
const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`); 
const data = await res.json() ;
console.log(data[0])
return data[0]
}









/**
 * 
 * @param {HTMLDivElement} element 
 */


export const BreakingBadApp =async (element) =>{
    document.querySelector('#app-title').innerHTML = 'breakingBad back';
    element.innerHTML=`loading...`;
    //await fetchQuote();
const quoteLabel = document.createElement('blockquote');
const authoLabel = document.createElement('h3');
const nextquoteButon = document.createElement('button');
nextquoteButon.innerText = 'Next quote'

const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authoLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel,authoLabel,nextquoteButon);
}
//añadir listener
nextquoteButon.addEventListener('click',async()=>{
    element.innerHTML=`loading...`;
    const quote = await fetchQuote();
    renderQuote(quote);
})


fetchQuote()
    .then( renderQuote)
};