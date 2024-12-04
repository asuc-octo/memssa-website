import MemssaBanner from '../../assets/images/MEMSSA_Banner.png'

interface BannerProps {
    title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
    return (
        <>
            <div className='relative text-center'>
                <img 
                    src={MemssaBanner}
                    className="w-full"
                />
                {/* black shadow */}
                <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-white text-9xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                    {title}
                </h1>
                {/* red shadow */}
                <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-white text-9xl font-bold drop-shadow-[0_4px_4px_rgba(178,103,94,1)]">
                    {title}
                </h1>
                {/* subtitle */}
                {title == "MEMSSA" && (<h2 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/5">middle east, muslim, sikh, south asian association</h2>)}
            </div>
        </>
    )
}

export default Banner