import React from 'react';

class NavBar extends React.Component {
    render(){
        return (
            <div className="Nav-Bar">
                <div className='Search-Box'>
                    <input></input>
                    <button>Search</button>
                </div>
            </div>
        );
    }
}

export default NavBar;
