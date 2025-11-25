import Button from "../../shared/components/Button/Button";
import InputForm from "../../shared/components/InputForm/InputForm";

const SignupPage = () => {
    return (
    <>
        <h1>SignupPage</h1>
        <InputForm>Email</InputForm>
        <InputForm>Full Name</InputForm>
        <InputForm>Username</InputForm>
        <InputForm>Password</InputForm>
        <Button>Sign up</Button>
        <p>
            By signing up, you agree to our{' '}
            <a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer">Terms</a>
            ,{' '}
            <a href="https://about.instagram.com/data-policy?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            , and{' '}
            <a href="https://privacycenter.instagram.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Cookies Policy</a>.</p>

    </>
  )

}

export default SignupPage