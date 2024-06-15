import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICustomer } from "@/types";
import axios from "../axios";


export const useGetAllCustomers = () => {
    return useQuery({
        queryKey: ['customers'],
        queryFn: async () => {
            const res = await axios.get('/get-all-customers')
            return res
        }
    })
}

export const useCreateCustomerMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: ICustomer) => {
            console.log(data, "dddd")
            const res = await axios.post("/customer-registration", data)
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customers'] })
        }
    })
};