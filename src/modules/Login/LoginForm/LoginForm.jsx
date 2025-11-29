import { useForm } from "react-hook-form";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    mode: "onSubmit",       // ошибки показываются после submit
    defaultValues: {        // лучше явно задать пустые значения
      email: "",
      password: ""
    }
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit">Log in</Button>
    </form>
  );
};

export default LoginForm;
