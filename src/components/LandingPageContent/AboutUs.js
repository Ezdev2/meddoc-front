import doctor_illustration from '../../assets/illustration/doctor_help.png';
import idea from "../../assets/image/idea.svg"

const items = [
  {
    id: 1,
    title: 'INNOVATION',
    description:
      'Le croisement de la technologie et du médical, l’innovation pour apporter des solutions adaptées aux besoins des patients et des professionnels de santé',
  },
  {
    id: 2,
    title: 'ÉTHIQUE',
    description:
      'La sécurité des données est notre priorité et nous n’intervenons jamais dans la relation médicale entre patients et professionnels de santé',
  },
  {
    id: 3,
    title: 'PROXIMITÉ',
    description:
      'Nous sommes convaincus que la technologie est aussi un vecteur de proximité humaine, faciliter la mise en relation entre un patient et un professionnel de santé',
  },
  {
    id: 4,
    title: 'FIABILITÉ',
    description:
      'Nous développons des solutions simples, robustes et efficaces',
  },
];


export default function About() {
  return (
    <section id="about" class="about">
      <div class="container flex justify-center content-center align-items-stretch">
        <div className='m-10'>
          <img src={doctor_illustration} className='hidden lg:block my-20' alt='doctor_illustration'></img>
        </div>
        <div class=" m-10 md:col-span-7 lg:col-span-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">


          <h5 class="mb-4 text-xl font-bold  dark:text-white md:text-5xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">MEDDoC </span> Services.</h5>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Nous proposons un service d’accompagnement santé complet et innovant.</p>

          <br></br>

          <div className='flex flex-col gap-4'>
            {items.map((item) => (
              <div key={item.id} className="flex content-center rounded-[18px] border p-4">
                <img src={idea} className='w-20 mx-4' alt="Doctor" />
                <div>
                  <h4 className="text-lg font-bold my-2">
                    <a href="#">{item.title}</a>
                  </h4>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>


    </section>
  )

}