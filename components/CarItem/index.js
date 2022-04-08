import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";

import styles from "./styles";

const CarItem = ({ name, tagline, taglineCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton variant="primary" title={"Custom Order"} />
        <StyledButton title="Existing Inventory" />
      </View>
    </View>
  );
};

export default CarItem;
