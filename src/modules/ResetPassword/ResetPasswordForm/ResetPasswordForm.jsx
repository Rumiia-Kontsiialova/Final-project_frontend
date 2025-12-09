import { useForm } from "react-hook-form";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";
import styles from "./ResetPasswordForm.module.css"

const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    mode: "onSubmit",       // ошибки показываются после submit
    defaultValues: {        // лучше явно задать пустые значения
      identifier: ""   // одно поле, куда можно вводить и email, и username, то ему нужно дать ОДНО имя — например "identifier"
    }
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
      <TextField
        register={register}
        name="identifier"
        placeholder="Email or Username"
        rules={{ required: "Invalid email or username" }}
        error={errors.identifier}
      />
    
      <Button type="submit" className={styles.resetBtn}>Reset your password</Button>
    </form>
  );
};

export default LoginForm;