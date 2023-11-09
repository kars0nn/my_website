export function SongCard({ song }) {
    return (
        <>
            {
                song !== undefined
                    ?
                    <div style={{ backgroundImage: `url(${song?.album_cover})` }} className="bg-cover bg-no-repeat border-none rounded-xl max-h-[calc(100%+2rem)] w-full">
                        <div className="p-5 rounded-xl filter backdrop-blur-sm bg-black/30 ">
                            <small className={song.is_playing ? "text-white/90 px-4 py-1 rounded-md font-bold bg-black/60 border-2 border-green-500 animate-pulse animate-infinite animate-duration-[5000ms] animate-fill-forwards" : "text-white/90 px-4 py-1 rounded-md font-bold bg-black/50 border-2 border-yellow-500"}>
                                <span className="inline hover:cursor-default">
                                    {song.is_playing ? "Listening to:" : "Recently listened to:"}
                                </span>
                            </small>
                            <div className="mt-3.5">
                                <a className='font-bold text-xl hover:cursor-pointer duration-150 transition-all ease-in-out' target="_blank" href={song?.url} rel="noreferrer noopener">
                                    {song?.name}
                                </a>
                                <br />
                                <span className='hover:cursor-default duration-150 transition-all ease-in-out font-semibold text-white/70' target="_blank" href={song?.artist_url} rel="noreferrer noopener">
                                    by {song?.artist_name}
                                </span>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{ backgroundImage: `url(/favicon.ico)` }} className="bg-cover bg-no-repeat border-none rounded-xl max-h-[calc(100%+2rem)] w-full animate-pulse animate-infinite animate-duration-[800] animate-fill-forwards">
                        <div className="p-5 rounded-xl filter backdrop-blur-sm bg-black/30 ">
                            <small className={"text-white/90 px-4 py-1 rounded-md font-bold bg-black/60 border-2 border-red-500"}>
                                <span className="inline hover:cursor-default">
                                    Loading...
                                </span>
                            </small>
                            <div className="mt-3.5">
                                <span className='font-bold text-xl hover:cursor-pointer duration-150 transition-all ease-in-out' target="_blank" rel="noreferrer noopener">
                                    Loading...
                                </span>
                                <br />
                                <span className='hover:cursor-default duration-150 transition-all ease-in-out font-semibold text-white/70' target="_blank" rel="noreferrer noopener">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}