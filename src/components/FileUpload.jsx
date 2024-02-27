import React, { useState } from 'react'

import { Dialog } from 'primereact/dialog';

import { InputText } from 'primereact/inputtext';
import profile from "../assets/profile/profile.png"







const FileUpload = () => {
    const [image, setImage] = useState("")
    const [displayBasic,setDisplayBasic] =useState(false)
 
    return (
        <div className='profile_img text-center p-4'>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                <img  src={profile}
                style={{width:"200px",
                height:"200px",borderRadius:"50%",
                objectFit:"cover",
                border:"4px solid green"}}/>
<label htmlFor='' className='mt-3 font-semibold text-5xl'>
    kunaldas
</label>
                <InputText type='file'
                    accept='/image/*'
                    onChange={(e) => {
                        const file = e.target.files[0]
                        if (file && file.type.substring(0, 5) === "image") {
                            setImage(file)
                        } else {
                            setImage(null)
                        }
                    }}

                />
            </div>
        </div>
    )
}

export default FileUpload
