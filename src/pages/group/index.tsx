import AppText from "@/components/app-text";
import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import Table from "@/components/Table";
import { useGetAllGroups } from "@/services/mutations/group.mutation";
import { IGroups } from "@/types";
import { HamburgerIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import React from "react";
import { TableColumn } from "react-data-table-component";
import styles from "@/utils/table-styles";
import { useRouter } from "next/router";


const Group = () => {
    const router = useRouter()
    const { data, isLoading } = useGetAllGroups()
    const columns: TableColumn<IGroups>[] = [
        {
            name: "Group Name",
            sortable: true,
            cell: (row: IGroups) => (
                <AppText fontWeight="bold" variant={"x_small"}>
                    {row?.groupName}
                </AppText>
            ),
        },
        {
            name: "Date Created",
            center: true,
            sortable: true,
            cell: (row: IGroups) => {
                const da = new Date(row?.createdAt as Date);
                const date = new Intl.DateTimeFormat("en-GB").format(da);
                return (
                    <AppText textAlign={"right"} variant={"xx_smallest"}>
                        {date}
                    </AppText>
                );
            },
        },

        {
            name: "Actions",
            sortable: true,
            center: true,
            cell: (row: IGroups) => {
                return (
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuItem onClick={() => router.push(`/group/${row._id}`)} icon={<ViewIcon boxSize={5} />}>
                                View members
                            </MenuItem>
                        </MenuList>
                    </Menu>
                );
            },
        },
    ];
    return (
        <Box>
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <AppText fontWeight="bold" variant={"sm"}>
                        Groups
                    </AppText>
                    <AppText fontWeight="normal" variant={"xs"} color={"#6D7786"}>
                        View groups and group members
                    </AppText>
                </Box>
            </Stack>
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
    );
};

Group.getLayout = (page: any) => <ProtectedLayout>{page}</ProtectedLayout>;
Group.requireAuth = true;
export default Group;
