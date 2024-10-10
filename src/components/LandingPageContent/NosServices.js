import Whyus from "./WhyUS";
export default function NosService() {
    return (
        <div className="flex flex-col gap-8">
            <div className="m-[80px]">
                <h5 class="mb-4 text-xl font-bold  dark:text-white md:text-5xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">MEDDoC </span> Services.</h5>
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Nous proposons un service d’accompagnement santé complet et innovant.</p>
            </div>
            <Whyus />
        </div>
    )
}