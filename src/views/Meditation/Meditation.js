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
import {Col, Container, Row} from "react-bootstrap";
import Chakra from "../../assets/images/Chakras-cuate.png";
//import { ReactVideo } from "reactjs-media";
//import VideoPlayer from 'react-video-js-player';


export default function Meditation() {
    const [isMeditaionOkeyed, setIsMeditationOkeyed] = useState(false);

    useEffect(() => {

    }, [])


    return (
        <div id="meditationWrapper">
            <Header/>
            <div className="pt-48 px-8 md:px-24">
                <Container>
                    <Row md={12}>
                        <Col md={2}>
                            <Row>
                                <span className="text-2xl text-white font-semibold">
                                        Start Your</span>
                                <br/>
                                <span className="text-2xl text-white font-semibold">
                                        Mindfullness Journey</span>
                            </Row>
                            <Row>
                                  <span className="mt-2 text-xl text-white font-thin">
                            Take a meditation position: keep your spine loosely straight, and let your body relax.
                                      If you find that you can’t relax, just allow that to be true — that in itself is to be relaxed!
                                      You can gently close your eyes, or leave them slightly open, whichever feels most comfortable.
                                    </span>

                            </Row>
                        </Col>
                        <Col md={8} className="align-items-center">
                            <Carousel variant="dark" interval={null} indicators={false}  className="mt-3">
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
                            <Col>
                                    <span className="text-2xl text-white font-semibold">
                                        Select Your Environment
                                    </span>
                                <br/>
                                <span className="text-2xl text-white font-semibold">
                                        for Meditate
                                    </span>
                            </Col>
                            <Col>
                                    <span className="mt-2 stext-xl text-white font-thin">
                                        You can decide which place do you want when meditate from various video options.
                                        Enjoy your journey!
                                    </span>

                                <img className="pt-6" src={Chakra}/>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}