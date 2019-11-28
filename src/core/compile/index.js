import React from 'react';
import { getJsxClass } from "../../help";

const Compile = (json) => {
    let type = getJsxClass(json.type)
    let props = json.props
    let children = []

    if (json.children) {
        let len = json.children.length;
        let child = json.children;
        for (var i = 0; i < len; i++) {
            let childJSX = Compile(child[i])
            children.push(childJSX)
        }
    }

    return React.createElement(type, { ...props }, ...children)
}

export {
	Compile
}