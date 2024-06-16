import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICustomerToGroup, } from "@/types";
import axios from "../axios";

export const useCreateGroupMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (groupName: string) => {
            const res = await axios.post("/create-group", { groupName });
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getAllGroups'] })
        }
    })
};

export const useGetAllGroups = () => {
    return useQuery({
        queryKey: ['getAllGroups'],
        queryFn: async () => {
            const res = await axios.get('/get-all-groups')
            return res
        }
    })
}

export const useAddCustomerToGroups = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: ICustomerToGroup) => {
            const res = await axios.post("/add-customers-to-group", data);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewGroupMembers'] })
        }
    })
};


export const useViewGroupMembers = (groupId: string) => {
    return useQuery({
        queryKey: ['viewGroupMembers', groupId],
        queryFn: async () => {
            const res = await axios.get('/view-group-members', { params: { groupId } })
            return res
        },
        enabled: !!groupId,
    })
}