import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../store/users/usersSlice";
import { useEffect } from "react";

const  User=()=> {
const {users,isLoading,error}=useSelector((state)=>state.users)
const dispatch = useDispatch()

useEffect (()=>{
    dispatch(getAllUsers())
},[])

if(isLoading){
    return(
        <div>
            Is Loading...
        </div>
    )
}

if(error){
    return(
        <div>
            Sorry an error happened
        </div>
    )
}
  return (
    <div>
        {
            users.map((user)=>{
                return(
                    <ul>
                        <li key={user.index}>
                            {`${user.first} ${user.last}`}
                        </li>
                    
                    </ul>
                )
            })
        }
    </div>
  )
}

export default User