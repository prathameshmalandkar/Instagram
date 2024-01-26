import './post.css'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
function Post() {
    return (
        <>
            <div className="postcontainer">
                <div className="postwrapper">
                    <div className="post">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img className='postTopLeftImg' src="./src/assets/Profile/profile-2.jpeg" alt="" />
                                <div className="postTopLeftDetails">
                                    <h4 className='postTopLeftDetailsh4'>Atharva 3h</h4>
                                    <div className="postTopLeftDetailsSong"><h5>Original Song</h5></div>
                                </div>
                            </div>
                            <div className="postTopRightIcon"><MoreHorizOutlinedIcon /></div>
                        </div>
                        <div className="postCenter">
                            <img className='postCenterImg' src="./src/assets/post/post-1.jpeg" alt="" />
                        </div>
                        <div className="postBottom">
                            <div className="postBottomLeft">
                                <div className="postBottomLeftIcons">
                                    <i className="fa-regular fa-heart postBottomLeftIcon"></i>
                                    <i className="fa-regular fa-comment fa-flip-horizontal postBottomLeftIcon"></i>
                                    <i className="fa-regular fa-paper-plane postBottomLeftIcon"></i>
                                </div>
                                <div className="postBottomLeftDetails">
                                    <h4 className='postBottomLeftDetailsh4'>Liked by Rohit and others</h4>
                                    <h4 className='postBottomLeftDetailsh4'>Red Water River</h4>
                                    <input placeholder='Add a comment...' className='postBottomLeftDetailsInput' />
                                </div>
                            </div>
                            <div className="postBottomRight">
                                <i className="fa-regular fa-bookmark postBottomRightIcon"></i>
                                <i className="fa-regular fa-face-smile postBottomRightIconSmile"></i>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img className='postTopLeftImg' src="./src/assets/Profile/profile-2.jpeg" alt="" />
                                <div className="postTopLeftDetails">
                                    <h4 className='postTopLeftDetailsh4'>Atharva 3h</h4>
                                    <div className="postTopLeftDetailsSong"><h5>Original Song</h5></div>
                                </div>
                            </div>
                            <div className="postTopRightIcon"><MoreHorizOutlinedIcon /></div>
                        </div>
                        <div className="postCenter">
                            <img className='postCenterImg' src="./src/assets/post/post-2.jpeg" alt="" />
                        </div>
                        <div className="postBottom">
                            <div className="postBottomLeft">
                                <div className="postBottomLeftIcons">
                                    <i className="fa-regular fa-heart postBottomLeftIcon"></i>
                                    <i className="fa-regular fa-comment fa-flip-horizontal postBottomLeftIcon"></i>
                                    <i className="fa-regular fa-paper-plane postBottomLeftIcon"></i>
                                </div>
                                <div className="postBottomLeftDetails">
                                    <h4 className='postBottomLeftDetailsh4'>Liked by Rohit and others</h4>
                                    <h4 className='postBottomLeftDetailsh4'>Red Water River</h4>
                                    <input placeholder='Add a comment...' className='postBottomLeftDetailsInput' />
                                </div>
                            </div>
                            <div className="postBottomRight">
                                <i className="fa-regular fa-bookmark postBottomRightIcon"></i>
                                <i className="fa-regular fa-face-smile postBottomRightIconSmile"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post