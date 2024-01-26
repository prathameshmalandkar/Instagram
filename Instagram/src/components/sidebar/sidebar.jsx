import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MenuIcon from '@mui/icons-material/Menu';

function sidebar() {
    return (
        <>
            <div className="sidebarcontainer">
                <div className="sidebartop">
                    <img className='sidebartopLogo' src="./src/assets/logo.jpeg" alt="" />
                </div>
                <div className="sidebarcenter">
                    <ul>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <HomeIcon/>
                            </div>
                            <h3 className='sidebarH3'>Home</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <SearchIcon />
                            </div>
                            <h3 className='sidebarH3'>Search</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <ExploreOutlinedIcon />
                            </div>
                            <h3 className='sidebarH3'>Exploer</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <SmartDisplayOutlinedIcon />
                            </div>
                            <h3 className='sidebarH3'>Reel</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <i className="fa-brands fa-facebook-messenger sidebarIconsMessage"></i>
                            </div>
                            <h3 className='sidebarH3'>Message</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <FavoriteBorderIcon />
                            </div>
                            <h3 className='sidebarH3'>Notifications</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <AddBoxOutlinedIcon />
                            </div>
                            <h3 className='sidebarH3'>Create</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <img src="./src/assets/Profile/profile-1.jpeg" className='sidebarprofileImg' />
                            </div>
                            <h3 className='sidebarH3'>Profile</h3>
                        </li>
                    </ul>
                </div>
                <div className="sidebarbottom">
                    <ul>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <AlternateEmailIcon/>
                            </div>
                            <h3 className='sidebarH3'>Threads</h3>
                        </li>
                        <li className='sidebarcenterli'>
                            <div className="sidebarIcons">
                                <MenuIcon/>
                            </div>
                            <h3 className='sidebarH3'>More</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default sidebar