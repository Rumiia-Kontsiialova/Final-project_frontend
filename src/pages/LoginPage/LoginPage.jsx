import Button from "../../shared/components/Button/Button";
import InputForm from "../../shared/components/InputForm/InputForm";

const LoginPage = () => {
     return (
    <>
        <h1>LoginPage</h1>
        <InputForm>Username, or email</InputForm>
        <InputForm>Password</InputForm>
        <Button>Log in</Button>
    </>
  )

}

export default LoginPage