let url = "https://api.quotable.io/quotes/random";
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let output = await getQuote();
    console.log(output);
    let quotation = document.querySelector("#quote");
    quotation.innerText = output;
});
let btn2 = document.querySelector("#start");
btn2.addEventListener("click",async ()=>{
    let output = await getQuote();
    console.log(output);
    let quotation = document.querySelector("#quote");
    quotation.innerText = output;
});
async function getQuote(){
    try{
        let jsonres =await fetch(url);
        let validres = await jsonres.json();
        let res = validres[0];
        return res.content;
    }
    catch(error){
        return "Data Not Found";
    }
}