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
    createdAt?: string | Date
}

export interface IGroups {
    groupName: string
    _id: string
    createdAt: string | Date
}

export interface ICustomer {
    age?: number
    id?: string
    customId?: string
    email: string
    fullName: string
    dob: string | Date
    customerClassification?: string
    membershipType?: string
    paymentMethod: string
    profileImage?: string
}

export type Ids = {
    id: string
}
export interface ICustomerToGroup {
    groupId: string,
}
export interface ICreateGroup {
    groupName: string,
}

export enum Statuses {
    classesMember = 'Classes Member',
    swimmingMember = 'Swimming Member',
    nonMember = 'None Member',
    suppliersChoice = 'Suppliers Choice',
    discountCardHolder = 'Discount Card Holder',
    swimmingLessonCourseCustomer = 'Swimming lesson Course',
}

export const MembershipStatus = {
    classesMember: 'Classes Member',
    swimmingMember: 'Swimming Member',
    nonMember: 'Non Member',
    suppliersChoice: 'Suppliers Choice',
    discountCardHolder: 'Discount Card Holder',
    swimmingLessonCourseCustomer: 'Swimming Lesson Course Customer',
};

export const Roles = {
    superAdmin: 'Super Admin',
    admin: 'Admin',
    receptionist: 'Receptionist'
}
export enum IRoles {
    superAdmin = 'Super Admin',
    admin = 'Admin',
    receptionist = 'Receptionist'
}