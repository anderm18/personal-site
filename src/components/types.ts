import { Theme } from "@mui/material"

export interface Property {
    color: string
};

export interface Dispatch {
    setVisDiv: React.Dispatch<React.SetStateAction<number>>,
    visDiv: number
}

export interface ProvidedTheme {
    theme: Theme
}