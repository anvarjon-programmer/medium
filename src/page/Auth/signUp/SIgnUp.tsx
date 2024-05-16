/** @format */

import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import { request } from '../../../utils/reques';
const SIgnUp = () => {
  const navigate = useNavigate();

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const loginData: Record<string, any> = {};
    formData.forEach((value, key) => {
      loginData[key] = value;
      console.log(value);
    });

    try {
      const res = await request.post('sign-up', loginData);
      localStorage.setItem('token', res.data.token);
      navigate('/signIn');
    } catch (err) {
      console.error('Error during sign up:', err);
      alert('An error occurred during sign up. Please try again.');
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-header">
                <h2>Sign Up Page</h2>
              </div>
              <div className="card-body">
                <form
                  onSubmit={onFormSubmit}
                  className="signUp__form"
                >
                  <input
                    placeholder="Name..."
                    name="bio"
                    type="text"
                    className="form-control"
                    id="formBio"
                  />
                  <input
                    placeholder="city..."
                    name="city"
                    type="text"
                    className="form-control"
                    id="formCity"
                  />
                  <input
                    placeholder="email..."
                    type="email"
                    name="email"
                    className="form-control"
                    id="formEmail"
                  />
                  <input
                    placeholder="nickName..."
                    type="text"
                    name="nickName"
                    className="form-control"
                    id="formNickName"
                  />
                  <input
                    placeholder="password..."
                    name="password"
                    type="password"
                    className="form-control"
                    id="formPassword"
                  />
                  <input
                    placeholder="phone..."
                    name="phone"
                    type="text"
                    className="form-control"
                    id="formPhone"
                  />
                  <input
                    placeholder="seconsName..."
                    name="secondName"
                    type="text"
                    className="form-control"
                    id="formSecondName"
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
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
