import { queryClient } from "@/lib/queryClient";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
