import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import {
    Avatar,
    Box,
    Flex,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import AppText from "@/components/app-text";
import { TableColumn } from "react-data-table-component";
import PrimaryBtn from "@/components/app-button/PrimaryBtn";
import OutlineBtn from "@/components/app-button/OutlineBtn";
import { ICustomer, Statuses } from "@/types";
import Table from "@/components/Table";
import styles from "@/utils/table-styles";
import MessageModal from "@/components/Modal/MessageModal";
import InputField from "@/components/input";
import { useForm } from "react-hook-form";
import { CustomerSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import AppSelect, { SelectProps } from "@/components/app-select";
import { OnChangeValue, SingleValue } from "react-select";
import {
    useCreateCustomerMutation,
    useGetAllCustomers,
} from "@/services/mutations/customer";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Group from "@/components/Group";
import { getStatusColor } from "@/utils/getColor";
import toast from "react-hot-toast";

const Customer = () => {
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isGroupOpen,
        onOpen: onGroupOpen,
        onClose: onGroupClose,
    } = useDisclosure();
    const { data: customers, isLoading: isLoadingTable } = useGetAllCustomers();
    const { mutateAsync, isPending } = useCreateCustomerMutation();

    const {
        setValue,
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(CustomerSchema),
    });

    const handleMembership = (newValue: OnChangeValue<SelectProps, false>) => {
        setValue("membership", newValue?.value as string);
    };

    const handlePaymentMethod = (newValue: OnChangeValue<SelectProps, false>) => {
        setValue("paymentMethod", newValue?.value as string);
    };

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

    const createCustomer = async (data: ICustomer) => {
        try {
            const res = await mutateAsync(data);
            if (res.data.status === true) toast.success(res.data.message)
            reset();
            onClose();
        } catch (error) { }
    };

    const handleRowSelected = useCallback((state: any) => {
        setSelectedRows(state.selectedRows);
    }, []);

    return (
        <Box>
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <AppText fontWeight="bold" variant={"sm"}>
                        Customers
                    </AppText>
                    <AppText fontWeight="normal" variant={"xs"} color={"#6D7786"}>
                        Showing data over the last 30 days
                    </AppText>
                </Box>
                <Flex gap={5}>
                    <OutlineBtn size={"lg"} label="Export CSV" onClick={() => { }} />
                    <PrimaryBtn size={"lg"} label="Add Customer" onClick={onOpen} />
                </Flex>
            </Stack>

            <Box
                mt={"2rem"}
                className="hidden md:block"
                rounded={"lg"}
                border={"1px solid #E1E7EC"}
                boxShadow={
                    "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
                }
            >
                {selectedRows.length ? (
                    <Flex
                        bg={"2rem"}
                        p={"1rem"}
                        gap={"5"}
                        align={"center"}
                        boxShadow={
                            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
                        }
                    >
                        <AppText>{selectedRows.length} Selected</AppText>
                        <OutlineBtn
                            rightIcon={<ArrowForwardIcon />}
                            size={"md"}
                            label="Add to group"
                            onClick={onGroupOpen}
                        />
                    </Flex>
                ) : null}

                <Table
                    columns={columns}
                    data={customers?.data?.data}
                    isLoading={isLoadingTable}
                    customStyles={styles}
                    onSelectedRowsChange={handleRowSelected}
                    withCustomedPagination
                    clearSelectedRows={toggleCleared}
                />
            </Box>

            <MessageModal
                width={{ base: "100%", md: "50%" }}
                isOpen={isOpen}
                onClose={onClose}
                text={"Add Customer"}
                size="md"
            >
                <>
                    <AppText variant={"xs"}>Enter customer details</AppText>
                    <form onSubmit={handleSubmit(createCustomer)}>
                        <Stack mt={"1rem"} rowGap={".6rem"}>
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
                                <InputField
                                    type="date"
                                    label="Date of birth"
                                    {...register("dob")}
                                    errorMessage={errors.dob?.message}
                                />
                            </Box>
                            <Box>
                                <AppSelect
                                    isSearchable={true}
                                    label="Membership"
                                    options={[
                                        { label: "Classes Member", value: "classesMember" },
                                        { label: "Swimming Member", value: "swimmingMember" },
                                        { label: "None Member", value: "nonMember" },
                                        { label: "Suppliers Choice", value: "suppliersChoice" },
                                        { label: "Discount Card Holder", value: "discountCardHolder" },
                                        {
                                            label: "Swimming lesson Course",
                                            value: "swimmingLessonCourseCustomer",
                                        },
                                    ]}
                                    errorMessage={errors.membership?.message}
                                    onChange={(el) => handleMembership(el as SingleValue<SelectProps>)}
                                />
                            </Box>
                            <Box>
                                <AppSelect
                                    isSearchable={true}
                                    label="Payment Method"
                                    options={[
                                        { label: "Monthly", value: "monthly" },
                                        { label: "Annual", value: "annual" },
                                    ]}
                                    errorMessage={errors.paymentMethod?.message}
                                    onChange={(el) => handlePaymentMethod(el as SingleValue<SelectProps>)}
                                />
                            </Box>
                            <Box>
                                <InputField
                                    label="Card Number"
                                    placeholder="xxxxxxx xxxxx xxxx"
                                />
                            </Box>
                            <Flex gap={3}>
                                <InputField
                                    label="Expiry Date"
                                    placeholder="xxxxxxx xxxxx xxxx"
                                    type="tel"
                                />
                                <InputField
                                    label="CVV"
                                    placeholder="123"
                                    type="tel"
                                />
                            </Flex>
                            <Flex justifyContent={"center"} gap={5} mt={"2rem"}>
                                <OutlineBtn size={"lg"} width={"100%"} label="Cancel" onClick={onClose} />
                                <PrimaryBtn
                                    size={"lg"}
                                    width={"100%"}
                                    label="Add Customer"
                                    isLoading={isPending}
                                    type="submit"
                                />
                            </Flex>
                        </Stack>
                    </form>
                </>
            </MessageModal>

            <Group
                setToggleCleared={setToggleCleared}
                setSelectedRows={setSelectedRows}
                members={selectedRows}
                isGroupOpen={isGroupOpen}
                onGroupClose={onGroupClose}
            />
        </Box>
    );
};

Customer.getLayout = (page: any) => <ProtectedLayout>{page}</ProtectedLayout>;
Customer.requireAuth = true;
export default Customer;
