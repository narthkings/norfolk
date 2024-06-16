import AppText from '@/components/app-text';
import ProtectedLayout from '@/components/layouts/ProtectedLayout';
import Table from '@/components/Table';
import { useViewGroupMembers } from '@/services/mutations/group.mutation';
import { ICustomer, Statuses } from '@/types';
import { getStatusColor } from '@/utils/getColor';
import { Avatar, Box, Flex, Icon, IconButton, Stack, Tag, TagLabel } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { TableColumn } from 'react-data-table-component';
import styles from "@/utils/table-styles";
import { ArrowBackIcon } from '@chakra-ui/icons';


const Members = () => {
    const router = useRouter()
    const { data, isLoading, } = useViewGroupMembers(router.query.id as string)

    const columns: TableColumn<ICustomer>[] = [
        {
            name: "Name",
            sortable: true,
            cell: (row: ICustomer) => (
                <>
                    <Stack direction={"row"} align={"center"} gap={3}>
                        <Avatar size={'md'} name={row?.fullName} src={row.profileImage} />
                        <Box>
                            <AppText fontWeight="bold" variant={"x_small"}>{row?.fullName}</AppText>
                            <AppText mt={1} fontWeight="normal" variant={"x_small"}>{row?.customerClassification} - {row?.age || 0} years </AppText>
                        </Box>
                    </Stack>

                </>
            ),
        },
        {
            name: "ID",
            sortable: true,
            cell: (row: ICustomer) => (
                <AppText textAlign={"right"} variant={"xx_smallest"}>
                    #{row?.customId}
                </AppText>
            ),
        },
        {
            name: "Email",
            sortable: true,
            cell: (row: ICustomer) => (
                <AppText textAlign={"right"} variant={"xx_smallest"}>
                    {row?.email}
                </AppText>
            ),
        },
        {
            name: "Date Of Birth",
            sortable: true,
            cell: (row: ICustomer) => (
                <AppText textAlign={"right"} variant={"xx_smallest"}>
                    {row?.dob as string}
                </AppText>
            ),
        },
        {
            name: "Membership",
            sortable: true,
            cell: (row: ICustomer) => {
                const status = getStatusColor(row.membershipType as Statuses);
                return (
                    <Tag borderRadius={"2rem"} size={"sm"} variant="subtle" bgColor={status?.color}>
                        <TagLabel p={1}>
                            <AppText color={'#fff'} variant={"xx_smallest"}>{status?.name}</AppText>
                        </TagLabel>
                    </Tag>
                )
            },
        },
        {
            name: "Payment Method",
            sortable: true,
            center: true,
            cell: (row: ICustomer) => (
                <AppText variant={"xx_smallest"} textTransform={'capitalize'} >{row?.paymentMethod}</AppText>
            ),
        },
    ];

    return (
        <Box>
            <Flex align={'center'} gap={3}>
                <IconButton onClick={() => router.back()} aria-label='Search database' icon={<ArrowBackIcon />} boxSize={10} />
            </Flex>

            <Box
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
                    data={data?.data?.data}
                    isLoading={isLoading}
                    customStyles={styles}
                    withCustomedPagination
                    selectableRows={false}
                />
            </Box>
        </Box>
    )
}

Members.getLayout = (page: any) => <ProtectedLayout>{page}</ProtectedLayout>;
Members.requireAuth = true;
export default Members