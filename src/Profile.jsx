import { useContext, useState } from "react";
import UserContext from "./Contexts/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash} from "@fortawesome/free-regular-svg-icons";
function Profile() {
  const { Setusername, SetPassword } = useContext(UserContext);
  const [Icon , SetIcon] = useState(faEye);
  const [type , SetType] = useState('password');

  const handleSubmit = (e) =>{
    e.preventDefault();
    Setusername(user.value);
    SetPassword(password.value);
    user.value = '';
    password.value = '';
  }

  const showandHide =() =>{
   if(type == "password"){
    SetIcon(faEyeSlash);
    SetType("text")
   }
   else{
    SetIcon(faEye);
    SetType("password")
   }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        id="user"
      />
      <div className="pass">
      <input
        type={type}
        placeholder="Password"
        id="password"
      />
      <FontAwesomeIcon className="Eye-Icon" icon={Icon} onClick={showandHide} />
      </div>

      <button onClick={handleSubmit} className="btn-sub">Submit</button>
    </div>
  );
}

export default Profile;
