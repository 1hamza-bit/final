import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom'
import Videos from './Components/Admin/Videos';
import Screenplays from './Components/Admin/Screenplays';
import Magazines from './Components/Admin/Magazines';
import Home from './Components/Admin/Home';
import User from './Components/Admin/User';
import jwt_decode from "jwt-decode";
import ManageVideos from './Components/Admin/ManageVideos';
import Manageplays from './Components/Admin/Manageplays';
import Videoedit from './Components/Admin/Videoedit';
import Playedit from './Components/Admin/Playedit';
import Magedit from './Components/Admin/Magedit';
import Managemag from './Components/Admin/Managemag';
import Homeuser from './Components/Homeuser';
import Login from './Components/Login';
import Register from './Components/Register'
import Magz from './Components/videos/magazines';
import Vids from './Components/videos/videos';
import Single from './Components/videos/blog'
import Addcats from './Components/Admin/Addcats';
import Logout from './Components/Logout'
import UploadVideos from './Components/User/upload video';
import UploadMagazines from './Components/User/uploadmags';
import UScreenplays from './Components/User/uploadsc';
import Sc from './Components/videos/sc';
import Singlevid from './Components/videos/singlevid';
import fileDownload from 'js-file-download'
import axios from 'axios'

function App() {
  
  const [user, setuser] = React.useState(null);

  React.useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      var decoded = jwt_decode(token);
      setuser(decoded);
    } catch {}
  }, []);

  const handleDownload = () => {
    axios.get('https://res.cloudinary.com/ds2zccx0d/video/upload/v1652789967/DEV/tdiw2bgn9klh2yln6nof.mp4', {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, 'fil.mp4')
    })
  }
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homeuser user={user}/>}/>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login/>}/>
          <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register/>}/>
          <Route path="/update_video/:id" element={user && user.role==="admin" ? <Videoedit/> : <Navigate to="/login" replace />}/>
          <Route path="/update_screenplay/:id" element={user && user.role==="admin" ? <Playedit/> : <Navigate to="/login" replace />}/>
          <Route path="/update_magazine/:id" element={user && user.role==="admin" ?  <Magedit/>  : <Navigate to="/login" replace />}/>
          <Route exact path="/add_videos" element={user && user.role==="admin" ? <Videos user={user}/> : <Navigate to="/login" replace />}/>
          <Route exact path="/manage_videos" element={user && user.role==="admin" ? <ManageVideos/> : <Navigate to="/login" replace />}/>
          <Route exact path="/manage_magazines" element={user && user.role==="admin" ? <Managemag/> : <Navigate to="/login" replace />}/>
          <Route exact path="/manage_screenplays" element={user && user.role==="admin" ? <Manageplays/> : <Navigate to="/login" replace />}/>
          <Route exact path="/add_screenplays" element={user && user.role==="admin" ? <Screenplays user={user}/> : <Navigate to="/login" replace />}/>
          <Route exact path="/add_magazines" element={user && user.role==="admin" ? <Magazines user={user}/> : <Navigate to="/login" replace />}/>
          <Route exact path="/add_categories" element={user && user.role==="admin" ? <Addcats/> : <Navigate to="/login" replace />}/>
          <Route exact path="/admin" element={user && user.role==="admin" ? <Home/> : <Navigate to="/login" replace />}/>
          <Route exact path="/users" element={user && user.role==="admin" ? <User/> : <Navigate to="/" replace />}/>
          <Route exact path="/Magazines" element={<Magz/>}/>
          <Route exact path="/Magazines/:id" element={<Single/>}/>
          <Route exact path="/Videos/:id" element={<Singlevid/>}/>
          <Route exact path="/Videos" element={<Vids/>}/>
          <Route exact path="/logout" element={<Logout/>}/>
          <Route exact path="/sc" element={<Sc/>}/>
          <Route exact path="/User_Upload_Video" element={user ? <UploadVideos user={user}/> : <Navigate to="/" replace />}/>
          <Route exact path="/User_Upload_Magazine" element={user ? <UploadMagazines user={user}/> : <Navigate to="/" replace />}/>
          <Route exact path="/User_Upload_Screenplay" element={user ? <UScreenplays user={user}/> : <Navigate to="/" replace />}/>
        </Routes>
        {/* <button onClick={handleDownload}>Download Image</button> */}
    </Router>
  )
}

export default App