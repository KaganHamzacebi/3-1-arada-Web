import useVideoPlayer from "./useVideoPlayer";
import {useEffect, useRef} from "react";
import "./VideoPlayer.css";
import {PauseIcon, PlayIcon} from "@heroicons/react/solid";


export const VideoPlayer = (props) => {
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    } = useVideoPlayer(videoElement);

    useEffect(() => {
    }, []);

    return (
        <div className="containerVideo">
            <div className="video-wrapper">
                <video
                    src={props.video}
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls">
                    <div className="actions">
                        {
                            !(playerState.isPlaying) ? (
                                <PlayIcon className="w-5 text-white h-5 justify-center align-items-center"
                                          onClick={togglePlay}/>
                            ) : (
                                <PauseIcon className="w-5 text-white h-5 justify-center align-items-center"
                                           onClick={togglePlay}/>
                            )}
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={playerState.progress}
                        onChange={(e) => handleVideoProgress(e)}
                    />
                    <select
                        className="velocity"
                        value={playerState.speed}
                        onChange={(e) => handleVideoSpeed(e)}
                    >
                        <option value="0.50">0.50x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="2">2x</option>
                    </select>
                    <button className="mute-btn" onClick={toggleMute}>
                        {!playerState.isMuted ? (
                            <i className="bx bxs-volume-full"></i>
                        ) : (
                            <i className="bx bxs-volume-mute"></i>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
    // ...
};

