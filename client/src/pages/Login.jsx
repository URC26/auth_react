import { useState, useContext} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/appContext';

export default function Login() {
  const{handleLogin} = useContext(AppContext);

  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      });
      handleLogin(data)
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={loginUser} className='form-box'>
        <h2>Login</h2>
        <div className='input-box'>
          <label>Email:</label>
          <input type='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        </div>
        <div className='input-box'>
        <label>Password:</label>
        <input type='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
