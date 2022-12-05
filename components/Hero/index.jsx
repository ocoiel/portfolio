/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  Fragment,
} from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import { Beam } from "../PrismElements/Beam";
import { Rainbow } from "../PrismElements/Rainbow";
import { Prism } from "../PrismElements/Prism";
import { Flare } from "../PrismElements/Flare";
import { Box } from "../PrismElements/Box";
import { Switch } from "@headlessui/react";
import { TbMusic, TbMusicOff } from "react-icons/tb";
// import useBlobity from 'blobity/lib/react/useBlobity';

export function lerp(object, prop, goal, speed = 0.1) {
  object[prop] = THREE.MathUtils.lerp(object[prop], goal, speed);
}

const vector = new THREE.Vector3();
export function lerpV3(value, goal, speed = 0.1) {
  value.lerp(vector.set(...goal), speed);
}

export function calculateRefractionAngle(
  incidentAngle,
  glassIor = 2.5,
  airIor = 1.000293
) {
  const theta = Math.asin((airIor * Math.sin(incidentAngle)) / glassIor) || 0;
  return theta;
}

export function Hero() {
  // useBlobity({
  //   licenseKey: 'MIT',
  //   zIndex: 5,
  //   // color: '#666666',
  //   dotColor: '#fff',
  //   magnetic: false
  // });
  //https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/DwlG-F-6800-STD.cube
  const texture = useLoader(
    LUTCubeLoader,
    "https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/DwlG-F-6800-STD.cube"
  );

  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  useEffect(() => {
    audioRef.current = new Audio("/assets/lacrimosa.mp3");
  }, []);

  return (
    <>
      <main className="h-[100vh] w-full relative flex justify-center content-center">
        <h1 className="hi-there max-[475px]:text-4xl z-50 h-max">Hi, there!</h1>
        <div className="flex content-end justify-between absolute top-[80%] text-center px-4 h-16 w-full z-10 ">
          <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
            {({ checked }) => (
              /* Use the `checked` state to conditionally style the button. */
              <div className="flex justify-between items-center w-auto">
                <button
                  onClick={playing ? pause : play}
                  className={`${
                    checked
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      : "bg-transparent"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <audio ref={audioRef} loop className="hidden"></audio>
                  <span className="sr-only">Enable music</span>
                  <span
                    className={`${
                      checked ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </button>
                {checked ? (
                  <TbMusic className="text-4xl" />
                ) : (
                  <TbMusicOff className="text-4xl" />
                )}
              </div>
            )}
          </Switch>
          <svg width="60px" viewBox="0 0 14.334 24.75" className="">
            <circle
              className="circle-1"
              fill="white"
              cx="7.167"
              cy="6"
              r="1.2"
            />
            <circle
              className="circle-2"
              fill="white"
              cx="7.167"
              cy="6"
              r="1.2"
            />
            <path
              stroke="white"
              fill="transparent"
              d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416 c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"
            />
          </svg>
          <div className="flex justify-center items-center">
            <span className="text-center">??????</span>
          </div>
        </div>
        {/* <p className="self-end items-end absolute text-center text-sm text-gray-200">
          Seja bem-vinda, pessoa querida! 😇💜
        </p> */}
        <Canvas
          className="w-full h-full absolute -my-4"
          orthographic
          gl={{ antialias: false }}
          camera={{ position: [0, 0, 100], zoom: 70 }}
        >
          <color attach="background" args={["black"]} />
          <Scene />
          <EffectComposer disableNormalPass>
            <Bloom
              mipmapBlur
              levels={9}
              intensity={1.5}
              luminanceThreshold={1}
              luminanceSmoothing={1}
            />
            <LUT lut={texture} />
          </EffectComposer>
        </Canvas>
      </main>
    </>
  );
}

function Scene() {
  const [isPrismHit, hitPrism] = useState(false);
  const flare = useRef(null);
  const ambient = useRef(null);
  const spot = useRef(null);
  const boxreflect = useRef(null);
  const rainbow = useRef(null);

  const rayOut = useCallback(() => hitPrism(false), []);
  const rayOver = useCallback((e) => {
    // Break raycast so the ray stops when it touches the prism.
    e.stopPropagation();
    hitPrism(true);
    // Set the intensity really high on first contact.
    rainbow.current.material.speed = 1;
    rainbow.current.material.emissiveIntensity = 20;
  }, []);

  const vec = new THREE.Vector3();
  const rayMove = useCallback(({ api, position, direction, normal }) => {
    if (!normal) return;
    // Extend the line to the prisms center.
    vec.toArray(api.positions, api.number++ * 3);
    // Set flare.
    flare.current.position.set(position.x, position.y, -0.5);
    flare.current.rotation.set(0, 0, -Math.atan2(direction.x, direction.y));

    // Calculate refraction angles.
    let angleScreenCenter = Math.atan2(-position.y, -position.x);
    const normalAngle = Math.atan2(normal.y, normal.x);

    // The angle between the ray and the normal.
    const incidentAngle = angleScreenCenter - normalAngle;

    // Calculate the refraction for the incident angle.
    const refractionAngle = calculateRefractionAngle(incidentAngle) * 6;

    // Apply the refraction.
    angleScreenCenter += refractionAngle;
    rainbow.current.rotation.z = angleScreenCenter;

    // Set spot light.
    lerpV3(
      spot.current.target.position,
      [Math.cos(angleScreenCenter), Math.sin(angleScreenCenter), 0],
      0.05
    );
    spot.current.target.updateMatrixWorld();
  }, []);

  useFrame((state) => {
    // Tie beam to the mouse.
    boxreflect.current.setRay(
      [
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        0,
      ],
      [0, 0, 0]
    );

    // Animate rainbow intensity.
    lerp(
      rainbow.current.material,
      "emissiveIntensity",
      isPrismHit ? 2.5 : 0,
      0.1
    );
    spot.current.intensity = rainbow.current.material.emissiveIntensity;

    // Animate ambience.
    lerp(ambient.current, "intensity", 0, 0.025);
  });

  return (
    <>
      {/* Lights */}
      <ambientLight ref={ambient} intensity={0} />
      <pointLight position={[10, -10, 0]} intensity={0.05} />
      <pointLight position={[0, 10, 0]} intensity={0.05} />
      <pointLight position={[-10, 0, 0]} intensity={0.05} />
      <spotLight
        ref={spot}
        intensity={1}
        distance={7}
        angle={1}
        penumbra={1}
        position={[0, 0, 1]}
      />

      {/* Prism + blocks + reflect beam */}
      <Beam ref={boxreflect} bounce={10} far={20}>
        <Prism
          scale={0.6}
          position={[0, -0.5, 0]}
          onRayOver={rayOver}
          onRayOut={rayOut}
          onRayMove={rayMove}
        />
        <Box position={[-1.4, 1, 0]} rotation={[0, 0, Math.PI / 8]} />
        <Box position={[-2.4, -1, 0]} rotation={[0, 0, Math.PI / -4]} />
      </Beam>
      {/* Rainbow and flares */}
      <Rainbow ref={rainbow} startRadius={0} endRadius={0.5} fade={0} />
      <Flare
        ref={flare}
        visible={isPrismHit}
        renderOrder={10}
        scale={1.25}
        streak={[12.5, 20, 1]}
      />
    </>
  );
}
