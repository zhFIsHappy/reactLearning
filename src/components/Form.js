import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {
    const schema = yup.object().shape({
        fullName : yup.string().required("Full name required"),
        email : yup.string().email().required(),
        age : yup.number().positive().integer().min(18).required(),
        password : yup.string().required().min(4).max(20),
        confirmPassword : yup.string().oneOf([yup.ref("password"), null], "Password don't match"), // same as password
    })

    const {register, handleSubmit, formState : {errors }} = useForm({
        resolver : yupResolver(schema),
    });

    const onSubmit = () =>{
        console.log("ddd");
    }
return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};