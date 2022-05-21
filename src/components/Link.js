import React from 'react';
import './styles/components/link.css';

export default function Button(props) {
    return (
        <div className="buttonWrapper">
            <a className="innerLink" href={props.location}>{props.children}</a>
        </div>
    );
}