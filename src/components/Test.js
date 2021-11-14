import React from "react";
import {Spring} from "react-spring"

export default function Test() {
    return (
        <Spring
            from = {{opacity = 0}}
            to = {{opacity = 1}}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Test</h1>
                        <p>lorem ipsfmfdsmfsfsdfsd</p>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const  c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}
