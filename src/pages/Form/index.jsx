import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver }  from '@hookform/resolvers/yup'

const Form = () => {
  const schema = yup.object().shape({
    gitName: yup.string().required("Enter with your name"),
    email: yup.string().email().required("Enter with your email!"),
    password: yup.string().min(4).max(10).required("Enter with your password"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password dont match")
      .required("Confirm your password")
  });

  const { register, handleSubmit, formState: {errors}  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  }

  return(
    <div className="content">
      <Header title="Form"/>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto" >
        <div className="mb-6">
          <label htmlFor="gitName" className="block mb-2 text-sm font-medium text-gray-900 text-left">Github Name</label>
          <input type="text" {...register("gitName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" placeholder="John"/>
          <span className="float-left">{errors.gitName?.message}</span>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-left">email</label>
          <input type="text" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" placeholder="jhon@gmail.com"/>
          <span className="float-left">{errors.email?.message}</span>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-left">Password</label>
          <input type="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" placeholder="•••••••••"/>
          <span className="float-left">{errors.password?.message}</span>
        </div>
        <div className="mb-6">
          <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 text-left">Confirm password</label>
          <input type="password" {...register("confirm_password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white" placeholder="•••••••••"/>
          <span className="float-left">{errors.confirm_password?.message}</span>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default Form;