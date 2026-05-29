import { globalStyles } from "@/styles/global";
import { Text, ScrollView } from "react-native";
import HomeHeader from "@/components/HomeHeader";

export default function AddMealScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>
    </ScrollView>
  );
}
