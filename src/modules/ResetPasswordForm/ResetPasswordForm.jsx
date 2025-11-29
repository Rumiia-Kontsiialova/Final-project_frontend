import { useForm } from "react-hook-form";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        name="identifier"
        placeholder="Email or Username"
        rules={{ required: "Invalid email or username" }}
        error={errors.identifier}
      />
    
      <Button type="submit">Reset your password</Button>
    </form>
  );
};

export default LoginForm;