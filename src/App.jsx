import React from 'react'
// import style from '~/App.css' // Use Local CSS Not import '~/App.css' 
import 'bootstrap/dist/css/bootstrap.css'; //this is how you import bootstrap
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/core/navbar/navbar'
import SideBar from './components/core/navbar/sidebar'
import Home from './components/home/home'
import About from './components/about/about'
import Team from './components/team/team'
import Faqs from './components/faqs/faqs'
import Sponsor from './components/sponsor/sponsor'
import SponsorFooter from './components/sponsor/sponsorfooter'
import ryeFont1 from './assets/font-family/Rye/Rye-Regular.woff';
import ryeFont2 from './assets/font-family/Rye/Rye-Regular.woff2';
import itimFont1 from './assets/font-family/Itim/Itim-Regular.woff';
import itimFont2 from './assets/font-family/Itim/Itim-Regular.woff2';



const Globalstyle = createGlobalStyle`

  body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

body::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

@font-face {
    font-family: 'Rye-Regular';
    src: url(${ryeFont1}) format('woff'),url(${ryeFont2}) format('woff2'); 
    font-style: normal;
    font-display: swap; 

}
@font-face {
    font-family: 'Itim-Regular';
    src: url(${itimFont1}) format('woff'),url(${itimFont2}) format('woff2'); 
    font-style: normal;
    font-display: swap; 

}
`

export default class App extends React.Component {
    //create ref for navgation bar
    navRefs = {
        home: React.createRef(),
        about: React.createRef(),
        team: React.createRef(),
        faqs: React.createRef()
    }

    render() {
        return (
            <React.Fragment>
                <Globalstyle />
                <Home ref={this.navRefs.home} />
                <About ref={this.navRefs.about} />
                <Team ref={this.navRefs.team} />
                <Faqs ref={this.navRefs.faqs} />
                {/* <Sponsor /> */}
                <SponsorFooter />
                <Navbar innerRefs={this.navRefs} />
                <SideBar innerRefs={this.navRefs} />
            </React.Fragment>
        )
    }
}