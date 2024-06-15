import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "@/types";
import { AuthenticatedRoute } from "@/components/Guard/AuthenticatedRoute";
import themes from "@/utils/themes";
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();
type Props = {
  Component: NextPageWithLayout;
  pageProps: any;
} & AppProps;

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={themes}>
        {Component.requireAuth ?
          <AuthenticatedRoute>
            {getLayout(<Component {...pageProps} />)}
          </AuthenticatedRoute>
          : getLayout(<Component {...pageProps} />)
        }
        <Toaster />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
