"use client"

import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import getCars from "@/helper/getCars";


export default async function Home() {
  const cars = await getCars();

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;


  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
          <p>Explore the cars as you wish</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>

          {!isDataEmpty ?
            <div className="home__cars-wrapper">
              {cars?.map((car, i) => <CarCard car={car} key={i} />)}
            </div>
            :
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>}

        </div>
      </div>
    </main>
  )
}