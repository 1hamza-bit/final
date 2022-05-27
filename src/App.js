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
import SignUp from './Components/Register2'
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
import Search from './Components/Search'
import Addother from './Components/Admin/Addother';
import Manageothers from './Components/Admin/Manageothers';
import Otheredit from './Components/Admin/Updateothers';
import Uaother from './Components/User/Useruploadother';
import Otherz from './Components/videos/others';
import Singleother from './Components/videos/singleother';

function App() {
  
  const [user, setuser] = React.useState(null);

  React.useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      var decoded = jwt_decode(token);
      setuser(decoded);
    } catch {}
  }, []);

  
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homeuser user={user}/>}/>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login/>}/>
          <Route path="/register" element={user ? <Navigate to="/" replace /> : <SignUp/>}/>
          <Route path="/update_video/:id" element={user && user.role==="admin" ? <Videoedit/> : <Navigate to="/login" replace />}/>
          <Route path="/update_screenplay/:id" element={user && user.role==="admin" ? <Playedit/> : <Navigate to="/login" replace />}/>
          <Route path="/update_magazine/:id" element={user && user.role==="admin" ?  <Magedit/>  : <Navigate to="/login" replace />}/>
          <Route path="/update_others/:id" element={user && user.role==="admin" ?  <Otheredit/>  : <Navigate to="/login" replace />}/>
          <Route exact path="/add_videos" element={user && user.role==="admin" ? <Videos user={user}/> : <Navigate to="/login" replace />}/>
          <Route exact path="/add_others" element={user && user.role==="admin" ? <Addother user={user}/> : <Navigate to="/login" replace />}/>
          <Route exact path="/manage_videos" element={user && user.role==="admin" ? <ManageVideos/> : <Navigate to="/login" replace />}/>
          <Route exact path="/manage_magazines" element={user && user.role==="admin" ? <Managemag/> : <Navigate to="/login" replace />}/>
          <Route exact path="/manage_others" element={user && user.role==="admin" ? <Manageothers/> : <Navigate to="/login" replace />}/>
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
          <Route exact path="/Others" element={<Otherz/>}/>
          <Route exact path="/Others/:id" element={<Singleother/>}/>

          <Route exact path="/logout" element={<Logout/>}/>
          <Route exact path="/sc" element={<Sc user={user}/>}/>
          <Route exact path="/User_Upload_Video" element={user ? <UploadVideos user={user}/> : <Navigate to="/" replace />}/>
          <Route exact path="/User_Upload_Magazine" element={user ? <UploadMagazines user={user}/> : <Navigate to="/" replace />}/>
          <Route exact path="/User_Upload_Screenplay" element={user ? <UScreenplays user={user}/> : <Navigate to="/" replace />}/>
          <Route exact path="/User_Upload_Other" element={user ? <Uaother user={user}/> : <Navigate to="/" replace />}/>
          <Route exact path="/search/:data" element={<Search user={user}/>}/>
        </Routes>
    </Router>
  )
}

export default App