import { Clock, Dot } from 'lucide-react'; 

function MovieCard({
    image, name, type, language, year, duration
}) {
    return (
        <div className='md:w-[30%] w-[90%] bg-[#234C6A] shadow-md rounded-[10px] overflow-hidden shadow-lg'>
            <div className=" h-[320px]" >
              <img  
                    src={image}
                    alt={name}
                    className="w-full h-full  cursor-pointer hover:scale-[1.05] duration-300  rounded-[10px]"
                />
            </div>
            <div className="flex flex-col border-t border-t-[#456882] gap-3 items-start text-[#E3E3E3] p-5">
                <h2 className='text-[20px] font-bold'>{name}</h2>
                <div className='flex text-gray-400 justify-between gap-4 items-center text-[16px]'>
                   <span className='flex items-center justify-center gap-1 text-[16px]'><Clock size={16} /> {duration}</span>
                <span className='flex items-center justify-center  text-[16px]'><Dot />{year}</span>
                
                </div>
                <div className='flex items-center gap-5 text-gray-400'>
                <span className='border rounded-2xl px-2 py-1 border-gray-500 bg-[#2c506b]'>{type}</span>
                <span className='border rounded-2xl px-2 py-1 border-gray-500 bg-[#2c506b]'>{language}</span>
                </div>
               
            </div>
        </div>
    )
}

export default MovieCard;
