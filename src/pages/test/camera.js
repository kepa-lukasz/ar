
import React, { useState } from "react";
import {useEffect, useRef} from "react" 
import * as faceapi from "face-api.js"
import "./test.css"


export default function Camera() {
  const width = 350
  const height = 250
  

  const videoRef = useRef()
  const canvasRef = useRef()

  useEffect(()=>{
   
    startVideo()
    videoRef && loadModels()
  }, [window.screen.width])

  const startVideo = () =>{
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    }).catch(err=>{
        console.log(err)
    })
  }
  else{
    videoRef.current.innerHtml = "nie udało się wczytać obrazu z kamery"
  }
  }

  const faceMyDetect = () => {
    setInterval(async()=>{
      const detections = await faceapi.detectAllFaces(videoRef.current, 
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
      faceapi.matchDimensions(canvasRef.current, {width:width, height:height})

      const resized = faceapi.resizeResults(detections, {width:width, height:height})

      faceapi.draw.drawDetections(canvasRef.current, resized)
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized)
      if(detections.length > 0){
        console.log(detections[0].expressions.happy)
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
      faceMyDetect()
    })
  }
  
  

    
  return (
    <div className="d-flex justify-content-center camera-container" >
      <video crossOrigin='anonymous' width={width} height={height} ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} width={width} height={height} className='appcanvas'></canvas>
    </div>
  );
};


