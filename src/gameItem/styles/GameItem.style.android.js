import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "rgba( 0,139, 52, 0.7)"
  },
  timeContainer: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 11,
    color: "#fff"
  },
  mainContainer: {
    flex: 3,
    flexDirection: "row"
  },
  teamContainer: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center"
  },
  teamImg: {
    height: 35,
    width: 35
  },
  bettingArea: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  input: {
    height: 24,
    width: 24,
    borderWidth: 1,
    color: "#fff",
    borderColor: "#fff",
    textAlign: "center",
    padding: 0
  },
  carlsbergLeaf: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "rgb(0,155,58)"
  }
});

export default styles;
