import React from 'react';


class Header extends React.Component{
    render(){
        const style={
            fontSize: 18, 
            fonrFamily: "Arial"  
        }
      return(
        <div>
          <h1 style={style}>SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO</h1>
        </div>
      );
    }
  }
export default Header;