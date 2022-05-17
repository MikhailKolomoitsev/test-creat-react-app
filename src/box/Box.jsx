import React from 'react'
import { useState } from 'react'
import './Box.css'

const Box = ({ hovered }) => {
    return (
        <div
            className={`box ${hovered ? 'hovered' : ''}`}
        ></div>
    )
}

export default Box