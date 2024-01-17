import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string;
    type?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    disabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}

export interface SearchManufacturerProps {
    manufacturar: string;
    setManufacturar: (manufacturar: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}