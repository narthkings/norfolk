import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import { DeleteIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, IconButton, Stack, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import AppText from "@/components/app-text";
import { TableColumn } from "react-data-table-component";
import PrimaryBtn from "@/components/app-button/PrimaryBtn";
import OutlineBtn from "@/components/app-button/OutlineBtn";
import { ICreateAdmin, IRoles } from "@/types";
import Table from "@/components/Table";
import styles from "@/utils/table-styles";
import MessageModal from "@/components/Modal/MessageModal";
import InputField from "@/components/input";
import { useForm } from "react-hook-form";
import { newMemberSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import AppSelect, { SelectProps } from "@/components/app-select";
import { OnChangeValue, SingleValue } from "react-select";
import { useCreateAdminMutation, useDeleteAdmin, useGetAllAdmins } from "@/services/mutations/admin.mutation";
import { getRole } from "@/utils/getColor";
import toast from "react-hot-toast";

const Settings = () => {
    const [id, setId] = useState<string>('')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: DeleteOnOpen, onClose: DeleteOnClose } = useDisclosure();
    const { data: admins, isLoading: isLoadingAdmin } = useGetAllAdmins()
    const { mutateAsync, isPending } = useCreateAdminMutation()
    const { mutateAsync: deleteMember, isPending: deleteLoading } = useDeleteAdmin()

    const {
        reset,
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(newMemberSchema),
    });

    const handleRole = (newValue: OnChangeValue<SelectProps, false>) => {
        setValue('adminRole', newValue?.value as string);
    };

    const columns: TableColumn<ICreateAdmin>[] = [
        {
            name: "Name",
            sortable: true,
            cell: (row: ICreateAdmin) => (
                <>
                    <Stack direction={"row"} align={"center"} gap={3}>
                        <Avatar size='md' name={row?.fullName} />
                        <Box>
                            <AppText fontWeight="bold" variant={"x_small"}>{row?.fullName}</AppText>
                            <AppText mt={1} fontWeight="normal" variant={"x_small"}>{row?.email} </AppText>
                        </Box>
                    </Stack>

                </>
            ),
        },
        {
            name: "Date Added",
            center: true,
            sortable: true,
            cell: (row: ICreateAdmin) => {
                const da = new Date(row?.createdAt as Date)
                const date = new Intl.DateTimeFormat('en-GB').format(da)
                return (
                    <AppText textAlign={"right"} variant={"xx_smallest"}>
                        {date}
                    </AppText>
                )
            },
        },
        {
            name: "Role",
            center: true,
            sortable: true,
            cell: (row: ICreateAdmin) => {
                const role = getRole(row?.role as IRoles)
                return (
                    <Tag borderRadius={"2rem"} size={"sm"} variant="subtle" bgColor={role?.color}>
                        <TagLabel p={1}>
                            <AppText color={'#fff'} variant={"xx_smallest"}>{role?.name}</AppText>
                        </TagLabel>
                    </Tag>
                )
            },
        },
        {
            name: "Actions",
            sortable: true,
            center: true,
            cell: (row: ICreateAdmin) => {

                return (
                    <IconButton
                        onClick={() => {
                            console.log(row?.id)
                            setId(row?.id as string)
                            DeleteOnOpen()
                        }}
                        border={'1px solid #E4E7EC'}
                        colorScheme='grey'
                        aria-label='Search database'
                        icon={<DeleteIcon color={'black'} boxSize={5} />}
                    />
                )
            },
        }
    ];

    const createAdmin = async (data: ICreateAdmin) => {
        try {
            const res = await mutateAsync(data)
            if (res.data.status === true) toast.success(res.data.message)
            reset()
            onClose()
        } catch (error) { }
    }
    const handleDelete = async () => {
        try {
            const res = await deleteMember(id)
            if (res.data.status === true) toast.success(res.data.message)
            DeleteOnClose()
        } catch (error) {

        }
    }
    return (
        <Box>
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <AppText fontWeight="bold" variant={"sm"}>
                        Settings
                    </AppText>
                    <AppText fontWeight="normal" variant={"xs"} color={"#6D7786"}>
                        Manage account profiles and team members
                    </AppText>
                </Box>
            </Stack>

            <Stack bg={'#fff'} p={'2rem'} mt={'3rem'} direction={'row'} justify={'space-between'}>
                <Box>
                    <AppText fontWeight="bold" variant={"sm"}>
                        Team Members
                    </AppText>
                    <AppText fontWeight="normal" variant={"xs"} color={"#6D7786"}>
                        Invite your colleagues to work faster and collaborate together.
                    </AppText>
                    <PrimaryBtn mt={'2rem'} size={"lg"} label="Add new members" onClick={onOpen} />
                </Box>
                <Box
                    width={'60%'}
                    mt={"2rem"}
                    className="hidden md:block"
                    rounded={"lg"}
                    border={"1px solid #E1E7EC"}
                    boxShadow={
                        " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
                    }
                >
                    <Table
                        onSelectedRowsChange={() => { }}
                        columns={columns}
                        data={admins?.data?.data}
                        isLoading={isLoadingAdmin}
                        customStyles={styles}
                        withCustomedPagination
                        selectableRows={false}
                    />
                </Box>
            </Stack>

            <MessageModal
                width={{ base: "100%", md: "40%", xl: "25%" }}
                isOpen={isOpen}
                onClose={onClose}
                text={'Add new member'}
            >
                <>
                    <AppText variant={'xs'}>Enter member full details</AppText>
                    <form onSubmit={handleSubmit(createAdmin)}>
                        <Stack mt={'1rem'} rowGap={".6rem"}>
                            <Box>
                                <InputField
                                    label="Full Name"
                                    placeholder="Jon doe"
                                    {...register("fullName")}
                                    errorMessage={errors.fullName?.message}
                                />
                            </Box>
                            <Box>
                                <InputField
                                    label="Email Address"
                                    placeholder="Jondoe@ymal.com"
                                    {...register("email")}
                                    errorMessage={errors.email?.message}
                                />
                            </Box>
                            <Box>
                                <AppSelect
                                    isSearchable={true}
                                    label="Role"
                                    options={[
                                        { label: 'Admin', value: 'admin' },
                                        { label: 'Receptionist', value: 'receptionist' }
                                    ]}
                                    errorMessage={errors.adminRole?.message}
                                    onChange={(el) => handleRole(el as SingleValue<SelectProps>)}
                                />
                            </Box>

                            <Box>
                                <InputField
                                    type='password'
                                    label="Password"
                                    {...register("password")}
                                    placeholder='****'
                                    errorMessage={errors.password?.message}
                                />
                            </Box>

                            <Flex justifyContent={'center'} gap={5} mt={'2rem'}>
                                <OutlineBtn size={"lg"} width={'100%'} label="Cancel" onClick={onClose} />
                                <PrimaryBtn size={"lg"} width={'100%'} label="Add member" isLoading={isPending} type="submit" />
                            </Flex>
                        </Stack>
                    </form>

                </>
            </MessageModal>
            <MessageModal
                width={{ base: "100%", md: "40%", xl: "25%" }}
                isOpen={isDeleteOpen}
                onClose={DeleteOnClose}
            >
                <>
                    <Flex mt={'2rem'} justifyContent={'center'}>
                        <AppText textAlign={'center'} variant={'sm'} fontWeight="medium" color={'red'}>Are you sure you want to delete this user?</AppText>
                    </Flex>
                    <Flex justifyContent={'center'} gap={5} mt={'2rem'}>
                        <OutlineBtn size={"lg"} width={'100%'} label="Cancel" onClick={DeleteOnClose} />
                        <PrimaryBtn size={"lg"} width={'100%'} label="Delete member" isLoading={deleteLoading} onClick={handleDelete} />
                    </Flex>
                </>
            </MessageModal>
        </Box >
    );
};

Settings.getLayout = (page: any) => <ProtectedLayout>{page}</ProtectedLayout>;
Settings.requireAuth = true;
export default Settings;
