import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    flex: 1, // Ensures the content takes up available space above the bottom bar
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 2,
  },
  bottomBarItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  bottomBarLabel: {
    fontSize: 12,
    color: "#222222",
  },

});