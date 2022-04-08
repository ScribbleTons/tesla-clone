import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const StyledButton = ({ onPress, children, title, variant = "default" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text
        style={[
          styles.button,
          variant === "default" ? styles.default : styles.primary,
        ]}
      >
        {title || children}
      </Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
