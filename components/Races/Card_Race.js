import Link from "next/link"
import { MdOutlinePageview } from "react-icons/md"

const Card_Race = ({ raceID, viewType }) => {
    if (viewType == 'card') {
        return (
            <div className="card lg:card-side card-bordered select-none">
                <div className="card-body p-5">
                    <h2 className="card-title text-2xl">75 Miles</h2>
                    <div className="flex flex-col my-1 gap-2">
                        <div className="grid grid-cols-2">
                            <p className="font-bold text-gray-500">Participating Loft</p>
                            <p className="text-right">Florida Race Group</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold text-gray-500">Arrivals</p>
                            <p className="text-right">2395</p>
                        </div>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <Link href={`/races/${raceID}`}>
                            <button className="btn btn-primary">
                                <MdOutlinePageview size={25} className='mr-2' />
                                View Details
                            </button>
                        </Link>
                        <p className="text-green-500">Running</p>
                    </div>
                </div>
            </div>
        )
    } else if (viewType == 'list') {
        return (
            <tr>
                <td className="text-green-500">Running</td>
                <td>75 Miles</td>
                <td>Florida Race Group</td>
                <td>2395</td>
                <td>
                    <div className="flex justify-end">
                        <Link href={`/races/${raceID}`}>
                            <button className="btn btn-primary btn-sm">
                                <MdOutlinePageview size={25} className='mr-2 hidden md:block' />
                                View Details
                            </button>
                        </Link>
                    </div>
                </td>
            </tr>
        )
    } else {
        return null
    }
}

export default Card_Race