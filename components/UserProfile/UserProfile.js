import React from 'react';

export default React.createClass({

    render() {

        let  {
            logout,
            username,
        } = this.props;

        if (!username) return null;

        return (
            <div>
                <div>
                    <button onClick={logout}>Logout</button>
                </div>
                <div>
                    Username: {username}
                </div>
            </div>
        );
    }
});
