import React from 'react'
import instance from '../../../../untils/axios';
import { Button } from 'antd'
export default function fun() {
    function getAjax(){
        instance.get('http://apiv2.vmovier.com/api/post/getPostInCate?cateid=0&p=1').then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <Button type="primary" onClick={getAjax}>点击</Button>
        </div>
    )
}
