import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";
import logo from "../../../assets/png/logo.png";
import styles from "./LoginForm.module.css"

const LoginForm = ({requestErrors, isSubmitSuccess, submitForm}) => {
  const { register, handleSubmit, setError, reset, formState: { errors }} = useForm({
    mode: "onSubmit",       // ошибки показываются после submit
    defaultValues: {        // лучше явно задать пустые значения
      email: "",
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
          <TextField
            register={register}
            name="email"
            placeholder="Username, or email"
            rules={{ required: "Invalid email or password" }}
            error={errors.email}
          />
          <TextField
            register={register}
            name="password"
            placeholder="Password"
            type="password"
            rules={{ required: "Invalid email or password" }}
            error={errors.password}
          />
          <Button type="submit">
            Log in
          </Button>

          <div className={styles.orBlock}>
            <div className={styles.line}></div>
              <span>OR</span>
            <div className={styles.line}></div>
          </div>
     
          <Link to="/resetpassword" className={styles.forgot}>Forgot password?</Link>
        </form>

  );
};

export default LoginForm;
