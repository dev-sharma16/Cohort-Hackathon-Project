import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import CopyRightSection from './components/CopyRightSection';
import { authService } from './appwrite/authService';
import { useDispatch } from 'react-redux';
import { setUser } from './redux store/authSlice'
import AppRoutes from './routes/AllRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const user = await authService.getCurrentUser();
        dispatch(setUser(user))
      } catch (error) {
        console.log("user is not loggined or error: ",error);
      }
    }

    fetchUser();
  },[])

  return (
    <div className='h-screen '>
      <Nav/>
      <AppRoutes/>
      <CopyRightSection/>
    </div>
  )
}

export default App
