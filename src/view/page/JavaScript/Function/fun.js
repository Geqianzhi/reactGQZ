import React from 'react'
import instance from '../../../../untils/axios';
import { Button } from 'antd'
export default function fun() {
    function getAjax(){
        instance.post('app/appofficialsenddeliverinfo/getStatistic').then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <Button type="primary" onClick={getAjax}>点击</Button>
        </div>
    )
}
