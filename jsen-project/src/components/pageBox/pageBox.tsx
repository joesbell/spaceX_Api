/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-14 16:16:20
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-15 11:02:06
 * @FilePath: /spaceX_Api/jsen-project/src/components/pageBox/pageBox.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useCallback} from 'react';
import Button from '../button/button';
import './index.css'

interface childProps{
  limit:number,
  offset:number,
  changePage:Function,
  changeSize:Function
}
 const PageBox:React.FC<childProps>=(props)=>{
   const {limit,offset,changePage,changeSize}=props;
   const prePage=useCallback(()=>{changePage(offset-limit)},[changePage,limit,offset])
   const nextPage=useCallback(()=>{changePage(offset+limit)},[changePage,limit,offset])
   const changePSize=useCallback((e:any)=>{changePage(0);changeSize(parseInt(e.target?.value))},[changePage,changeSize])
    return (
        <div className='pageBox'>
          <Button type='normal' disabled={offset===0}  onClick={prePage}>prePage</Button>
          <Button type='normal'   onClick={nextPage}>nextPage</Button>
        <select name="pageSize" id="p-select" value={limit} onChange={changePSize} >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        </div>
    )
}
export default PageBox