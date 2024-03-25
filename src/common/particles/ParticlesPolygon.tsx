import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadPolygonPath } from "tsparticles-path-polygon";

function ParticlesPolygon() {
    // init
    const particlesInit = useCallback(async (engine: Engine) => {

        await loadPolygonPath(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            className="w-full h-full absolute top-0 left-0 translate-z-0"
            id="ParticlesPolygon"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false, zIndex: -10 },
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#FF0000",
                        animation: {
                            enable: true,
                            speed: 10,
                        },
                    },
                    move: {
                        attract: {
                            enable: false,
                            distance: 100,
                            rotate: {
                                x: 2000,
                                y: 2000,
                            },
                        },
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "destroy",
                        },
                        path: {
                            clamp: false,
                            enable: true,
                            delay: {
                                value: 0,
                            },
                            generator: "polygonPathGenerator",
                            options: {
                                sides: 6,
                                turnSteps: 30,
                                angle: 30,
                            },
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                        trail: {
                            fillColor: "#2e225749",
                            length: 20,
                            enable: true,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 0,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 2,
                    },
                },
                emitters: {
                    direction: "none",
                    rate: {
                        quantity: 1,
                        delay: 0.25,
                    },
                    size: {
                        width: 0,
                        height: 0,
                    },
                    position: {
                        x: 50,
                        y: 50,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
export default ParticlesPolygon;
