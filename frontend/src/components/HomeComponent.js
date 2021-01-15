import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Promo from './PromoComponent';

class Home extends Component{
    render(){
        return(
            <div>
                <Promo/>
                <Directory />
            </div>
        );
    }
}


export default Home;
