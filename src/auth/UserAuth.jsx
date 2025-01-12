import { useContext , useState, useEffect} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

function UserAuth({ children }) {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!user || Object.keys(user).length === 0) {
            navigate('/login');
        }
        
        if(user) {
            setLoading(false);
        }

        if(!token) {
            navigate('/login');
        }

        

    }, [])

    if(loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
        {children}
        </>
    )
}
export default UserAuth
