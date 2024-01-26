import './rightbar.css'

function rightbar() {
  return (
    <>
      <div className="rightbarContainer">
        <div className="rightbarwrapper">
          <div className="rightbarProfile">
            <img className='rightbarProfileImg' src="./src/assets/Profile/profile-1.jpeg" alt="" />
            <div className="rightbarProfileDetails">
              <div className="rightbarProfileDetailsInfo">
                <h3 className='rightbarProfileDetailsh3'>im_prathameshh</h3>
                <h4 className='rightbarProfileDetailsh4'>Prathamesh</h4>
              </div>
              <div className="rightbarProfileDetailsButton">
                <button className='rightbarProfileDetailsBtn'>Switch</button>
              </div>
            </div>
          </div>
          <div className="rightbarsuggesition">
            <h3 className='rightbarsuggesitionh3'>Suggested for you</h3>
            <button className='rightbarsuggesitionBtn'>See All</button>
          </div>
          <div className="rightbarsuggesitionList">
            <ul>
              <li className='rightbarsuggesitionListli'>
                <div className="rightbarsuggesition">
                  <img className='rightbarsuggesitionImg' src="./src/assets/Profile/profile-1.jpeg" alt="" />
                  <div className="rightbarsuggesitionDetails">
                    <div className="rightbarsuggesitionDetailsInfo">
                      <h3 className='rightbarsuggesitionDetailsh3'>im_prathameshh</h3>
                      <h4 className='rightbarsuggesitionDetailsh4'>Suggested for you</h4>
                    </div>
                    <div className="rightbarsuggesitionDetailsButton">
                      <button className='rightbarsuggesitionDetailsBtn'>Follow</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className='rightbarsuggesitionListli'>
                <div className="rightbarsuggesition">
                  <img className='rightbarsuggesitionImg' src="./src/assets/Profile/profile-2.jpeg" alt="" />
                  <div className="rightbarsuggesitionDetails">
                    <div className="rightbarsuggesitionDetailsInfo">
                      <h3 className='rightbarsuggesitionDetailsh3'>im_prathameshh</h3>
                      <h4 className='rightbarsuggesitionDetailsh4'>Suggested for you</h4>
                    </div>
                    <div className="rightbarsuggesitionDetailsButton">
                      <button className='rightbarsuggesitionDetailsBtn'>Follow</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className='rightbarsuggesitionListli'>
                <div className="rightbarsuggesition">
                  <img className='rightbarsuggesitionImg' src="./src/assets/Profile/profile-3.jpeg" alt="" />
                  <div className="rightbarsuggesitionDetails">
                    <div className="rightbarsuggesitionDetailsInfo">
                      <h3 className='rightbarsuggesitionDetailsh3'>im_prathameshh</h3>
                      <h4 className='rightbarsuggesitionDetailsh4'>Suggested for you</h4>
                    </div>
                    <div className="rightbarsuggesitionDetailsButton">
                      <button className='rightbarsuggesitionDetailsBtn'>Follow</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className='rightbarsuggesitionListli'>
                <div className="rightbarsuggesition">
                  <img className='rightbarsuggesitionImg' src="./src/assets/Profile/profile-4.jpeg" alt="" />
                  <div className="rightbarsuggesitionDetails">
                    <div className="rightbarsuggesitionDetailsInfo">
                      <h3 className='rightbarsuggesitionDetailsh3'>im_prathameshh</h3>
                      <h4 className='rightbarsuggesitionDetailsh4'>Suggested for you</h4>
                    </div>
                    <div className="rightbarsuggesitionDetailsButton">
                      <button className='rightbarsuggesitionDetailsBtn'>Follow</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rightbarterms">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default rightbar