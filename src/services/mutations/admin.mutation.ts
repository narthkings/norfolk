import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateAdmin } from "@/types";
import axios from "../axios";

export const useCreateAdminMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: ICreateAdmin) => {
            const res = await axios.post("/create-admin", data);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admins'] })
        }
    })
};

export const useGetAllAdmins = () => {
    return useQuery({
        queryKey: ['admins'],
        queryFn: async () => {
            const res = await axios.get('/get-all-admins')
            return res
        }
    })
}

export const useDeleteAdmin = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (authId: string) => {
            const res = await axios.delete("/delete-admin", { data: { authId } });
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admins'] })
        }
    })
};
