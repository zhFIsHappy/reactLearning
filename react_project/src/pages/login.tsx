import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
export const Login = () =>{

    const navigate = useNavigate();
    const signInWithGoogle = async () =>{
        // user login with google information , and information will be send back to result 
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        // redirect back to homepage
        navigate('/')
    };

    return <div><p>Sign in with Google to Continue </p>
    <button onClick={signInWithGoogle}>Sign in with Google </button></div>
    
}