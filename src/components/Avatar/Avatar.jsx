import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {
    const style = {
        backgroundColor:"#009dff",
        padding: `${"7px"} ${"10px"}`,
        color: color || 'black',
        borderRadius:"50%",
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none"
    }

    return (
        <div style={style}>
            { children }
        </div>
    )
}

export default Avatar
