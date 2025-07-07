import menuBar from './assets/menu-bar.png';
import logo from './assets/logo.png';
import search from './assets/search.png';
import dots from './assets/3dots.png';


function WikiHeader () {


    return (<div className="container-header">
        <div className="box-header">
            <div className="container-header-first">
                <img className="barLogo" src={menuBar} alt="" />
                <img  className='wikiLogo' src={logo} alt="" />
                {/* <div> */}
                    <div className="flexbox">
                        <h1>Wikipedia</h1> <br />
                        <h3 className="h3-header">The Free Encyplopedia</h3> 
                     </div>    
                     <div className="input-flexbox">
                        <img src={search} className="searchLogo" alt="" />
                        <input type="text" id="header-input" />
                        <button className="input-button">Search</button> 
                    </div>
                {/* </div>        */}
            </div>
            <div className="login-header">
                <p><a href="">Create Account</a></p>
                <p><a href="">Log In</a></p>
                <img src={dots} className="header-lastLogo" alt="" />
            </div>
        </div>
    </div>)
}

export default WikiHeader;