import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
    render(){
        return (
            <div>
                It is a feature page!
            </div>
        );
    }
}
export default requireAuth(Feature);