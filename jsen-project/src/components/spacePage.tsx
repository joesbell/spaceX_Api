/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-13 15:53:30
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-15 17:19:58
 * @FilePath: /spaceX_Api/jsen-project/src/components/spacePage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState,useEffect,useCallback, useRef} from 'react';
import { useQuery } from '@apollo/client';
import './index.css'
import {PastLaunchData,LaunchInventory,PastLaunchVars,GET_PAST_LAUNCH} from '../TInit/PastLaunches';
import PageBox from './pageBox/pageBox';
import Button from './button/button';
import L_Form from './form/form';



export const  SpacePage:React.FC=()=>{

  
  const [limit, setLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const [visiabal,setVis]=useState<boolean>(false)
  const { loading, data,error } = useQuery<PastLaunchData, PastLaunchVars>(
    GET_PAST_LAUNCH,
    { variables: { limit,offset} }
  );

  const changePage=useCallback((pnum:number)=>setOffset(pnum),[])

  const changeSize=useCallback((psize:number)=>setLimit(psize),[])

  const changeModal=(vis:boolean)=>{
    setVis(vis)
  }
  const launchForm=useRef<any>(null);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className='speaxWapper'>
        <h3 style={{textAlign:'center',margin:'10px'}}>PastLaunch List</h3>
        <Button type='normal' onClick={()=>changeModal(true)}>next Launch</Button>
        <table className='pure-table pure-table-bordered'>
          <thead>
            <tr>
              <th>id</th>
              <th>mission_name</th>
              <th>launch_date_local</th>
              <th>launch_site_name_long</th>
              <th>video_link</th>
              <th>rocket_name</th>
              <th>launch_success</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {data && data.launchesPast.map(inventory => (
              <tr key={inventory.id}>
                <td>{inventory.id}</td>
                <td>{inventory.mission_name}</td>
                <td>l{inventory.launch_date_local}</td>
                <td>{inventory.launch_site.site_name_long}</td>
                <td>{inventory.links.video_link}</td>
                <td>{inventory.rocket.rocket_name}</td>
                <td>{inventory.launch_success+''}</td>
                <td>{inventory.details}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <PageBox  limit={limit} offset={offset} changePage={changePage} changeSize={changeSize} />
        {
          visiabal?
          <div className='m_bg'>
              <div className='m_point'>
                  <p style={{padding:'10px',textAlign:'left'}}>next Launch</p>
                  <hr></hr>
                  <div className='m_content'>
                    <L_Form ref={launchForm}/>
                  </div>
                  <div className='m_pop'>
                  <Button type='normal' onClick={handleSubmit(onSubmit)}>submit</Button>
                  <Button onClick={()=>changeModal(false)}>cancel</Button>
                  </div>
              </div>
          </div>
          :null
        }
    </div>
  );
}