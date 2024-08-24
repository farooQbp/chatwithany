import { common } from "@mui/material/colors";

export const black = {
  0.04: "#0000000a",
  0.05: "#0000000d",
  0.12: "#0000001f",
  0.14: "#00000024",
  0.22: "#00000038",
  0.23: "#0000003b",
  0.26: "#00000042",
  0.6: "#00000099",
  0.75: "#000000bf",
  0.87: "#000000de",
  0.9: "#000000e6",
};

export const colors = {
  primary: {
    main: "#3a5faa",
    dark: "#2c4373",
  },
  border: {
    color: "#D3D3D3",
  },
  sideNav: {
    openList: "#eaeaea",
  },
  scrollBar: {
    bg: "#e8e8e8",
    thumb: {
      bg: "#c2c2c2",
    },
  },
  select: {
    textColor: common.black,
    icon: common.black,
  },
  layout: {
    bg: "#f8f8f8",
  },
  button: {
    active: "#628adc",
    hover: "#446ec1",
    disabled: {
      bg: "#cbcbcb",
      color: black["0.26"],
    },
    outlined: {
      active: "#3a5faa3d",
      hover: "#3a5faa1f",
    },
  },
  iconButton: {
    hover: black["0.05"],
    active: "#3a5faa26",
    border: black["0.23"],
  },
  breadcrumb: {
    activeLink: black["0.9"],
    color: black["0.6"],
  },
  tab: {
    bg: "#f6f6f6",
    color: black["0.6"],
  },
  slider: {
    railbg: black["0.22"],
  },
  tooltip: {
    color: black["0.87"],
    border: black["0.14"],
  },
  chip: {
    outlined: {
      border: black["0.12"],
      color: black["0.75"],
      hover: black["0.04"],
      active: "#3a5faa26",
    },
    delete: {
      color: "#f53232",
      hoverBg: "#f532320d",
    },
  },
  inputLabel: {
    color: black["0.75"],
  },
  radio: {
    color: black["0.22"],
  },
  muiSwitch: {
    trackBg: "#143371",
  },
  input: {
    validationError: "#f53232",
  },
  table: {
    hoverBg: "#ebf1ff",
    cellBorder: black["0.12"],
    dropIcon: "#bdbdbd",
  },
  accordion: {
    summaryBorder: "#0000001f",
  },
};
