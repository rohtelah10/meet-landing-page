import { theme } from "../theme/theme";

interface MarkerProps {
  children: React.ReactNode;
}

const NumberMarker: React.FC<MarkerProps> = ({ children }) => {
  return (
    <div
      style={{
        width: "56px",
        height: "136px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{ width: "1px", height: "80px", border: `1px dotted ${theme.colors["slate-300"]}` }}
      ></div>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px dotted #000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default NumberMarker;
