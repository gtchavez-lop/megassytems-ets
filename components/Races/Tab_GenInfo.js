const Tab_GeneralInfo = e => {
    return (
        <div>

            <p
                className="text-3xl text-center lg:text-left mb-16"
            >
                General Information
            </p>
            <div className="w-full border stats border-base-300">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <button className="btn loading btn-circle btn-lg bg-base-200 btn-ghost"></button>
                    </div>
                    <div className="stat-value">2,395 / 7,500</div>
                    <div className="stat-title">Race Completion</div>
                    <div className="stat-desc">
                        <progress value="31.93" max="100" className="progress progress-secondary" />
                    </div>
                </div>
            </div>

            <div className="divider my-10 mx-10 " />

            <div className="mt-5 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="stat shadow rounded-lg">
                    <div className="stat-title">Release Point</div>
                    <div className="stat-value text-2xl">75 Miles JR</div>
                    <div className="stat-desc">Where the flock is released</div>
                </div>
                <div className="stat shadow rounded-lg">
                    <div className="stat-title">Distance</div>
                    <div className="stat-value text-2xl">75 M / 120.7 km</div>
                    <div className="stat-desc">How far the race is</div>
                </div>
                <div className="stat shadow rounded-lg">
                    <div className="stat-title">Release Time</div>
                    <div className="stat-value text-2xl">2/6/21 - 0800 GMT+8</div>
                    <div className="stat-desc">The time the flock is released</div>
                </div>
                <div className="stat shadow rounded-lg">
                    <div className="stat-title">Basketed Pigeons</div>
                    <div className="stat-value text-2xl">75,000</div>
                    <div className="stat-desc">How many pigeons where registered</div>
                </div>
                <div className="stat shadow rounded-lg">
                    <div className="stat-title">Arrived Pigeons</div>
                    <div className="stat-value text-2xl">2,395</div>
                    <div className="stat-desc">How many of the pigeons arrived</div>
                </div>
            </div>
        </div>
    )
}

export default Tab_GeneralInfo