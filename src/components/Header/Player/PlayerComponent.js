import audio from "./kendrick-lamar-money-trees.mp3"

export default function  PlayerComponent () {
    return(
        <div className="player">
            <audio controls autoPlay={true} loop={true}>
                <source src={audio} />
            </audio>
        </div>
    )
}