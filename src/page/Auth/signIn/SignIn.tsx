import { useNavigate } from "react-router-dom";
import { request } from "../../../utils/reques";
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate()
  const onFormSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
         e.preventDefault()
         const form = e.currentTarget;
         const formData = new FormData(form);
         const loginData:Record<string,any> ={}
         formData.forEach((value,key) =>{
          loginData[key] = value;
          console.log(value);
          
         })
         try{
          const res = await request.post('sign-in',loginData)
          localStorage.setItem('token',res.data.token)
          navigate('/layout')
         }catch(error){
          console.log(error);
          alert('An error occurred during sign up. Please try again.');
          
         }
  }
  return (
       <div className="container">
        <div className="row">
              <div className="row-container">
              <div className="card-header">
                <h2>Sign In Page</h2>
              </div>
                <form
                  onSubmit={onFormSubmit}
                  className="signUp__form"
                >
                
                  <input
                    placeholder="email..."
                    type="email"
                    name="email"
                    className="form-control"
                    id="formEmail"
                  />
                  <input
                    placeholder="password..."
                    name="password"
                    type="password"
                    className="form-control"
                    id="formPassword"
                  />
                  <button
                    type="submit"
                    className="signUp__btn"
                  >
                    Submit
                  </button>
                </form>
              </div>
              </div>
            </div>
  )
}

export default SignIn