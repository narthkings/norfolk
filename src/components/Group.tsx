import React, { useState } from "react";
import MessageModal from "./Modal/MessageModal";
import {
    useAddCustomerToGroups,
    useGetAllGroups,
} from "@/services/mutations/group.mutation";
import AppText from "./app-text";
import { Box, ButtonGroup, Flex } from "@chakra-ui/react";
import OutlineBtn from "./app-button/OutlineBtn";
import PrimaryBtn from "./app-button/PrimaryBtn";
import { addToGroupCustomer } from "@/utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICustomerToGroup, Ids } from "@/types";
import AppSelect, { SelectProps } from "./app-select";
import { OnChangeValue, SingleValue } from "react-select";
import SecondGroup from "./SecondGroup";
import toast from "react-hot-toast";

type Props = {
    members: Ids[];
    onGroupClose: () => void;
    isGroupOpen: boolean;
    setSelectedRows: React.Dispatch<React.SetStateAction<never[]>>;
    setToggleCleared: React.Dispatch<React.SetStateAction<boolean>>;
};
const Group = ({
    members,
    onGroupClose,
    isGroupOpen,
    setSelectedRows,
    setToggleCleared,
}: Props) => {
    const [selectionType, setSelectionType] = useState("type1");
    const { data: allGroups } = useGetAllGroups();
    const { mutateAsync: addCustomerToGroup, isPending } = useAddCustomerToGroups();

    const {
        setValue,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addToGroupCustomer),
    });

    const addCustomers = async (data: ICustomerToGroup) => {
        try {
            const payload = {
                groupId: data.groupId,
                members: members.map((el) => el),
            };
            const res = await addCustomerToGroup(payload);
            if (res.data.status === true) toast.success(res.data.message)
            reset();
            onGroupClose();
            setSelectedRows([]);
            setToggleCleared(true);
        } catch (error) { }
    };

    const handleGroup = (newValue: OnChangeValue<SelectProps, false>) => {
        setValue("groupId", newValue?.value as string);
    };

    const options = allGroups?.data?.data.map((el: any) => ({
        label: el.groupName,
        value: el._id,
    }));

    return (
        <MessageModal
            width={{ base: "100%", md: "40%", xl: "25%" }}
            isOpen={isGroupOpen}
            onClose={onGroupClose}
            text={"Add customer(s) to groups"}
        >
            <>
                <AppText variant={"xs"}>Select Group</AppText>
                <Flex mt={"1.5rem"}>
                    <ButtonGroup gap='4'>
                        <OutlineBtn
                            _hover={{ background: '#FCD2C2' }}
                            _active={{ background: '#FCD2C2' }}
                            isActive={selectionType === "type1"}
                            size={"md"}
                            label="Existing Group"
                            onClick={() => setSelectionType("type1")}
                        />
                        <OutlineBtn
                            _hover={{ background: '#FCD2C2' }}
                            _active={{ background: '#FCD2C2' }}
                            isActive={selectionType === "type2"}
                            size={"md"}
                            label="New Group"
                            onClick={() => setSelectionType("type2")}
                        />
                    </ButtonGroup>
                </Flex>
                <AppText my={"2rem"} variant={"xs"}>
                    <span className="text-[#F56630]">{members.length}</span> customers selected
                </AppText>
                {selectionType === "type1" ? (
                    <form onSubmit={handleSubmit(addCustomers)}>
                        <Box mt={"1rem"}>
                            <AppSelect
                                isSearchable={true}
                                label="Select Group"
                                options={options}
                                errorMessage={errors.groupId?.message}
                                onChange={(el) => handleGroup(el as SingleValue<SelectProps>)}
                            />
                        </Box>
                        <Flex justifyContent={"center"} gap={5} mt={"2rem"}>
                            <OutlineBtn
                                size={"lg"}
                                width={"100%"}
                                label="Cancel"
                                onClick={onGroupClose}
                            />
                            <PrimaryBtn
                                size={"lg"}
                                width={"100%"}
                                label={`Add Customer${members.length > 1 ? 's' : ''}`}
                                isLoading={isPending}
                                type="submit"
                            />
                        </Flex>
                    </form>
                ) : (
                    <SecondGroup setSelectionType={setSelectionType} onGroupClose={onGroupClose} />
                )}
            </>
        </MessageModal>
    );
};

export default Group;
