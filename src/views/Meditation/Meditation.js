import {useEffect, useState} from "react";
import "./Meditation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Header from "../../components/Header";
import video1 from "../../assets/videos/video1.mp4"
import video2 from "../../assets/videos/video2.mp4"
import video3 from "../../assets/videos/video3.mp4"
import video4 from "../../assets/videos/video4.mp4"
import video5 from "../../assets/videos/video5.mp4"
import {VideoPlayer} from "./VideoPlayer";
import Chakra from "../../assets/images/Chakras-cuate.png";
import {Col, Container, Row} from "react-bootstrap";
//import { ReactVideo } from "reactjs-media";
//import VideoPlayer from 'react-video-js-player';



export default function Meditation() {
    const [isMeditaionOkeyed, setIsMeditationOkeyed] = useState(false);

    useEffect(() => {

    }, [])

    /*Take a meditation position: keep your spine loosely straight, and let your body relax. If you find that you can’t relax, just allow that to be true — that in itself is to be relaxed! You can gently close your eyes, or leave them slightly open, whichever feels most comfortable.
Ask yourself, from deep within your heart, “What do I really want?”*/
    return (
        <div id="meditationWrapper">
            <Header/>
            {
                !isMeditaionOkeyed ?

                    <div
                        className="fixed w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 px-12 py-4 text-center shadow-lg left-1/2 top-24 transform translate -translate-x-1/2 rounded-xl bg-gray-300 z-50">
                        <div className="flex flex-col items-center">
                            <img src={Chakra}/>
                            <span className="font-medium">Take a meditation position: keep your spine loosely straight, and let your body relax. If you find that you can’t relax, just allow that to be true — that in itself is to be relaxed! You can gently close your eyes, or leave them slightly open, whichever feels most comfortable.
Ask yourself, from deep within your heart, “What do I really want?”</span>
                            <button
                                className="px-8 py-2 bg-red-600 rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-red-500 shadow-xl"
                                onClick={() => setIsMeditationOkeyed(true)}>Let's start
                            </button>
                        </div>
                    </div>
                    :
                    <div className="pt-48 px-8 md:px-24">
                        <Container>
                            <Row className="justify-content-md-evenly">
                                <Col>
                                    <span className="text-2xl text-white font-semibold">
                                        Start Your</span>
                                    <br/>
                                    <span className="text-2xl text-white font-semibold">
                                        Mindfullness Journey</span>
                                </Col>
                                <Col className="justify-content-end" md={{ span: 3, offset: 2 }}>
                                    {/*<span className="text-2xl text-white font-semibold">
                                        Meditation Videos
                                    </span>*/}
                                </Col>
                                <Col  md={{ span: 2, offset: 3 }}>
                                    <span className="text-2xl text-white font-semibold">
                                        Select Your Environment
                                    </span>
                                    <br/>
                                    <span className="text-2xl text-white font-semibold">
                                        for Meditate
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                  <span className="mt-2 text-xl text-white font-thin">
                            Take a meditation position: keep your spine loosely straight, and let your body relax.
                                      If you find that you can’t relax, just allow that to be true — that in itself is to be relaxed!
                                      You can gently close your eyes, or leave them slightly open, whichever feels most comfortable.
                                    </span>

                                </Col>
                                <Col md={8}>
                                    <Carousel variant="dark" interval={null} indicators={false}>
                                        <Carousel.Item>
                                            <VideoPlayer id="video1" video={video1}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <VideoPlayer id="video2" video={video2}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <VideoPlayer id="video3" video={video3}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <VideoPlayer id="video4" video={video4}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <VideoPlayer id="video5" video={video5}/>
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col md={2}>
                                    <span className="mt-2 stext-xl text-white font-thin">
                                        You can decide which place do you want when meditate from various video options.
                                        Enjoy your journey!
                                    </span>

                                    <img className="pt-6" src={Chakra}/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            }
        </div>

    )
}