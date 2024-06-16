import { MembershipStatus, Roles } from "@/types";

export const getStatusColor = (status: string) => {
    switch (status) {
        case 'classesMember':
            return { name: MembershipStatus.classesMember, color: 'red.500' };
        case 'swimmingMember':
            return { name: MembershipStatus.swimmingMember, color: 'blue.500' };
        case 'nonMember':
            return { name: MembershipStatus.nonMember, color: 'gray.500' };
        case 'suppliersChoice':
            return { name: MembershipStatus.suppliersChoice, color: 'green.500' };
        case 'discountCardHolder':
            return { name: MembershipStatus.discountCardHolder, color: 'purple.500' };
        case 'swimmingLessonCourseCustomer':
            return { name: MembershipStatus.swimmingLessonCourseCustomer, color: 'orange.500' };
        default:
            return { name: 'Unknown Status', color: 'gray.500' };
    }
};

export const getRole = (status: string) => {
    switch (status) {
        case 'superAdmin':
            return { name: Roles.superAdmin, color: 'green.500' };
        case 'admin':
            return { name: Roles.admin, color: 'blue.500' };
        case 'receptionist':
            return { name: Roles.receptionist, color: 'orange.500' };
        default:
            return { name: 'Unknown Role', color: 'gray.500' };
    }
};