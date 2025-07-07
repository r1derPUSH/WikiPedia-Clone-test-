import lang from './assets/lang.png';
import arr from './assets/arr.png';

function WikiMain () {

    return(
        <div className="main-container">
            <div className="firstMain-container">
                <div className="firstMain-box"><h4>Contents</h4> <p style={{cursor: 'pointer' }}>hide</p></div>
                <h3>(TOP)</h3>
                <ul className="listParent">
                    <li><a href="">Computer Science</a></li>
                    <li><a href="">Other uses</a></li>
                    <li><a href="">See also</a></li>
                </ul>
            </div>
            <div className="secondMain-container">
            <div className="secondMain-boxUpon">
                <div className="flxBxUp1">
                    <h3 className="header-title">Coding</h3>
                    <div className="boxUpImgLang">
                        <h6 className="flxBxUpLang">
                            <a className="boxUpImgLang" href="#" style={{textDecoration: 'none', color: 'black'}}>
                                <img src={lang} alt="" />
                                <p className="boxUpImgLangParagraph">5 languages</p>
                                <img src={arr} alt="" />
                            </a>
                        </h6>
                    </div>
                </div>
               <div className="flexUpBox"> 
                    <div className="flexUpBoxChild">
                        <div className="flexChild1">
                            <div className="flexChild1-h5Article-container">
                                <h5 className="flexChild1-h5Article"><a href="#" style={{textDecoration: 'none', color: 'black'}}>Article</a></h5>
                            </div>
                            <h5 style={{cursor: 'pointer'}}>Talk</h5>
                        </div>
                        <div className="flexChild2">
                            <p>Read</p>
                            <p><a href="#">Edit</a></p>
                            <p><a href="#">View History</a></p>
                            <p className="toolsParagraph">Tools</p><img src="/WikiPedia-Clone-test-/src/arr.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h6 className="h6-botPar">From Wikipedia, The Free encyplopedia</h6> <br />
                    </div>
                </div>
            </div>
                <div className="secondMain-boxUnder">
                    <div className="SecondMain-boxUnderContainer">  
                        <h3 className="BoxUnder-header">Computer Science</h3> 
                        <a className="BoxUnder-a" href="#" style={{textDecoration: 'none'}}>[edit]</a>
                    </div>
                    <div className="listItemsSecondDiv">
                        <ul className="listParent">
                            <li>
                                <a href="#">Computer programming</a>
                                    , the process of creating and maintaining
                                    the source code of computer programs
                            </li>
                            <li>
                                <a href="#">Line coding</a>
                                    , in data storage
                            </li>
                            <li>
                                <a href="#">Source coding</a>
                                    , compression used in data transmission
                            </li>
                            <li>
                                <a href="#">Coding theory</a>
                            </li>
                            <li>
                                <a href="#">Channel coding</a>
                            </li>
                        </ul>
                    </div>
                    <div className="SecondMain-boxUnderContainer">  
                        <h3 className="BoxUnder-header">Other Uses</h3> 
                        <a className="BoxUnder-a" href="#" style={{textDecoration: 'none'}}>[edit]</a>
                    </div>
                    <div className="listItemsSecondDiv">
                        <ul className="listParent">
                            <li>
                                <a href="#">Coding (social skills)</a>
                                    , the process of creating and maintaining
                                    the source code of computer programs
                            </li>
                            <li>
                                <a href="#">Coding standart</a>
                                    of DNA in molecular biology
                            </li>
                            <li>
                                <a href="#">Source coding</a>
                                    , compression used in data transmission
                            </li>
                            <li>
                                <a href="#">Medical coding</a>
                                representation of medecine in coding
                            </li>
                            <li>
                                <a href="#">Metro/Retro coding</a>
                                in countires like India 
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="thirdMain-boxRightComponent">
                <div className="containerThird">
                    <div className="flexThrd"><p style={{fontWeight: 'bold'}}>Appearance</p><p>Hide</p></div>
                    <div>
                        <p className="pThirdTextCenter">Text</p>
                        <div className="buttonsThirdBox">
                            <div className="buttonsFlexBox"><button className="radioBtn"></button><p>Small</p></div>
                            <div className="buttonsFlexBox"><button className="radioBtn" style={{backgroundColor: 'lightblue'}}></button><p>Standart</p></div>
                            <div className="buttonsFlexBox"><button className="radioBtn"></button><p>Large</p></div>
                        </div>
                        <p className="pThirdTextCenter">Width</p>
                        <div className="buttonsThirdBox">
                            <div className="buttonsFlexBox"><button className="radioBtn" style={{backgroundColor: 'lightblue'}}></button><p>Standart</p></div>
                            <div className="buttonsFlexBox"><button className="radioBtn"></button><p>Wide</p></div>
                        </div>
                        <p className="pThirdTextCenter">Color (beta)</p>
                        <div className="buttonsThirdBox">
                            <div className="buttonsFlexBox"><button className="radioBtn"></button><p>Automatic</p></div>
                            <div className="buttonsFlexBox"><button className="radioBtn" style={{backgroundColor: 'lightblue'}}></button><p>Light</p></div>
                            <div className="buttonsFlexBox"><button className="radioBtn"></button><p>Dark</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WikiMain;