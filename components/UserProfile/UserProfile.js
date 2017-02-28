import React from 'react';

export default React.createClass({

    render() {

        let  {
            email,
            logout,
            profilePic,
            username,
        } = this.props;

        // returning null from a render method, will render nothing
        if (!username) return null;

        return (
            <div style={{ fontFamily: 'Raleway', margin: '0 16px' }}>                
                <div style={{ textAlign: 'right' }}>
                    <button onClick={logout}
                            style={{ backgroundColor: '#766E5C',
                                     color: '#ffffff',
                                     padding: '8px 32px',
                                     border: 'none',
                                     borderRadius: '4px',
                                     fontFamily: 'Raleway',
                                     fontSize: '14px' }}>LOGOUT</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: '#ffffff', lineHeight: '1.2em' }}>
                    <div style={{ width: '80px', height: '80px' }}>
                        <img src={profilePic} style={{ width: '100%', borderRadius: '50%', border: '3px solid #766E5C' }} />
                    </div>
                    <div style={{ flex: 1, marginLeft: '12px' }}>
                        <p style={{ fontWeight: 'bold' }}>{username}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        );
    }
});
