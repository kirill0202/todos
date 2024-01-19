import { Input, InputProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type BaseInputProps = {
  name: string;
} & InputProps;

const BaseInput = ({ name, ...props }: BaseInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input
          id={name}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          inputRef={ref}
          {...props}
        />
      )}
    ></Controller>
  );
};

export default BaseInput;
