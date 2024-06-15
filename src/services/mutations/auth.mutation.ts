import { useMutation } from "@tanstack/react-query";
import { LoginType } from "@/types";
import axios from "../axios";

export const useLoginMutation = () =>
    useMutation({
        mutationFn: async (login: LoginType) => {
            const res = await axios.post("/login", login);
            return res;
        },
    });
