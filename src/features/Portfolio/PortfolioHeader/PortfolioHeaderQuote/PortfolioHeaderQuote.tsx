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

  useEffect( () => {

    const getData = async () => {
        const data = await axios.get("https://api.quotable.io/random?maxLength=100")
        const json = data.data;
        setQuote(json)
    }

    getData().catch(console.error)
  }, [])

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
