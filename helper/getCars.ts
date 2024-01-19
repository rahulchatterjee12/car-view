import { FilterProps } from "@/types";

const getCars = async ({ manufacturer, year, fuel, limit, model }: FilterProps) => {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e100f61ab3msha0d6cbe39142c43p14d747jsn06a20b838926',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export default getCars;