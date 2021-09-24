import React from 'react';

const Photo = (props) => {
    return (
        <div>
           <h2>Title: {props.title}</h2>
           <p>Id: {props.id}</p>
        </div>
    );
};

export default Photo;