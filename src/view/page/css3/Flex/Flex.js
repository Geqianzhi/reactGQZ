import React from 'react'
import './Flex.less'
export default function Flex(props) {
    console.log(props)
    return (
        <div className="flex">   
            <ul>
                <li>
                    <span className="item"></span>
                    <span className="item"></span>
                    <span className="item"></span>
                </li>
               
            </ul>
        </div>
    )
}
