/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-15 16:57:54
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-15 17:02:07
 * @FilePath: /spaceX_Api/jsen-project/src/components/form/form.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useCallback} from 'react';
import './index.css'
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


interface IFormValues {
    mission_name: string;
    launch_date_local: string;
    site_name_long: string
    video_link: string
    rocket_name: string
    details: string
  }
  
  type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
  };
  
  // The following component is an example of your existing Input Component
  const Input = ({ label, register, required }: InputProps) => (
    <div style={{margin:'5px 0'}}>
      <label style={{width:'140px',display:'inline-block',textAlign:'right'}}>{label}</label>:
      <input {...register(label, { required })} />
    </div>
  );

const Form:React.FC=()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormValues>();
    const onSubmit: SubmitHandler<IFormValues> = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="mission_name" register={register} required />
        <Input label="launch_date_local" register={register} required />
        <Input label="site_name_long" register={register} required />
        <Input label="video_link" register={register} required />
        <Input label="rocket_name" register={register} required />
        <Input label="details" register={register} required />
        </form>
    )
  }
  export default Form