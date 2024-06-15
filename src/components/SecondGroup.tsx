import { addNewGroup } from '@/utils/schema'
import { Box, Flex } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import PrimaryBtn from './app-button/PrimaryBtn'
import OutlineBtn from './app-button/OutlineBtn'
import InputField from './input'
import { useCreateGroupMutation } from '@/services/mutations/group.mutation'
import { ICreateGroup } from '@/types'

type Props = {
    onGroupClose: () => void
    setSelectionType: React.Dispatch<React.SetStateAction<string>>
}
const SecondGroup = ({ onGroupClose, setSelectionType }: Props) => {
    const { isPending, mutateAsync } = useCreateGroupMutation()
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addNewGroup)
    })
    const addGroup = async (data: ICreateGroup) => {
        try {
            await mutateAsync(data.groupName)
            reset()
            onGroupClose()
            setSelectionType('type1')
        } catch (error) {

        }
    }
    return (
        <form onSubmit={handleSubmit(addGroup)}>
            <Box mt={'1rem'}>
                <InputField
                    label="Group Name"
                    placeholder="Nasa"
                    {...register("groupName")}
                    errorMessage={errors.groupName?.message}
                />
            </Box>
            <Flex justifyContent={'center'} gap={5} mt={'2rem'}>
                <OutlineBtn size={"lg"} width={'100%'} label="Cancel" onClick={onGroupClose} />
                <PrimaryBtn size={"lg"} width={'100%'} label="Add Customers" isLoading={isPending} type='submit' />
            </Flex>
        </form>
    )
}

export default SecondGroup