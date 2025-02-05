"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube } from "lucide-react"
import * as THREE from "three"

interface ARViewerProps {
  modelUrl: string
  fallbackImageUrl: string
}

export default function ARViewer({ modelUrl, fallbackImageUrl }: ARViewerProps) {
  const [isARSupported, setIsARSupported] = useState(false)

  useEffect(() => {
    // Check if WebXR is supported
    if ("xr" in navigator) {
      // @ts-ignore: Unreachable code error
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        setIsARSupported(supported)
      })
    }
  }, [])

  const startARSession = async () => {
    // @ts-ignore: Unreachable code error
    const session = await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["hit-test", "dom-overlay"],
      domOverlay: { root: document.body },
    })

    // Set up the WebGL context and start the AR session
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl", { xrCompatible: true })

    // @ts-ignore: Unreachable code error
    session.updateRenderState({ baseLayer: new XRWebGLLayer(session, gl) })

    const referenceSpace = await session.requestReferenceSpace("local")

    // Load the 3D model
    const loader = new THREE.GLTFLoader()
    let model: THREE.Object3D

    loader.load(modelUrl, (gltf) => {
      model = gltf.scene
      model.scale.set(0.5, 0.5, 0.5) // Adjust scale as needed
    })

    // Set up the render loop
    const onXRFrame = (time: number, frame: XRFrame) => {
      session.requestAnimationFrame(onXRFrame)
      const pose = frame.getViewerPose(referenceSpace)

      if (pose) {
        const view = pose.views[0]
        const viewport = session.renderState.baseLayer!.getViewport(view)
        gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height)

        // Render the 3D model here
        // This is a simplified example and would need more setup for a full AR experience
      }
    }

    session.requestAnimationFrame(onXRFrame)
  }

  if (!isARSupported) {
    return (
      <div className="relative w-full h-64">
        <img src={fallbackImageUrl || "/placeholder.svg"} alt="Product" className="w-full h-full object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
          AR not supported on this device
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-64">
      <img src={fallbackImageUrl || "/placeholder.svg"} alt="Product" className="w-full h-full object-cover" />
      <Button
        className="absolute bottom-4 right-4 bg-primary hover:bg-primary-dark text-white"
        onClick={startARSession}
      >
        <Cube className="mr-2 h-4 w-4" /> View in AR
      </Button>
    </div>
  )
}

