import Footer from "../../Shared/Footer";
import DashNav from "../DashNav/DashNav";
import Sidebar from "../Sidebar/Sidebar";
const DashBoard = () => {
    // const { user } = useContext(AuthContext)
    // // console.log(user.email); 
    // const [newUser, setNewUser] = useState([])
    // console.log(newUser.role);
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setNewUser(data))
    //         // .then(data => console.log(data))
    //     // console.log();
    // }, [])
    return (
        <div>
            <div>
                <DashNav></DashNav>
            </div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;