"use client";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "@/components/Form/InputFields/CustomInput/CustomInput";
import * as yup from "yup";

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: { name: "" },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  const handleClick = () => {
    handleSubmit(onSubmit)();
  };
  return (
    <div>
      <Typography variant="h1Bold">This is First Typography</Typography>
      <CustomInput<IForm>
        control={control}
        name="name"
        error={errors?.name?.message}
        label="Name"
        placeholder="Enter your name"
      />
      <Button variant="primary" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
}

interface IForm {
  name: string;
}

const validationSchema = yup.object({
  name: yup.string().required("Required"),
});
