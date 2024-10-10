import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import bg from "../assets/illustration/bg.svg";
import About from "./LandingPageContent/AboutUs";
import Subscribe from "./LandingPageContent/Concact_us";
import Sponsoring from "./LandingPageContent/Sponsoring";
import Whyus from "./LandingPageContent/WhyUS";

export const SearchBar = ({ defaultvalues }) => {

    const navigate = useNavigate()
    const [searchWhere, setSearchQueryWhere] = useState(defaultvalues.healhtpro_localisation || '');
    const [searchQuery, setSearchQuery] = useState(defaultvalues.healhtpro_name || '');

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const query = formData.get("search");
        const location = formData.get("searchWhere");
        console.log(defaultvalues);
        console.log(query, location); // Add this line to check the values
        const params = {
            healhtpro_name: query,
            healhtpro_localisation: location
        }
        console.log(params)
        navigate({
            pathname: '/search',
            search: `?${createSearchParams(params)}`,
        });
    }

    return (
        <div class="flex flex-col  ">

            {/* <h4 class="mb-4 text-xl font-extrabold tracking-tight leading-none  md:text-xl lg:text-2xl dark:text-white uppercase">Trouver un rendez-vous</h4> */}
            <div className="mx-0">
                <form className="relative flex flex-col space-between"
                    onSubmit={handleSearch}
                >
                    <div class="flex divide-x-[3px] min-w-full">
                        <div class="relative w-full lg:w-[400px]">
                            <input type="search" id="search" name="search"
                                defaultValue={defaultvalues.healhtpro_name || ""}
                                className="lg:w-[400px] block p-5 w-full z-20 text-sm text-gray-900 bg-white rounded-l-lg
                                        border border-gray-300 focus:ring-blue-500
                                        focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Medecin,Infirmier,Specialiste..."
                            >
                            </input>

                        </div>
                        {/* <br/> */}
                        <div class="relative w-full  ">

                            <div className="relative">
                                <input
                                    defaultValue={defaultvalues.healhtpro_localisation || ""}
                                    id="searchWhere" name="searchWhere"
                                    type="text"
                                    placeholder="Où..."
                                    className="block p-5 w-full z-20 text-sm
                                            text-gray-900 rounded-r-lg border-l-gray-50 border-l-2 border 
                                            border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white 
                                            dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400
                                            dark:text-white dark:focus:border-blue-500"
                                />

                            </div>

                            <button type="submit" class="absolute top-0 right-0 p-5
                                            text-sm font-medium h-full text-white bg-primary rounded-r-lg 
                                            border border-blue-700 hover:bg-primary focus:ring-4 focus:outline-none
                                            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800"
                            >
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>

                        </div>


                    </div>
                    {/* {open && (

                    <ul className=" absolute right-0 p-2.5 w-full mt-10  bg-red-400">
                        {filteredLocalisations.map((item) => (
                            <li
                                key={item}
                                className="w-full text-gray-700bg-red-400 cursor-pointer"
                                onClick={() => {
                                    setSearchWhere(item);
                                    setOpen(false);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                )} */}

                </form>
            </div>
            {/* <p class=" text-lg font-normal text-white lg:text-xl dark:text-gray-400">Rechercher blablabla. Integer commodo quis eros ac pharetra.</p> */}

        </div>
    )
}


export function Section() {


    return (
        <>

            {/* ================Hero section ========= */}
            <section className="bg-transparent text-black py-auto max-w-screen flex justify-center content-center relative">
                <div class="w-full grid max-w-screen-xl pt-44 pb-24 mx-auto lg:gap-8 xl:gap-0">
                    <div className="absolute z-[-1] bottom-0 right-[-100px]">
                        <img width={600} src={bg} alt="" />
                    </div>
                    <div className="absolute z-[-1] top-0 left-[-280px]">
                        <img width={600} src={bg} alt="" />
                    </div>
                    <div class=" w-full mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-full mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">La start-up <span className="text-primary">MEDDOC</span> Malagasy</h1>
                        <p class="max-w-full text-center mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A vos marques, prêt, santé !</p>
                        {/* <a href="#" class="inline-flex bg-cyan-400 items-center justify-center px-5 py-3 mr-3 text-black font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Discutons-en!                 <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a> */}
                        <SearchBar defaultvalues={{ healhtpro_name: '', healhtpro_localisation: '' }}></SearchBar>

                    </div>
                    {/* <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={doctor_illustration} alt="mockup"></img>
                    </div> */}
                </div>
            </section>
            {/* ==============End Hero section================ */}
            <Whyus />
            <About />
            <Sponsoring />

            <Subscribe />


        </>

    )

}

