import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Promo from './PromoComponent';
import News from './NewsComponent';

class Home extends Component{
    render(){
        return(
            <div>
                <Promo/>
                <Directory />
                <News />
            </div>
        );
    }
}


export default Home;
