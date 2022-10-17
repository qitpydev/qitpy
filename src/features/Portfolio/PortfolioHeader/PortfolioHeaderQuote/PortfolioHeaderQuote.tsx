import React, { useEffect, useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import './PortfolioHeaderQuote.scss'
import axios from 'axios'
import { Quote } from '../../Objects'


const getQuote = async () => {
  const data = await axios.get("https://api.quotable.io/random?maxLength=100")
  const json = data.data;
  return json;
}
function PortfolioHeaderQuote(props) {
  let quoteInit: Quote = {
    _id: "",
    content: "l.o.a.d.i.n.g",
    author: "author",
    authorSlug: "",
    length: 0,
    tags: []
  }

  const [quote, setQuote] = useState(quoteInit)

  useLayoutEffect(() => {
    const resetQuote = setTimeout(() => {
      getQuote().then(data => {
        setQuote(data)
      }).catch(err => {
        console.log(err)
      })
    }, 5000)
    return () => clearTimeout(resetQuote)
  },[quote])

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
