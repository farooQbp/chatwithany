import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";
import { colors } from "./colors"
import RobotoBold from "./assets/font/Roboto-Bold.ttf";
import RobotoLight from "./assets/font/Roboto-Light.ttf";
import RobotoMedium from "./assets/font/Roboto-Medium.ttf";
import RobotoRegular from "./assets/font/Roboto-Regular.ttf";

const fontWeight = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
};

const robotoLight = {
    fontFamily: "Roboto",
    src: `local("Roboto"), url(${RobotoLight}) format("truetype")`,
    fontWeight: fontWeight.light,
    fontStyle: "normal",
};

const robotoRegular = {
    fontFamily: "Roboto",
    src: `local("Roboto"), url(${RobotoRegular}) format("truetype")`,
    fontWeight: fontWeight.regular,
    fontStyle: "normal",
};

const robotoMedium = {
    fontFamily: "Roboto",
    src: `local("Roboto"), url(${RobotoMedium}) format("truetype")`,
    fontWeight: fontWeight.medium,
    fontStyle: "normal",
};

const robotoBold = {
    fontFamily: "Roboto",
    src: `local("Roboto"), url(${RobotoBold}) format("truetype")`,
    fontWeight: fontWeight.bold,
    fontStyle: "normal",
};

export const theme = createTheme({
    spacing: (factor) => `${0.8 * factor}rem`,
    palette: {
        primary: {
            main: colors.primary.main,
            dark: colors.primary.dark,
        },
    },
    typography: {
        fontSize: 16,
        fontWeightLight: fontWeight.light,
        fontWeightRegular: fontWeight.regular,
        fontWeightMedium: fontWeight.medium,
        fontWeightBold: fontWeight.bold,

        body2: {
            color: common.black,
            fontSize: 16,
        },
    },
    overrides: {
        MuiSvgIcon: {
            root: {
                fontSize: 20,
            },
        },
        MuiCssBaseline: {
            "@global": {
                html: {
                    fontSize: 10,
                },
                "@media (-webkit-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx)":
                {
                    html: {
                        fontSize: 8,
                    },
                },
                "@media (-webkit-device-pixel-ratio: 1.50), (min-resolution: 1.50dppx)":
                {
                    html: {
                        fontSize: 6.75,
                    },
                },
                "@media (-webkit-device-pixel-ratio: 1.75), (min-resolution: 1.75dppx)":
                {
                    html: {
                        fontSize: 5.75,
                    },
                },
                "@font-face": [robotoLight, robotoRegular, robotoMedium, robotoBold],
                "@media screen and (max-width:1440px)": {
                    html: {
                        fontSize: 9,
                    },
                },
                "@media screen and (max-width:1280px)": {
                    html: {
                        fontSize: 8.2,
                    },
                },
                "*::-webkit-scrollbar": {
                    width: "1.3rem",
                    height: "1.3rem",
                    backgroundColor: colors.scrollBar.bg,
                },
                "*::-webkit-scrollbar-thumb": {
                    borderRadius: 0,
                    background: colors.scrollBar.thumb.bg,
                },
                h2: {
                    fontSize: 60,
                },
                h3: {
                    fontSize: 48,
                },
                h4: {
                    fontSize: 34,
                },
                h5: {
                    fontSize: 24,
                },
                h6: {
                    fontSize: 20,
                },
            },
        },
        MuiGrid: {
            root: {},
        },
        MuiButton: {
            root: {
                minWidth: "6.4rem",
                height: "3.6rem",
                fontSize: 14,
                fontWeight: fontWeight.medium,
                lineHeight: "110%",
                padding: ".6rem 1.6rem",
                "&.MuiPickersToolbarButton-toolbarBtn": {
                    height: "inherit",
                },
            },
            contained: {
                "&:active": {
                    background: colors.button.active,
                },
                "&$disabled": {
                    background: colors.button.disabled.bg,
                    color: colors.button.disabled.color,
                },
            },
            outlined: {
                padding: ".6rem 1.6rem",
                color: colors.primary.main,
                borderColor: colors.primary.main,
                background: common.white,
                "&:hover": {
                    background: colors.button.outlined.hover,
                },
                "&:active": {
                    background: colors.button.outlined.active,
                },
            },
            endIcon: {
                marginLeft: 2,
                "&>*:first-child": {
                    fontSize: 20,
                },
            },
            iconSizeMedium: {
                "&>*:first-child": {
                    fontSize: 20,
                },
            },
        },

        MuiInput: {
            root: {
                fontWeight: fontWeight.regular,
            },
        },
        MuiTable: {
            root: {
                borderCollapse: "separate",
            },
        },
        MuiTableCell: {
            root: {
                fontSize: 14,
                padding: "0 0 0 1.6rem",
                height: "4.1rem",
            },
            head: {
                fontWeight: fontWeight.light,
            },
            body: {
                padding: "0 1.6rem 0 1.6rem",
            },
        },
        MuiSelect: {
            root: {
                fontSize: 16,
                color: colors.select.textColor,
                display: "flex",
                alignItems: "center",
                padding: "0.8rem 1.2rem 0.8rem 0",
                "& > *": {
                    marginRight: ".4rem",
                },
                "&.Mui-disabled": {
                    opacity: "0.5",
                },
            },
            icon: {
                color: colors.select.icon,
                top: "calc(50% - 1.2rem)",
            },
            outlined: {
                fontSize: 14,
                paddingLeft: "1.6rem",
            },
        },
        MuiMenuItem: {
            root: {
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                color: "#000000bf",
            },
        },
        MuiChip: {
            root: {
                fontSize: 12,
                minWidth: "8rem",
                justifyContent: "space-around",
            },
            outlined: {
                border: `.1rem solid ${colors.chip.outlined.border}`,
                color: colors.chip.outlined.color,
                "&:hover": {
                    background: colors.chip.outlined.hover,
                },
                "&:active": {
                    background: colors.chip.outlined.active,
                },
            },
        },
        MuiFormControlLabel: {
            label: {
                fontSize: 14,
            },
        },
        MuiTab: {
            root: {
                fontSize: 18,
                height: "1rem",
                background: colors.tab.bg,
                fontWeight: fontWeight.medium,
                minHeight: "4.8rem",
                padding: ".6rem 1.2rem",
                "&$selected": {
                    color: colors.primary.main,
                },
                "&$labelIcon": {
                    minHeight: "1.0rem",
                },
            },
        },
        MuiTabs: {
            root: {
                color: colors.tab.color,
                background: colors.tab.bg,
                minHeight: "4.8rem",
            },
            indicator: {
                background: colors.primary.main,
                height: ".3rem",
            },
        },
        MuiPickerDTToolbar: {
            toolbar: {
                height: "10rem",
                paddingLeft: ".8rem",
                paddingRight: ".8rem",
            },
        },
        MuiPickerDTTabs: {
            fontSize: 24,

            tabs: {
                minHeight: "4.8rem",
                "& .MuiTab-root": {
                    backgroundColor: colors.primary.main,
                },
                "& .Mui-selected": {
                    backgroundColor: colors.primary.main,
                    color: common.white,
                },
                "& .MuiTab-fullWidth": {
                    minWidth: "50%",
                },
            },
        },
        MuiInputLabel: {
            root: {
                color: colors.inputLabel.color,
                "&$error": {
                    color: colors.input.validationError,
                },
            },
        },
        MuiInputBase: {
            root: {
                color: common.black,
                fontWeight: fontWeight.light,
            },
        },
        MuiRadio: {
            root: {
                color: colors.radio.color,
            },
        },
        MuiFormHelperText: {
            root: {
                color: colors.inputLabel.color,
                "&$error": {
                    color: colors.input.validationError,
                },
            },
        },
        MuiTextField: {
            root: {
                "& .MuiInput-underline.Mui-error:after": {
                    borderBottom: `.2rem solid ${colors.input.validationError}`,
                },
            },
        },
    },
})
