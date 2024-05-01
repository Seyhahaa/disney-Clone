import disney from '../assets/images/disney.png';
import pixar from '../assets/images/pixar.png'
import nationalG from '../assets/images/nationalG.png'
import starwar from '../assets/images/starwars.png'

import pixarV from '../assets/Video/Pixar.mp4'
import nationalGV from '../assets/Video/nationalGV.mp4'
import marvelV from '../assets/Video/marvelV.mp4'
import disneyV from '../assets/Video/disneyV.mp4'
import starwarV from '../assets/Video/starwarV.mp4'

function ProductionHouse() {
    const marvel = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd51263-bb0f-4465-af86-f7ed25e58e70/defnfvv-e450faeb-25a6-4d0a-9be2-153c7ff51629.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjZDUxMjYzLWJiMGYtNDQ2NS1hZjg2LWY3ZWQyNWU1OGU3MFwvZGVmbmZ2di1lNDUwZmFlYi0yNWE2LTRkMGEtOWJlMi0xNTNjN2ZmNTE2MjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YUQJ_GY5dPf835IoltWGvli83JMkbGPyKpe0ZBp_fMs"

    const productionHouseList = [
        { id: 1, image: disney, video: disneyV },
        { id: 2, image: marvel, video: marvelV },
        { id: 3, image: nationalG, video: nationalGV },
        { id: 4, image: pixar, video: pixarV },
        { id: 5, image: starwar, video: starwarV },
    ]


    return (
        <div className='gap-2 flex justify-between container mx-auto py-5 '>
            {
                productionHouseList.map((item) => (
                    <div key={item.id} className='p-3 md:p-12 border-[2px] border-gray-600 w-[150px] h-[80px] md:w-[230px] md:h-[130px] place-content-center rounded-lg
                bg-gray-700 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                        <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 left-0 z-0 opacity-0 hover:opacity-50 rounded-lg' />
                        <img src={item.image} className='z-[1]' />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductionHouse