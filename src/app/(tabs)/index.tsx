import HomeHeader from "../../components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";

import { globalStyles } from "@/styles/global";
import { Text, ScrollView } from "react-native";
import { getMeals, Meal } from "@/storage/meals";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export default function HomeScreen() {
  const [meal, setMeals] = useState<Meal[]>([]);

  const loadMeals = useCallback(async () => {
    const data = await getMeals();
    setMeals(data);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [loadMeals]),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid meals={meal} />
      <RecentMeals meals={meal} onDelete={loadMeals} />
    </ScrollView>
  );
}
