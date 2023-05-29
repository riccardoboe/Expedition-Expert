import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
    boxShadow: " 0px 5px 20px grey",
    
    
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
    borderRadius: "5px",
    boxShadow: " 0px 3px 5px grey",
    marginBottom: "10px",
  },
}));
