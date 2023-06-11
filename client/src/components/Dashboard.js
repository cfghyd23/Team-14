import { useNavigate } from 'react-router-dom';
import './style2.css';
const UserHeader = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/other-page');
  };
  const handleClickOne= () => {
    history('/my-profile');
  };
  const handleClickTwo= () => {
    history('/my-achieve');
  };

  const f=()=>{
    history('/admin')
  }
  return (
      
    <div>
         <button onClick={f} className="button button-left">Admin Portal</button>
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <h1 className='y'>Intern Home Page</h1>
      <h1 className='z'>Welcome User</h1>
      </div>
      <div className='container'>
        
        <div style={{display: "flex", justifyContent: "space-between"}} >
      <div className="card">
      {/* <img src="card-image.jpg" alt="Card" className="card-image" /> */}
      <div className="card-content">
      <i class="fa fa-users" aria-hidden="true"></i>
        <h2 className="card-title">My Campaigns</h2>
        <p className="card-text">
          Enrolled Campaigns
        </p>
        <i class="fa fa-users" aria-hidden="true"></i>
        <button onClick={handleClick} className="button button-left">My Campaigns</button>
        
      </div>
    </div>
    <div className="card">
      {/* <img src="card-image.jpg" alt="Card" className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">My Profile</h2>
        <p className="card-text">
          My Profile
        </p>
        <button onClick={handleClickOne} className="button button-right">My Profile</button>
        
      </div>
    </div>
    <div className="card">
      {/* <img src="card-image.jpg" alt="Card" className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">My Achievements</h2>
        <p className="card-text">
        My achievemnts as an intern in Marpu.
        </p>
        <button onClick={handleClickTwo} className="button button-right">My Achievements</button>
        
      </div>
    </div>
      </div>
      </div>
      
      
      {/* <div className='button-container'>
      
      <button onClick={handleClick} className="button button-left">My Compaigns</button>
      <button onClick={handleClickOne} className="button button-right">My Profile</button>
      <button onClick={handleClickTwo} className="button button-right">My Achievements</button>
      </div> */}
      
    </div>
  );

  }


export default UserHeader