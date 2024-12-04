import MemssaBanner from '../../assets/images/MEMSSA_Banner.png'

const Banner = ({ title }) => {
    return (
        <>
            <div className='relative text-center'>
                <img 
                    src={MemssaBanner}
                    className="w-full"
                />
                {/* black shadow */}
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-white text-7xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                    {title}
                </h2>
                {/* red shadow */}
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-white text-7xl font-bold drop-shadow-[0_4px_4px_rgba(178,103,94,1)]">
                    {title}
                </h2>
            </div>
        </>
    )
}

export default Banner