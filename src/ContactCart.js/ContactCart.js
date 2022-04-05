import { useState } from "react";


const ContacCaert = (props) => {
    console.log(props)
const [showAge , setShowAge] = useState(false)

    return (
       
   <div className='contact-card'>
            <img
                src={props.avatarUrl}
                width={150}
                alt="profile">
            </img>
            <div className='user-details'>
                <p> Name: {props.name} {props.lname}  </p>
                <p> Email: {props.email}</p>
               {/* {showAge ? <p> ageL 30</p> : null} if true return age otherwise null  */}
               <button onClick={()=>setShowAge(!showAge)}> Show age </button>
               { showAge && <p> {props.age}</p>}
            </div>
        </div>

    );

}

export default ContacCaert