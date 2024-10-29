import loginImg from "../assets/Images/login.webp"

import { useSelector } from "react-redux"
import Template from "../components/Login/Template";
const Login = () => {
  
  const { loading } = useSelector( (state) => state.auth ) ;
  // let loading = true ;

  return (

    loading ? (
      <div>loading.....</div>
    ) : 
    ( 
      <div>
        <Template
          title="Welcome Back"
          description1="Find your way today, discover more tomorrow, and navigate with confidence beyond. "
          description2="Location insights to future-proof your journey."
          image={loginImg}
          formType="login"
        />
      </div>
    )
  )
}

export default Login