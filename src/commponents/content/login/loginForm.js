import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        reset()
    }

   const [err, setErr] = useState(false)

    
    return <div className="loginForm">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
            <div>First Name:</div>    
            <input 
            {...register("email",{
                required: "Введите поле",
                minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                }
            })}
            />
            </label>
            <div className="err">
            {errors?.email && <p>{errors?.email?.message || 'erere'}</p> }
            </div>
            <div>
            <label>
            <div>Password:</div>
            <input 
            {...register("password",{
                required: "Введите поле",
                minLength: {
                    value: 5,
                    message: 'Минимум 5 символов'
                }
            })}
            type='password'
            />
            </label>
            </div>
            <div className="err">
            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
            </div>
            <div className="err">{err && 'Email or Password is Wrong'}</div>
            <input type="submit" disabled={!isValid} onClick={() => setErr(true)}/>
            
        </form>
    </div>
}






export default LoginForm;