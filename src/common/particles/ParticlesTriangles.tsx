import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

function ParticlesTriangles() {
    // init
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(typeof engine);

        await loadTrianglesPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            className="w-full h-full"
            id="ParticlesTriangles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                preset: "triangles",
                fullScreen: { enable: false, zIndex: -1 },
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#e62e2e",
                    },
                    links: {
                        color: "#f59393",
                        distance: 200,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 450,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
export default ParticlesTriangles;
