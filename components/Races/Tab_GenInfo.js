import dayjs from "dayjs"

const Tab_GeneralInfo = ({ data }) => {

    const { pigeonsArrived, releasePoint, releaseTime, participatingPigeons, distance } = data

    return (
        <div>
            <p
                className="text-3xl text-center lg:text-left mb-16"
            >
                General Information
            </p>
            <div className="w-full border stats border-base-300 p-2">
                <div className="stat bg-base-200">
                    <div className="stat-value">{pigeonsArrived} / {participatingPigeons.length}</div>
                    <div className="stat-title">Race Completion</div>
                    <div className="stat-desc">
                        <progress value={pigeonsArrived} max={participatingPigeons.length} className="progress progress-secondary" />
                    </div>
                </div>
            </div>

            <div className="divider my-10 mx-10" />

            <div className="mt-5 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="stat shadow-sm rounded-lg bg-base-200">
                    <div className="stat-title">Release Point</div>
                    <div className="stat-value text-2xl">{releasePoint}</div>
                    <div className="stat-desc">Where the flock is released</div>
                </div>
                <div className="stat shadow-sm rounded-lg bg-base-200">
                    <div className="stat-title">Distance</div>
                    <div className="stat-value text-2xl">{(distance / 1.609).toFixed(2)}M / {distance}km</div>
                    <div className="stat-desc">How far the race is</div>
                </div>
                <div className="stat shadow-sm rounded-lg bg-base-200">
                    <div className="stat-title">Release Time</div>
                    <div className="stat-value text-2xl">{dayjs(releaseTime).format("MMMM D, YYYY HH:MMa")}</div>
                    <div className="stat-desc">The time the flock is released</div>
                </div>
                <div className="stat shadow-sm rounded-lg bg-base-200">
                    <div className="stat-title">Basketed Pigeons</div>
                    <div className="stat-value text-2xl">{participatingPigeons.length}</div>
                    <div className="stat-desc">How many pigeons where registered</div>
                </div>
                <div className="stat shadow-sm rounded-lg bg-base-200">
                    <div className="stat-title">Arrived Pigeons</div>
                    <div className="stat-value text-2xl">{pigeonsArrived}</div>
                    <div className="stat-desc">How many of the pigeons arrived</div>
                </div>
            </div>
        </div>
    )
}

export default Tab_GeneralInfo