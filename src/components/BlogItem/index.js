import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li className="li">
      <div className="title-date-con">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="date">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
