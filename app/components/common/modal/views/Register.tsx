'use client'

import { useState } from "react"
import axios from "axios"
import Button from "@/app/components/UI/Button"
import Input from "@/app/components/UI/Input"
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useUI } from "@/app/context/ui.context"
import { signIn } from "next-auth/react"

const Register = () => {
  const { closeModal } = useUI()
  const [isLoading, setIsLoading] = useState(false)
  
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        closeModal()
        toast.success('You have successfully registered')
        // loginModal.onOpen()
      })
      .catch((err) => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="register">
        <div className="register__header">
            Register
        </div>
        <div className="register__content">
            <div className="register__top">
                <div className="title">
                    Welcome to Nike Store!
                </div>
                <div className="subtitle">
                    Create an Account!
                </div>
            </div>
            <div className="register__form">
                <Input label="Name" id="name" register={register} errors={errors} disabled={isLoading} required />
                <Input label="Email" id="email" register={register} errors={errors} disabled={isLoading} required />
                <Input label="Password" id="password" register={register} errors={errors} disabled={isLoading} required />
            </div>

            <div className="register__actions">
                <Button className="btn btn-main" title="Submit" width={'100%'} type='submit' onClick={handleSubmit(onSubmit)}/>

                <div className="line"></div>

                <div className="register__social-logins">
                    <Button className="btn btn-secondary" width={'100%'} title="Continue with Google" leftIcon={FcGoogle} onClick={() => signIn('google')}/>
                    <Button className="btn btn-secondary" width={'100%'} title="Continue with GitHub" leftIcon={AiFillGithub} onClick={() => signIn('github')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register