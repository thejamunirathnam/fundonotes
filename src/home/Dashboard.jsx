import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../home/Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="header">
        <div>
          <div className="menudiv">
              <DehazeIcon className="menuicon"/>
              <div>
              <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" className="keepimg" width="40" height="40"  alt="Keep image" />
              <span className="learn keepspan">Fundoo</span>
              </div>
          </div> 
        </div>
        <div className="searchheader">
           <div className="headerinput">
             <SearchIcon className="menuicon"/>
             <div className="searchinput">
               <input className="inputbox"/>
             </div>
             <CloseIcon className="menuicon"/>
           </div>
        </div>
        <div className="hsetting"> 
           <div>
           <RefreshIcon className="menuicon"/>
           <ViewStreamIcon className="menuicon"/>       
           <SettingsIcon className="menuicon"/>      
           </div>
        </div>
        <div> 
           <div>   
           <AppsIcon className="menuicon"/> 
           <AccountCircleIcon className="menuicon"/>    
           </div>
        </div>
    </div>
  )
}
