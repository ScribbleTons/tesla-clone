import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    padding: 20,
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 25,
  },
  logo: {
    height: 60,
    width: 100,
    resizeMode: "contain",
  },
  menu: {
    resizeMode: "contain",
    height: 40,
    width: 40,
  },
});

export default styles;
