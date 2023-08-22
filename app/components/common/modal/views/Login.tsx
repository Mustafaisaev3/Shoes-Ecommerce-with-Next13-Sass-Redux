'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "@/app/components/UI/Button"
import Input from "@/app/components/UI/Input"
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation"
import { useUI } from '@/app/context/ui.context'

const Login = () => {
  const router = useRouter()
  const { closeModal } = useUI()
  const [isLoading, setIsLoading] = useState(false)
  
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        email: '',
        password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    })
    .then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Logged in!')
        router.refresh()
        closeModal()
      }

      if (callback?.error) {
        toast.error(callback?.error)
      }
    })
  }

  return (
    <div className="login">
        <div className="login__header">
            Login
        </div>
        <div className="login__content">
            <div className="login__top">
                <div className="title">
                    Welcome back!
                </div>
                <div className="subtitle">
                    Login to your account!
                </div>
            </div>
            <div className="login__form">
                <Input label="Email" id="email" register={register} errors={errors} disabled={isLoading} required />
                <Input label="Password" id="password" register={register} errors={errors} disabled={isLoading} required />
            </div>

            <div className="login__actions">
                <Button className="btn btn-main" title="Submit" width={'100%'} type='submit' onClick={handleSubmit(onSubmit)}/>

                <div className="line"></div>

                <div className="login__social-logins">
                    <Button className="btn btn-secondary" width={'100%'} title="Continue with Google" leftIcon={FcGoogle} onClick={() => signIn('google')} />
                    <Button className="btn btn-secondary" width={'100%'} title="Continue with GitHub" leftIcon={AiFillGithub} onClick={() => signIn('github')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login