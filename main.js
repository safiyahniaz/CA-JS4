const quoteSource = [
    {
        quote: "Don't cry because it's over, smile because it happened",
        author:"Dr. Seuss"
    },
    {
        quote: "Some are born great, some achieve greatness, and some have greatness thrust upon them", 
        author: "William Shakespeare"
    },
    {
        quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
        author:"A. P. J. Abdul Kalam"
    },
    {
        quote: "The wisest mind has something yet to learn" ,
        author: "George Santanaya" ,
    },
    {
        quote: "Good things happen to those who hustle" ,
        author:"Anaïs Nin" ,
    },
     {
        quote: "Every noble work is at first impossible." ,
        author: "Thomas Carlyle" ,
    },
    { 
        quote:"Open your mind. Get up off the couch. Move." ,
        author:"Anthony Bourdain" ,
    },
];

function getRandomQuote(){
    const randomNumber = getRandomNumber();
    const quoteObject = quoteSource[randomNumber];
    elementSetter('saying', quoteObject.quote);
    elementSetter('author', quoteObject.author);
}

function elementSetter(elementId, innerHTMLValue){
    document.getElementById(elementId).innerHTML = innerHTMLValue;
}

let currentRandomNumber = 0;
function getRandomNumber(){
    const sourceLength = quoteSource.length;
    const randomNumber = Math.floor(Math.random()*sourceLength);

    if(randomNumber === currentRandomNumber){
        return getRandomNumber();
    } else {
        currentRandomNumber = randomNumber;
        return randomNumber;
    }
}

// create func (getRandomNumber)
// const sourceLength = quoteSource.length;
// const randomNumber= Math.floor(Math.random()*sourceLength); 

//onclick funct (when called)
// random num
//get by index array[rand num]
// getelement => chg innerhtml
