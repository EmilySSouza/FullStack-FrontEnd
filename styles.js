import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  headerStyle: {
    backgroundColor: "#0320fc",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    color: "#666666",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    color: '#333333',
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10, 
  },
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#ffffff",
  },
});

export default styles;