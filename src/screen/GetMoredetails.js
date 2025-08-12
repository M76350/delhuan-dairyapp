


import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const brands = [
  { id: "1", name: "Amul", image: require("../../assets/botle.png") },
  { id: "2", name: "Milk Fresh", image: require("../../assets/D.png") },
  { id: "3", name: "Dairy Life", image: require("../../assets/Healthy-Milk.png") },
  { id: "4", name: "Organic", image: require("../../assets/chaas.png") },
  // Add more brands as needed
];

const categories = [
  { id: "1", name: "Milk", image: require("../../assets/Healthy-Milk.png") },
  { id: "1", name: "Milk", image: require("../../assets/chaas.png") },
  { id: "2", name: "Paneer", image: require("../../assets/cart-items.jpg") },
  // Add more categories as needed
];

export default function GetMoredetails() {
  const [selectedTab, setSelectedTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      {/* Header with location and settings */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.location}>
        <Icon name="location-sharp" size={20} color="#3DBE29" />
        <Text style={styles.locationText}>Gota, Ahmedabad</Text>
        <Icon name="chevron-down" size={20} color="#3DBE29" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settings}>
        <Icon name="settings-outline" size={24} color="#3DBE29" />
      </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
      <TouchableOpacity
        style={[
        styles.tabItem,
        selectedTab === "Delivery" && styles.activeTab,
        ]}
        onPress={() => setSelectedTab("Delivery")}
      >
        <Text
        style={[
          styles.tabText,
          selectedTab === "Delivery" && styles.activeTabText,
        ]}
        >
        Delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
        styles.tabItem,
        selectedTab === "Takeaway" && styles.activeTab,
        ]}
        onPress={() => setSelectedTab("Takeaway")}
      >
        <Text
        style={[
          styles.tabText,
          selectedTab === "Takeaway" && styles.activeTabText,
        ]}
        >
        Takeaway
        </Text>
      </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
      <Image
        source={require("../../assets/botle.png")} // replace with your image
        style={styles.bannerImage}
        resizeMode="contain"
      />
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerTitle}>Up To 50% OFF</Text>
        <Text style={styles.bannerSubtitle}>+ Extra 10% cashback</Text>
        <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
      </View>

      {/* Brands */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>BRANDS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...brands, ...brands].map((brand, idx) => (
        <View key={brand.id + "_" + idx} style={styles.brandItem}>
          <Image source={brand.image} style={styles.brandImage} />
          <Text style={styles.brandName}>{brand.name}</Text>
        </View>
        ))}
      </ScrollView>
      </View>

      {/* Shop by Category */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...categories, ...categories].map((cat, idx) => (
        <View key={cat.id + "_" + idx} style={styles.categoryItem}>
          <Image source={cat.image} style={styles.categoryImage} />
          <Text style={styles.categoryName}>{cat.name}</Text>
        </View>
        ))}
      </ScrollView>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#3DBE29",
    fontSize: 16,
    marginHorizontal: 6,
    fontWeight: "600",
  },
  settings: {},
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#3DBE29",
  },
  tabText: {
    color: "#888",
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#3DBE29",
  },
  bannerContainer: {
    flexDirection: "row",
    backgroundColor: "#3DBE29",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  bannerImage: {
    width: 100,
    height: 120,
    marginRight: 16,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
  },
  orderBtn: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  orderBtnText: {
    color: "#3DBE29",
    fontWeight: "700",
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 12,
    color: "#222",
  },
  brandItem: {
    width: 80,
    alignItems: "center",
    marginRight: 16,
  },
  brandImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  brandName: {
    marginTop: 6,
    fontSize: 12,
    color: "#222",
    textAlign: "center",
  },
  categoryItem: {
    width: 140,
    marginRight: 16,
  },
  categoryImage: {
    width: 140,
    height: 100,
    borderRadius: 16,
  },
  categoryName: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
  },
});
