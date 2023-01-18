import React, { useState } from "react";
import { Background } from "../landing/components/background";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, FilledInput, IconButton, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { headerHeight } from "../layout/header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { StartIcon } from "../layout/footer";
import ScrollPage from "../layout/scroll_page";
import AnimWhenVisible from "../anim";
import AnimComponent from "../anim/anim_component";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import UserStore from "../../store/user.store";
import { LoadingButton } from "@mui/lab";

const ItemStack = styled(Paper, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: 300,
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
    color: theme.palette.text.secondary,
    borderRadius: 8,
    background: "transparent",
    ":hover": {
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
    },
    ...(active && {
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
    }),
  }),
);

const ImageDecor = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: 41,
  right: -16,
  zIndex: -1,
}));

const CONTACT_US = gql`
  mutation contactUs($phone: String!, $userId: String, $name: String, $email: String, $question: String) {
    contactUs(phone: $phone, userId: $userId, name: $name, email: $email, question: $question)
  }
`;
export const ContactPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
    },
  });

  const [contactUs] = useMutation(CONTACT_US, {
    onCompleted: (data) => {
      reset({
        phone: "",
        name: "",
        email: "",
        question: "",
      });
      enqueueSnackbar("Bạn gửi câu hỏi thành công, chúng tôi sẽ trả lời bạn sớm nhất!", { variant: "success" });
    },
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    await contactUs({
      variables: {
        phone: data.phone,
        name: data.name,
        email: data.email,
        question: data.question,
        userId: UserStore.user?.id ?? "",
      },
    });
    setLoading(false);
  };
  return (
    <ScrollPage>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
          background: `url("/assets/imgs/background/6.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={7}>
            <Box p={3} display={"flex"} flexDirection={"column"} height={"100%"}>
              <Typography mb={10} variant={"h2"} sx={{ fontSize: { xs: 28, sm: 32 } }}>
                Liên hệ với chúng tôi
              </Typography>
              {/*<Typography mb={10} variant={"body2"} width={{ sm: 400, xs: "auto" }}>*/}
              {/*  Chúng tôi ở đây và sẵn sàng hỗ trợ bạn.*/}
              {/*</Typography>*/}
              <Box>
                <Stack spacing={2}>
                  <ItemStack elevation={0} active>
                    <StartIcon src="/assets/imgs/footer/email.svg" alt="email icon" />
                    <Typography variant={"body2"}>contact@luciscity.io</Typography>
                  </ItemStack>
                  <ItemStack elevation={0}>
                    <StartIcon src="/assets/imgs/footer/phone.svg" alt="phone icon" />
                    <Typography variant={"body2"}>(+84)34 890 2400</Typography>
                  </ItemStack>
                  {/*<ItemStack elevation={0}>*/}
                  {/*  <StartIcon src="/assets/imgs/footer/headphone.svg" alt="headphone icon" />*/}
                  {/*  <Typography variant={"body2"}>(319) 555-0115</Typography>*/}
                  {/*</ItemStack>*/}
                </Stack>
              </Box>
              <Box flex={1} display={"flex"} alignItems={"flex-end"} mt={3} mb={3}>
                <Box>
                  <Stack spacing={2} direction={"row"}>
                    <IconButton
                      sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}
                      LinkComponent={Link}
                      href={"https://www.facebook.com/luciscity.io"}
                      target={"_blank"}
                    >
                      <img src="/assets/imgs/contact/ic_facebook.svg" alt="icon facebook" />
                    </IconButton>
                    {/*<IconButton sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}>*/}
                    {/*  <img src="/assets/imgs/contact/ic_discord.svg" alt="icon discord" />*/}
                    {/*</IconButton>*/}
                    <IconButton
                      sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}
                      LinkComponent={Link}
                      href={"https://t.me/luciscity_official_announcement"}
                      target={"_blank"}
                    >
                      <img src="/assets/imgs/contact/ic_telegram.svg" alt="icon telegram" />
                    </IconButton>
                    <IconButton
                      sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}
                      LinkComponent={Link}
                      href={"https://twitter.com/luciscity_io"}
                      target={"_blank"}
                    >
                      <img src="/assets/imgs/contact/ic_twitter.svg" alt="icon twitter" />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={5} component={Box} position={"relative"}>
            <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
              <AnimComponent
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100, transition: { delay: 0 } },
                }}
                transition={{ duration: 0.5 }}
                enable={true}
                style={{ height: "100%" }}
              >
                <Box
                  component={Paper}
                  elevation={0}
                  p={{ lg: 7, xs: 5 }}
                  borderRadius={2}
                  bgcolor={"rgba(255, 255, 255, 0.5)"}
                  sx={{ backdropFilter: "blur(8px)" }}
                  zIndex={1}
                >
                  <Box mb={2}>
                    <Typography mb={1}>Tên</Typography>
                    <FilledInput
                      sx={{ background: "rgba(255,255,255,0.5)" }}
                      fullWidth
                      placeholder={"Nguyễn Đức Tân"}
                      {...register("name")}
                    />
                  </Box>
                  <Box mb={2}>
                    <Typography mb={1}>Email</Typography>
                    <FilledInput
                      sx={{ background: "rgba(255,255,255,0.5)" }}
                      fullWidth
                      placeholder={"lucis@luciscity.io"}
                      {...register("email")}
                    />
                  </Box>
                  <Box mb={2}>
                    <Typography mb={1}>Số điện thoại</Typography>
                    <FilledInput
                      sx={{ background: "rgba(255,255,255,0.5)" }}
                      fullWidth
                      placeholder={"(+84) 123456789"}
                      {...register("phone", { required: "Bạn phải nhập số điên thoại!" })}
                    />
                    {errors?.phone && (
                      <Typography variant={"caption"} color={"red"}>
                        {errors?.phone?.message}
                      </Typography>
                    )}
                  </Box>
                  <Box mb={2}>
                    <Typography mb={1}>Câu hỏi của bạn là gì ?</Typography>
                    <FilledInput
                      sx={{ background: "rgba(255,255,255,0.5)" }}
                      fullWidth
                      multiline
                      rows={6}
                      placeholder={"Câu hỏi của bạn là gì ...."}
                      {...register("question")}
                    />
                  </Box>
                  <LoadingButton loading={loading} variant={"contained"} type={"submit"} fullWidth sx={{ mt: 10 }}>
                    Gửi
                  </LoadingButton>
                </Box>
              </AnimComponent>
              <ImageDecor src={"/assets/imgs/contact/circle.png"} alt={"img-decor"} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ScrollPage>
  );
};
