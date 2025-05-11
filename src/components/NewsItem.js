import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='my-3'>
        <div className="card  position-relative" style={{width: '18rem'}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%',zIndex: '1'}}>{source}</span>
            <img src={!imageUrl?"https://www.ocers.org/sites/main/files/imagecache/thumbnail/main-images/istock-583691330.jpg?1651270496" : imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <Link to={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</Link>
        </div>
     </div>
      </div>
    )
  }
}

export default NewsItem
