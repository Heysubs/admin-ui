import FormSignIn from "../components/Fragments/FormSignIn";
import AuthLayout from "../components/Layout/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;