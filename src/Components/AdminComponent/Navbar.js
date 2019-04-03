import React from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'


export const Navbar = (props) => {
    

    return (
        <MyContext.Consumer>{
            value => (
                <React.Fragment>
        <>
        {/* <li className="nav-item"><Link to="/">Home</Link></li> */}
        <div className="nav1">
  <div className="nav1-header">
    <div className="nav1-title">
      Good Reades
    </div>
  </div>
  <div className="nav1-btn">
    <label htmlFor="nav1-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div className="nav1-links">
  { <li className="nav1-item"><Link to="/Admin">Admin</Link></li>}
  { <li className="nav1-item"><Link to="/DisplayCategories">Categories</Link></li>}

  {value.state.UserInfo.length ?'': <li className="nav1-item"><Link to="/">Register</Link></li>}
  {value.state.UserInfo.length ?'':<li className="nav1-item"><Link to="/login">Login</Link></li>}


  {/* <li className="nav1-item"><Link to="/">Home</Link></li> */}
{value.state.UserInfo.length ?
    <li className="nav1-item"><Link to="/">hello {value.state.UserInfo}</Link></li>                    
    :<li className="nav1-item">hello visitor</li> 
}
  {value.state.UserInfo.length ?<li className="nav1-item"><Link to="/">Log Out</Link></li>:''}

  </div>
</div>
</>
</React.Fragment>
                    )
                }
</MyContext.Consumer>

    )



}
;

// export default Navbar;