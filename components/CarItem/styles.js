import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height,
    resizeMode: "cover",
    position: "absolute",
  },
  titles: {
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#5c5b62",
  },
  taglineCTA: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    position: "absolute",
    width: "100%",
    bottom: "10%",
  },
});

export default styles;
