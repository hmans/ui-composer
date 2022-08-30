import { Environment, OrbitControls } from "@react-three/drei"
import { NextPage } from "next"
import { RenderCanvas, RenderPipeline } from "render-composer"

const Test: NextPage = () => {
	return (
		<RenderCanvas>
			<RenderPipeline vignette bloom antiAliasing>
				<Environment preset="sunset" />

				<mesh>
					<icosahedronGeometry />
					<meshStandardMaterial color="hotpink" />
				</mesh>

				<OrbitControls />
			</RenderPipeline>
		</RenderCanvas>
	)
}

export default Test
