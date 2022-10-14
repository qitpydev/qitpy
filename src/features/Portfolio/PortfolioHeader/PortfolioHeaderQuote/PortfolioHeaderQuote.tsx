import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './PortfolioHeaderQuote.scss'
import axios from 'axios'
import { Quote } from '../../Objects'

function PortfolioHeaderQuote(props) {
  const quoteInit: Quote = {
    _id: "NaN",
    content: "no quote",
    author: "no author",
    authorSlug: "no authorSlug",
    length: 0,
    tags: []
  }
  const [quote, setQuote] = useState(quoteInit)

  const getData = async () => {
    const data = await axios.get("https://api.quotable.io/random?maxLength=100")
    const json = data.data;
    return json
  }

  useEffect(() => {
    const resetQuote = setTimeout(() => {
      getData()
      .then((data) => setQuote(data))
      .catch(err => console.log(err))
    }, 10000)
    return () => clearTimeout(resetQuote)
  }, [quote])

  return (
    <div className="quote-random">
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
