import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

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
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default RegisterForm;