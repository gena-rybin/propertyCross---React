import React from 'react';

export const Logo = (props) => {
    if (props.imageSrc && props.imageSrc.length) {
        return (
            <img src={props.imageSrc} className="App-logo" alt="nestoria-logo" />
        );
    } else {
        return (
            <div className="App-logo"></div>
        )
    }
};
