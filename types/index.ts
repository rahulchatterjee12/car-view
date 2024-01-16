import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string;
    type?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
    manufacturar: string;
    setManufacturar: (manufacturar: string) => void;
}