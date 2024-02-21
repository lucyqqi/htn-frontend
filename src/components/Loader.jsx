import { Html, useProgress } from "@react-three/drei";

// canvasloader component displays loading progress for 3d canvas elements
const CanvasLoader = () => {
  const { progress } = useProgress(); // useprogress hook from drei to track loading progress

  return (
    <Html
      as='div' // specifies the html element type
      center // centers the loader in the canvas
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // styles for centering and arranging the loader and text
      }}
    >
      <span className='canvas-loader'></span> // custom loader animation defined in css
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40, // styles for the loading progress text
        }}
      >
        {progress.toFixed(2)}% // displays the loading progress percentage
      </p>
    </Html>
  );
};

export default CanvasLoader;
