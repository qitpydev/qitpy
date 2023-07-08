import React, { useState, useLayoutEffect } from 'react'
import './PortfolioHeaderQuote.scss'
import axios from 'axios'
import { Quote } from '../../../common/Interfaces'


const getQuote = async () => {
  const data = await axios.get("https://api.quotable.io/random?maxLength=100")
  const json = data.data;
  return json;
}
function PortfolioHeaderQuote(props) {
  const delayTime = 50000
  let quoteInit: Quote = {
    _id: "",
    content: "l.o.a.d.i.n.g",
    author: "author",
    authorSlug: "",
    length: 0,
    tags: []
  }

  const [quote, setQuote] = useState(quoteInit)
  const [delay, setDelay] = useState(1000)

  useLayoutEffect(() => {
    const resetQuote = setTimeout(() => {
      getQuote().then(data => {
        setQuote(data)
        if (delay !== delayTime) setDelay(delayTime)
      }).catch(err => {
        console.log(err)
      })
    }, delay)
    return () => clearTimeout(resetQuote)
  },[quote, delay])

  return (
    <div className="quote-random" onMouseEnter={() => {console.log("AHIHIH")}} onMouseLeave={() => {console.log("leaves")}}>
        <div className="quote-content">
            <i>"{quote.content}"</i>
        </div>
        <div className="quote-author">
            <i><b>- {quote.author}</b></i>
        </div>
    </div>
  )
}

PortfolioHeaderQuote.propTypes = {}

export default PortfolioHeaderQuote
