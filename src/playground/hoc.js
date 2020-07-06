// Higher Order Component (HOC) - A component that renders another component
// Resuse code
// Render Highjacking
// Prop manipulation
// Abstract state

import React from 'react';
import reactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAuthWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrappedComponent {...props} />
                ) : (
                    <p>Please Log in!</p>
                )
            }
        </div>
    );
};

const AuthInfo = withAuthWarning(Info);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.admin && <p>This is private info, please don't share</p> }
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

// const AdminInfo = withAdminWarning(Info);

//reactDOM.render(<AdminInfo isAdmin={false} info="There are details" />, document.getElementById('app'));
reactDOM.render(<AuthInfo isAuthenticated={false} info="There are details" />, document.getElementById('app'));