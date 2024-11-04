import Button from "../Elements/Button/index";
import CheckBox from "../Elements/CheckBox/index";
import LabeledInput from "../Elements/LabeledInput/Index";
import { Link } from 'react-router-dom'

const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      
      {/* Password Field */}
      <div className="mb-6 relative">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
        <Link 
          to="/forgot-password" 
          className="absolute right-0 top-2 transform -translate-y-1/2 text-primary text-sm font-medium"
        >
          Forgot Password?
        </Link>
      </div>
      
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      
      <Button variant="bg-primary w-full text-white" type="submit" >
        Login
      </Button>
    </form>
  );
};

export default FormSignIn;