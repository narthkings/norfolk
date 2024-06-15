import PrimaryBtn from '@/components/app-button/PrimaryBtn';
import AppText from '@/components/app-text';
import InputField from '@/components/input';
import AuthLayout from '@/components/layouts/AuthLayout';
import { useLoginMutation } from '@/services/mutations/auth.mutation';
import { LoginType } from '@/types';
import { LoginSchema } from '@/utils/schema';
import { ErrorToast } from '@/utils/toast';
import { Box, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { configOptions } from '@/services/config';

const Home = () => {
  const token = configOptions()
  const router = useRouter()
  const { mutateAsync, isPending } = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  useEffect(() => {
    // redirect to home if already logged in
    if (token) router.push('/customers')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async (data: LoginType) => {
    try {
      const req = await mutateAsync(data)
      // toast.success(req.data.message)
      router.push('/customers')
      sessionStorage.setItem('admin', JSON.stringify(req.data.token))
    } catch (error: any) {
    }
  }
  return (
    <Box p={'2rem'} boxShadow={
      " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
    }>
      <Flex direction={'column'} alignItems={'center'}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Box mb={'2rem'}>
            <AppText textAlign={'center'} variant={'md'} fontWeight={'bold'}>
              Login
            </AppText>
            <AppText mt={'.7rem'} textAlign={'center'} fontWeight={'normal'}>
              Enter your credentials to access your account
            </AppText>
          </Box>


          <InputField
            label="Email"
            {...register("email")}
            placeholder='jondoe@ymail.com'
            errorMessage={errors.email?.message}
          />
          <InputField
            type='password'
            label="Password"
            {...register("password")}
            placeholder='****'
            errorMessage={errors.password?.message}
          />
          <PrimaryBtn isLoading={isPending} type='submit' size={"lg"} width={'100%'} label="Login" onClick={() => { }} />
        </form>
      </Flex>
    </Box>
  )
}

Home.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;
Home.requireAuth = false;
export default Home