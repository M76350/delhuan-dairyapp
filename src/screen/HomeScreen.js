import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/dellogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.menuIcon}>\u2630</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Headline */}
          <View style={styles.headlineContainer}>
            <Text style={styles.headlineGreen}> Delhuan Milk</Text>
            <Text style={styles.headlineDark}>Delivery App</Text>
          </View>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            To Stay Ahead Of The Curve, Serve Your Customers Through An
            On-Demand Food Delivery App.
          </Text>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>View More</Text>
            </TouchableOpacity>
          </View>

          {/* App Screenshots */}
          <View style={styles.screenshotContainer}>
            <Image
              source={require("../../assets/mobilimage.png")}
              style={styles.screenshot}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 20,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 120,
    height: 30,
  },
  menuIcon: {
    fontSize: 24,
    color: "#333",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  headlineContainer: {
    marginTop: 20,
  },
  headlineGreen: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#7ab547", // Green color from the image
    lineHeight: 40,
  },
  headlineDark: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#222",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 15,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 15,
  },
  buttonPrimary: {
    backgroundColor: "#7ab547", // Green button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPrimaryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7ab547",
  },
  buttonSecondaryText: {
    color: "#7ab547",
    fontSize: 16,
    fontWeight: "600",
  },
  screenshotContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  screenshot: {
    width: "100%",
    height: 400,
  },
});
