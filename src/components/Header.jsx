import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
    
    const renderLinks = () => {
        return !props.auth ? 
        (
            <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/signin'>Sign In</Link>
            </div>
        )
        :(
            <div>
                <Link to='/signout'>Sign Out</Link>
                <Link to='/feature'>Feature</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            { renderLinks()}
        </div>
    );
}
const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps,{})(Header);