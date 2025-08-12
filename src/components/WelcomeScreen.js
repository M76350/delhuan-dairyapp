import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function WelcomeScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../../assets/logoImage.png")}
          style={styles.logo}
        />
        {/* <Text style={styles.appName}>MyApp</Text> */}

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon
            name="arrow-forward"
            size={20}
            color="#fff"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { width: 200, height: 200, resizeMode: "contain" },
  appName: { fontSize: 20, marginVertical: 10 },
  button: {
    flexDirection: "row",
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 35,
    alignItems: "center",
    margin:20,
    gap:10,
  },
  buttonText: { color: "#fff", fontSize: 20, marginRight: 5 },
  icon: { marginLeft: 5 },
});
