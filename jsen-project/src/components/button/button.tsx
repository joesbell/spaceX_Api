/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-15 10:36:23
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-15 11:07:02
 * @FilePath: /spaceX_Api/jsen-project/src/components/button/button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { MouseEventHandler } from 'react';
import './index.css'

interface childProps{
  type?:string,
  disabled?:boolean
  onClick?:MouseEventHandler<HTMLDivElement>,
  children:string
}
 const Button:React.FC<childProps>=(props)=>{
   const {type,onClick,disabled,children}=props;
   
    return (
        <div  onClick={onClick} className={`buttoBox ${type} ${disabled?'disabled':null}`}>
            {children}
        </div>
    )
}
export default Button