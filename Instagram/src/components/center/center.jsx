import Post from '../post/Post'
import Stories from '../stories/Stories'
import './center.css'

function center() {
  return (
    <>
      <div className="centercontainer">
        <div className="centerStories">
          <Stories />
            <div className="centerpost">
              <Post/>
            </div>
        </div>
      </div>
    </>
  )
}

export default center