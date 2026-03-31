export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third";
export type HeadingSize = "lg" | "md" | "sm";

export interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: {
        [key in HeadingSize]: {
            fontSize: string;
        };
    };
}

export const light: Theme = {
    name: "light",
    color: {
        primary: "brown",
        background: "lightgray",
        secondary: "blue",
        third: "green",
    },
    heading: {
        lg: {
            fontSize: "2rem",
        },
        md: {
            fontSize: "1.5rem",
        },
        sm: {
            fontSize: "1rem",
        },
    },
};

export const dark: Theme = {
    ...light,
    name: "dark",
    color: {
        primary: "coral",
        background: "midnightblue",
        secondary: "darkblue",
        third: "darkgreen",
    },
};

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName) {
        case "light":
            return light;
        case "dark":
            return dark;
    }
};
