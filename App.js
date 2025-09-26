import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import {colors, drumKit} from "./constants/data";

export default function App() {

  const playSound = async (drumKitSound) => {
    try {
      const soundObject = new Audio.Sound();

      const path = drumKit[drumKitSound];
      await soundObject.loadAsync(path);
      await soundObject.playAsync().then((status) => {
        console.log(status);

        setTimeout(() => {
          soundObject.unloadAsync().then((s) => {
            console.log(s);
          });
        }, status.durationMillis);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            playSound("bass1");
          }}
          style={[
            {
              backgroundColor: colors["bass"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound("bass2");
          }}
          style={[
            {
              backgroundColor: colors["bass"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound("bass3");
          }}
          style={[
            {
              backgroundColor: colors["bass"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            playSound("cymbal");
          }}
          style={[
            {
              backgroundColor: colors["cymbal"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound("cymbal2");
          }}
          style={[
            {
              backgroundColor: colors["cymbal"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound("drumstick");
          }}
          style={[
            {
              backgroundColor: colors["drumstick"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            playSound("hihat");
          }}
          style={[
            {
              backgroundColor: colors["hihat"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound("snare");
          }}
          style={[
            {
              backgroundColor: colors["snare"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            playSound("tom");
          }}
          style={[
            {
              backgroundColor: colors["tom"],
            },
            styles.button,
          ]}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    height: 130,
    margin: 10,
    borderRadius: 4,
  },
});
