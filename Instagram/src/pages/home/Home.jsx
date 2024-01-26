import Sidebar from "../../components/sidebar/sidebar"
import Center from "../../components/center/center"
import Rightbar from "../../components/rightbar/rightbar"
import './home.css'

function Home() {
    return (
        <>
            <div className="homepage">
                <div className="homesidebar">
                    <Sidebar />
                </div>
                <div className="homecenter">
                    <Center/>
                </div>
                <div className="homerightbar">
                    <Rightbar/>
                </div>
            </div>
        </>
    )
}

export default Home