import { useMutation, useQuery } from "@tanstack/react-query";
import { ICustomerToGroup, } from "@/types";
import axios from "../axios";

export const useCreateGroupMutation = () =>
    useMutation({
        mutationFn: async (groupName: string) => {
            const res = await axios.post("/create-group", groupName);
            return res;
        },
    });

export const useGetAllGroups = () => {
    return useQuery({
        queryKey: ['getAllGroups'],
        queryFn: async () => {
            const res = await axios.get('/get-all-admins')
            return res
        }
    })
}

export const useAddCustomerToGroups = () =>
    useMutation({
        mutationFn: async (data: ICustomerToGroup) => {
            const res = await axios.post("/add-customers-to-group", { data });
            return res;
        },
    });


export const useViewGroupMembers = (groupId: string) => {
    return useQuery({
        queryKey: ['viewGroupMembers'],
        queryFn: async () => {
            const res = await axios.get('/view-group-members', { data: { groupId } })
            return res
        }
    })
}