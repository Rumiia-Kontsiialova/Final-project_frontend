import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";
import logo from "../../../assets/png/logo.png";
import styles from "./RegisterForm.module.css";

const RegisterForm = ({requestErrors, isSubmitSuccess, submitForm}) => {
  const { register, handleSubmit, setError, reset, formState: { errors }} = useForm({
    mode: "onSubmit",       // ошибки показываются после submit
    defaultValues: {        // лучше явно задать пустые значения
      email: "",
      fullname: "",
      username: "",
      password: ""
    }
  });

  useEffect(() => {
    if(requestErrors) {
      for(const key in requestErrors) {
        setError(key, {
          message: requestErrors[key]
        })
      }
    }
  }, [requestErrors, setError])

  useEffect(() => {
    if(isSubmitSuccess) {
      reset()
    }
  }, [isSubmitSuccess, reset])

  const onSubmit = (values) => {
    console.log("FORM VALUES:", values);
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
      <img src={logo} alt="logo_login" className={styles.img_logo} />
      <h3>Sign up to see photos and videos <br /> from your friends.</h3>
      <TextField
        register={register}
        name="email"
        placeholder="Email"
        rules={{ required: "Email required" }}
        error={errors.email}
      />
      <TextField
        register={register}
        name="fullname"
        placeholder="Fullname"
        rules={{ required: "Fullname required" }}
        error={errors.fullname}
      />
      <TextField
        register={register}
        name="username"
        placeholder="Username"
        rules={{ required: "This required" }}
        error={errors.username}
      />
      <TextField
        register={register}
        name="password"
        placeholder="Password"
        type="password"
        rules={{ required: "Password required" }}
        error={errors.password}
      />
      <p>
        People who use our service may have uploaded <br /> your contact information to Instagram.
        <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">
          Learn more
        </a>
      </p>

      <p>
        By signing up, you agree to our{' '}
        <a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer">Terms</a>,{' '}
        <a href="https://about.instagram.com/data-policy?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Privacy <br/>Policy</a> 
        {' '}and {' '}
        <a href="https://privacycenter.instagram.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Cookies Policy</a>.
      </p>

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default RegisterForm;