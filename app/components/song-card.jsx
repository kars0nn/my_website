export function SongCard({ song }) {
    return (
        <div style={{ backgroundImage: `url(${song?.albumCover})` }} className="bg-cover bg-no-repeat border-none rounded-xl w-full h-[calc(100%+2rem)]">
            <div className="p-5 rounded-xl filter backdrop-blur-sm bg-black/40">
                <small className={song.isPlaying ? "text-white/90 px-4 py-1 rounded-md font-bold bg-black/50 border-2 border-green-500" : "text-white/90 px-4 py-1 rounded-md font-bold bg-black/50 border-2 border-yellow-500"}>
                    <span className="inline hover:cursor-default">
                        {song.isPlaying ? "Listening to:" : "Recently listened to:"}
                    </span>
                </small>
                <div className="mt-3.5">
                    <span className='font-bold text-xl hover:cursor-default duration-150 transition-all ease-in-out' target="_blank" href={song?.url} rel="noreferrer noopener">
                        {song?.name}
                    </span>
                    <br />
                    <span className='hover:cursor-default duration-150 transition-all ease-in-out font-semibold text-white/70' target="_blank" href={song?.artistUrl} rel="noreferrer noopener">
                        by {song?.artistName}
                    </span>
                </div>
            </div>
        </div>
    )
}