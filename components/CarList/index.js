import { FlatList, StyleSheet, Dimensions } from "react-native";
import CarItem from "../../components/CarItem";
import cars from "../../cars";

const CarList = () => {
  return (
    <FlatList
      style={styles.list}
      data={cars}
      renderItem={({ item }) => <CarItem {...item} />}
      keyExtractor={(item) => item.name}
      snapToInterval={Dimensions.get("window").height}
      decelerationRate="fast"
      snapToAlignment="start"
      snapToOffset={(index) => index * Dimensions.get("window").height}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CarList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
});
