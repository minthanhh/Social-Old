import { useCallback, useState } from 'react';
import InputForm from './InputForm/InputForm';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button/Button';

const Auth = () => {
   const [variant, setVariant] = useState('login');
   // const [isLoading, setIsLoading] = useState(false);

   const {
      reset,
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         usernameOrEmail: '',
         password: '',
         username: '',
         email: '',
         confirm: '',
      },
      shouldUnregister: true,
   });

   const toggleVariant = useCallback(() => {
      reset();
      setVariant((current) => (current === 'login' ? 'register' : 'login'));
   }, [reset]);

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      console.log(data);
   };

   return (
      <div className="flex h-full w-full items-center">
         <div className="relative hidden h-full w-1/3 flex-shrink md:block">
            <img
               className="absolute inset-0 h-full w-full object-cover"
               src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
               alt=""
            />
         </div>
         <div className="w-full flex-1">
            <div className="flex flex-col items-center justify-center gap-5">
               <h2 className="text-bold mb-10 text-4xl">
                  {variant === 'login' ? 'Login' : 'Regiser'}
               </h2>

               {variant === 'login' ? (
                  <div className="flex w-full flex-col items-center justify-center">
                     <InputForm
                        label="Email or username:"
                        // disabled={isLoading}
                        placeholder="Enter your username or password"
                        type="text"
                        icon={HiOutlineMail}
                        id="usernameOrEmail"
                        register={register}
                        errors={errors}
                        medium
                        required
                     />
                     <InputForm
                        label="Password:"
                        // disabled={isLoading}
                        placeholder="Please enter a password"
                        type="password"
                        icon={RiGitRepositoryPrivateLine}
                        id="password"
                        register={register}
                        errors={errors}
                        required
                        medium
                        displayToggle
                     />
                  </div>
               ) : (
                  <div className="flex w-full flex-col items-center justify-center">
                     <InputForm
                        label="Username:"
                        // disabled={isLoading}
                        placeholder="Enter your username or password"
                        type="text"
                        icon={FaRegCircleUser}
                        id="username"
                        register={register}
                        medium
                        errors={errors}
                        required
                     />
                     <InputForm
                        label="Email:"
                        // disabled={isLoading}
                        placeholder="Please enter a password"
                        type="email"
                        icon={HiOutlineMail}
                        id="email"
                        register={register}
                        errors={errors}
                        medium
                        required
                     />

                     <InputForm
                        label="Password:"
                        // disabled={isLoading}
                        placeholder="Enter your username or password"
                        type="password"
                        icon={RiGitRepositoryPrivateLine}
                        id="password"
                        register={register}
                        errors={errors}
                        medium
                        displayToggle
                        required
                     />

                     <InputForm
                        label="Cofirm Password:"
                        // disabled={isLoading}
                        placeholder="Please enter a password"
                        type="password"
                        icon={RiGitRepositoryPrivateLine}
                        id="confirm"
                        register={register}
                        errors={errors}
                        medium
                        required
                        displayToggle
                     />
                  </div>
               )}

               <Button label="Login" onClick={handleSubmit(onSubmit)} />

               <p className="flex items-center gap-1">
                  Already have an account?
                  <strong
                     className="default-animate cursor-pointer hover:text-primary"
                     onClick={toggleVariant}
                  >
                     {variant === 'login' ? 'Login' : 'Register.'}
                  </strong>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Auth;
