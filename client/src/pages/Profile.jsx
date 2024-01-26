import React from 'react'
import NoPicture from "../assets/global/no-picture.png"
import CustomInput from '../components/Atoms/CustomInput';
import CustomLabel from '../components/Atoms/CustomLabel';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const profilePicture = user.photoURL;
    const Background = "https://i02.appmifile.com/882_operatorx_operatorx_opx/19/12/2022/def9436f6c0aa940d5a6b9c6dd79b49d.jpg"
  return (
    <div className='w-full h-[100vh] bg-background '>
        <div className='w-full h-[60%] bg-accent flex items-center justify-between' style={{backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPositionY: "top"}}>
            <div id='user-welcome' className='px-[250px]  h-max flex gap-8 items-center'>
                <div id='picture-wrapper' className='w-[100px] md:w-[170px] h-auto  '>
                <img className='bg-white object-fit border-4 border-white rounded-full' src={(profilePicture ? profilePicture : NoPicture)} alt="" />           
                </div>
                <div className='flex flex-col h-full text-white min-h-[170px] py-[20px] items-start'>
                    <p className='text-3xl font-bold'>Hi! Welcome, {user.fullname}</p>
                    <p className='text-xl py-[10px] font-normal'>Email: {user.email}</p>

                    </div>      
            </div>
            <div>

            </div>
        </div>
        <div className='flex flex-col p-10'>
            <h2 className='text-3xl font-bold'>Edit Info</h2>
            <form action="" className='w-[50%] flex flex-col'>
                <CustomLabel text="Name" id="name"/>
            <CustomInput intent="form" placeholder={user.fullname} id='name' type='text'/>
            <CustomLabel  text="Phone Number" id="phoneNumber"/>
            <CustomInput intent="form" placeholder={"Edit Number"} id='phonenumber' type='phone'/>
            </form>
            

        </div>
    </div>
  )
}

export default Profile