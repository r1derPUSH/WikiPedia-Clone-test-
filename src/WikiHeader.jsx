
function WikiHeader () {


    return (<div className="container-header">
        <div className="box-header">
            <div className="container-header-first">
                <img className="barLogo" src="/WikiPedia-Clone-test-/src/menu-bar.png" alt="" />
                <img  className='wikiLogo' src="/WikiPedia-Clone-test-/src/logo.png" alt="" />
                {/* <div> */}
                    <div className="flexbox">
                        <h1>Wikipedia</h1> <br />
                        <h3 className="h3-header">The Free Encyplopedia</h3> 
                     </div>    
                     <div className="input-flexbox">
                        <img src="/WikiPedia-Clone-test-/src/search.png" className="searchLogo" alt="" />
                        <input type="text" id="header-input" />
                        <button className="input-button">Search</button> 
                    </div>
                {/* </div>        */}
            </div>
            <div className="login-header">
                <p><a href="">Create Account</a></p>
                <p><a href="">Log In</a></p>
                <img src="/WikiPedia-Clone-test-/src/3dots.png" className="header-lastLogo" alt="" />
            </div>
        </div>
    </div>)
}

export default WikiHeader;