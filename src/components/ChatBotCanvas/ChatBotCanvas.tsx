import { AppContext } from "../../context/IsPlayingContext";
import {
	Environment,
	Html,
	Loader,
	OrbitControls,
	SpotLight,
	useAnimations,
	useDepthBuffer,
	useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useRef } from "react";
import { Vector3 } from "three";
import { Euler } from "three";



//Resource to Head : https://sketchfab.com/3d-models/blender-sushi-virtual-journal-16th-april-2020-634af2ae983f4fb8a9295e6b1b3d5c74
const Head = () => {
	const { isPlaying, setIsPlaying } = useContext(AppContext);
	const model = useGLTF("./head.glb");
	const animations = useAnimations(model.animations, model.scene);
	const action = animations.actions.Animation;


	const depthBuffer = useDepthBuffer({ frames: 1 });
	useEffect(() => {
		if (isPlaying) {
			action?.play();
		} else {
			action?.fadeOut(0.5);
			setTimeout(() => {
				action?.stop();
			}, 500);
		}
	}, [isPlaying, action]);

	console.log(depthBuffer)
	console.log(setIsPlaying)
	console.log(Vector3)
	console.log(useRef, useFrame, useThree,SpotLight, Environment)

	useEffect(() => {
		model.scene.rotation.copy(new Euler(0, Math.PI*1.5, 0)); // Rotate the model to face forward
	}, [model.scene]);

	return (
		<>
			<primitive object={model.scene}   />
			
		</>
	);
};

export const ChatBotCanvas = () => {
	return (
		<div className="chatbot-canvas-container">
		<Canvas  camera={{
			position: [0, 1, 3], // Adjust the initial camera position
			fov: 50, // Field of view
		}}>
			<OrbitControls
				enableZoom={false}
				enableDamping
				maxPolarAngle={Math.PI * 0.5}
				minAzimuthAngle={-Math.PI * 0.5}
				maxAzimuthAngle={Math.PI * 0.5}
				target={[0, 1, 0]}
				
		// Adjust the target to center the model
			/>
			
			<ambientLight intensity={1} />
			<Suspense
				fallback={
					<Html>
						<Loader />
					</Html>
				}
			>
				<Head />
			</Suspense>
		</Canvas>
		</div>
	);
};
