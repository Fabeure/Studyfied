import {
  Select as BaseSelect,
  SelectProps,
  selectClasses,
  SelectRootSlotProps,
} from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { styled } from "@mui/system";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { useState } from "react";
import React from "react";

export default function QuizSelection({
  options,
  defaultValue,
  onChange,
}: {
  options: string[] | number[];
  defaultValue: string | number;
  onChange: (newValue: string | number) => void;
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (_: unknown, newValue: string | number | null) => {
    onChange(newValue as string | number);
    setValue(newValue as string | number);
  };

  return (
    <Select value={value} onChange={handleChange}>
      {options.map((opt, key) => (
        <Option key={key} value={opt}>
          {opt}
        </Option>
      ))}
    </Select>
  );
}

function Select(props: SelectProps<number | string, false>) {
  const slots: SelectProps<number | string, false>["slots"] = {
    root: StyledButton,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} slots={slots} />;
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const CustomButton = React.forwardRef(function CustomButton(
  props: SelectRootSlotProps<number, false>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ...other } = props;
  return (
    <button
      type="button"
      {...other}
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{other.children}</span>
      <UnfoldMoreRoundedIcon />
    </button>
  );
});

const StyledButton = styled(CustomButton, { shouldForwardProp: () => true })(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    width: 100%;
    padding: 12px 18px;
    border-radius: 20px;
    text-align: left;
    line-height: 1.5;
    background: linear-gradient(115deg, rgba(187, 87, 254,0.3), rgba(112, 216, 222,0.25));
    border: 1px solid black;
    color: white;
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      border-color: rgb(175, 135, 255);
    }
  
    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    }
  
    & > svg {
      font-size: 1rem;
      vertical-align: middle;
    }
    `
);

const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    width: 203px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: rgba(255,255,255,0.25);
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: white;
    backdrop-filter:blur(24px);
    
    `
);

const Option = styled(BaseOption)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background: linear-gradient(115deg, rgba(187, 87, 254,0.3), rgba(112, 216, 222,0.4));
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : "red"};
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &:focus-visible {
      outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: rgba(175, 135, 255,0.3);
      color:white
    }
    `
);

const Popup = styled("div")`
  z-index: 1;
`;
