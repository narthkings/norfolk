import { BoxProps } from "@chakra-ui/react";
import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";


type GetLayoutFunc = (page: ReactElement) => ReactElement;

export type NextPageWithLayout = NextPage & {
    getLayout?: GetLayoutFunc;
    requireAuth?: boolean;
};

export type Children = {
    children: ReactNode;
};

export interface SidebarProps extends BoxProps {
    onClose: () => void;
    onOpen: () => void;
    isOpen: boolean;
}

export interface LoginType {
    email: string;
    password: string;
}

export interface ICreateAdmin {
    id?: string
    email: string
    fullName: string
    password: string
    adminRole: string
    role?: string
}

export interface ICustomer {
    email: string
    fullName: string
    dob: string | Date
    customerClassification?: string
    membership?: string
    paymentMethod: string
    profileImage?: string
}

export interface ICustomerToGroup {
    groupId: string,
    members: string[]
}