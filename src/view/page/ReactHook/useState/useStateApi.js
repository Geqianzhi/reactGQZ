import React,{useState} from 'react';
import {Button} from 'antd';
export default function useStateApi() {
    const [btnText,setBtnText] = useState('useStateApi')
    
    const handelClick = () =>{
        console.log('11111111111111111')
        setBtnText("useStateApi11111111")
    }
    return (
        <div>
            <Button type="primary" onClick={()=>handelClick}>{btnText}</Button>
        </div>
    )
}
