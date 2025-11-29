import { useForm } from "react-hook-form";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

const SignUpForm = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    mode: "onSubmit",       // ошибки показываются после submit
    defaultValues: {        // лучше явно задать пустые значения
      email: "",
      fullname: "",
      username: "",
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
        rules={{ required: "This email is already exists" }}
        error={errors.email}
      />
      <TextField
        register={register}
        name="fullname"
        placeholder="Fullname"
        rules={{ required: "Fullname is already exists" }}
        error={errors.fullname}
      />
      <TextField
        register={register}
        name="username"
        placeholder="Username"
        rules={{ required: "This username is already taken" }}
        error={errors.username}
      />
      <TextField
        register={register}
        name="password"
        placeholder="Password"
        type="password"
        rules={{ required: "Invalid email or password" }}
        error={errors.password}
      />

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default SignUpForm;