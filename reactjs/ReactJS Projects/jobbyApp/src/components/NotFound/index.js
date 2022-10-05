import './index.css'
import Header from '../Header/index'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-paragraph">
        we're sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
