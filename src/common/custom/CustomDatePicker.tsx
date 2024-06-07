"use client";

import { SxProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { ReactNode } from "react";

type TProps = {
   label: string;
   size?: "small" | "medium" | undefined;
   format?: string;
   value: string;
   onChange: any;
   helperText: ReactNode;
   error: boolean | undefined;
   sx: SxProps;
   name: string;
};

const CustomDatePicker = ({
   label = "",
   name,
   size = "medium",
   format = "YYYY/MM/DD",
   sx,
   value,
   onChange,
   helperText,
   error,
}: TProps) => {
   return (
      <DatePicker
         sx={sx}
         label={label}
         slotProps={{
            textField: {
               name,
               size,
               helperText,
               error: error === undefined ? false : error,
            },
         }}
         value={dayjs(value)}
         onChange={(newValue) => onChange(dayjs(newValue))}
      />
   );
};

export default CustomDatePicker;
