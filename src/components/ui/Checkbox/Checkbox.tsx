import { Checkbox, CheckboxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type BaseCheckboxProps = {
  name: string;
} & CheckboxProps;

const BaseCheckbox = ({ name, ...props }: BaseCheckboxProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Checkbox
          id={name}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.checked)}
          checked={Boolean(value)}
          inputRef={ref}
          {...props}
        />
      )}
    ></Controller>
  );
};

export default BaseCheckbox;
