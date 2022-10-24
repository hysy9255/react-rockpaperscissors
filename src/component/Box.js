import React from 'react'

const Box = (props) => {
    return (
        <div className="box">
            <div id="who">{props.title}</div>
            <div id="img_box" style={{
                border: "solid 10px " + props.statusColor,
                backgroundColor: props.statusColor
            }}>
                <img id="image" src={props.data.img} />
                <h1 style={{color:'white'}}>{props.status}</h1>
            </div>
        </div>
    )
}

export default Box

