const quotes = [
  {
    quote:
      'I love the Verve Roaster’s Choice Single Origin subscription, which sent me a different single origin coffee every week. Managing the subscription is a breeze, and Verve sends a courtesy reminder before each shipment in case you need to make a change.',
    authorName: 'BEN KENOGH',
    companyName: 'WIRECUTTER SUPERVISING EDITOR',
    id: 1,
  },
  {
    quote:
      'It had all the rich flavors and robust body of a beautiful pour over with the easy smoothness of a cold brew. Because it checked all our boxes and more, we’re naming Verve Streetlevel our best instant coffee.',
    authorName: 'SAM STONE',
    companyName: 'BON APPÉTIT STAFF WRITER',
    id: 2,
  },
  {
    quote:
      ' Verve offers several instant options, but my favorite is the variety pack, which includes seven single-serving craft instant coffee sachets, each with distinct flavors, including a decaf option for those who are sensitive to caffeine.',
    authorName: 'KRISTA SIMMONS',
    companyName: 'SUNSET TRAVEL EDITOR',
    id: 3,
  },
  {
    quote:
      'Try Verve’s instant coffee variety pack which gives you seven single-serving sachets of instant coffee in some of the specialty roaster’s most popular types.',
    authorName: 'BETH KRIETSCH',
    companyName: 'HUFFPOST FREELANCE WRITER',
    id: 4,
  },
]

const quoteElements = document.querySelectorAll('.company-div')

quoteElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    const showQuoteDets = quotes[index]
    const { quote, authorName, companyName, id } = showQuoteDets

    const showQuote = document.querySelector('.quote')
    const showAuthor = document.querySelector('.author-name')
    const showCompany = document.querySelector('.company-tag')
    const currentDarkImage = document.querySelector('.current-quote')
    showQuote.innerHTML = quote
    showAuthor.textContent = authorName
    showCompany.textContent = companyName
    currentDarkImage.classList.remove("current-quote");
    element.classList.add("current-quote")
  })
})



const rightArrow = document.querySelector('.right-arraow')
const  leftArrow = document.querySelector('.left-arraow')
 
rightArrow.addEventListener('click',()=>{
  
})