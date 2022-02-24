import Link from "next/link"
import { MdOutlinePageview } from "react-icons/md"

const Card_Race = ({ raceID, viewType, data }) => {

    const { raceName, raceSlug, raceStatus, pigeonsArrived, participatingLofts, id } = data

    if (viewType == 'card') {
        return (
            <div key={id} className="card lg:card-side card-bordered select-none">
                <div className="card-body p-5">
                    <h2 className="card-title text-2xl">{raceName}</h2>
                    <div className="flex flex-col my-1 gap-2">
                        <div className="grid grid-cols-2">
                            <p className="font-bold text-gray-500">Participating Loft</p>
                            <p className="text-right">{participatingLofts[0].loftName}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold text-gray-500">Arrivals</p>
                            <p className="text-right">{pigeonsArrived}</p>
                        </div>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <Link href={`/races/${raceSlug}`}>
                            <button className="btn btn-primary">
                                <MdOutlinePageview size={25} className='mr-2' />
                                View Details
                            </button>
                        </Link>
                        {raceStatus ? (
                            <p className="text-green-500">Finished</p>
                        ) : (
                            <p className="text-yellow-500">Running</p>
                        )}
                    </div>
                </div>
            </div>
        )
    } else if (viewType == 'list') {
        return (
            <tr key={id}>
                <td>
                    {raceStatus ? (
                        <p className="text-green-500 font-bold">Finished</p>
                    ) : (
                        <p className="text-yellow-500 font-bold">Running</p>
                    )}
                </td>
                <td>{raceName}</td>
                <td>{participatingLofts[0].loftName}</td>
                <td>{pigeonsArrived}</td>
                <td>
                    <div className="flex justify-end">
                        <Link href={`/races/${raceSlug}`}>
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