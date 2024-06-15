import ProtectedLayout from '@/components/layouts/ProtectedLayout';
import { Box } from '@chakra-ui/react';
import React from 'react'

const Dashboard = () => {
    return (
        <Box>Dashboard</Box>
    )
}

Dashboard.getLayout = (page: any) => <ProtectedLayout>{page}</ProtectedLayout>;
Dashboard.requireAuth = true;
export default Dashboard