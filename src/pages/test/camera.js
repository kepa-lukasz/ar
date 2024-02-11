
import React from "react";
import {useEffect, useRef} from "react" 
import * as faceapi from "face-api.js"
import "./test.css"


export default function Camera() {
  const videoRef = useRef()
  const canvasRef = useRef()

  useEffect(()=>{
    startVideo()
    videoRef && loadModels()
  }, [])

  const startVideo = () =>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    }).catch(err=>{
        console.log(err)
    })

  }

  const faceMyDetect = () => {
    setInterval(async()=>{
      const detections = await faceapi.detectAllFaces(videoRef.current, 
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
      faceapi.matchDimensions(canvasRef.current, {width:350, height:250})

      const resized = faceapi.resizeResults(detections, {width:350, height:250})

      faceapi.draw.drawDetections(canvasRef.current, resized)
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized)
      if(detections.length > 0){
        console.log(detections[0].expressions)
      }

    }, 1000)

  }
  const loadModels = () =>{
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models")
    ]).then(()=>{
        console.log("done")
      faceMyDetect()
    })
  }
  
  

    
  return (
    <div className="d-flex justify-content-center" style={{ocerflow:"hidden"}}>
      <video crossOrigin='anonymous' width={350} height={250} ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} width={350} height={250} className='appcanvas'></canvas>
    </div>
  );
};


