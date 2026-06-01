import HomeHeader from "../../components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";

import { globalStyles } from "@/styles/global";
import { Text, ScrollView, View } from "react-native";
import { getMeals, Meal } from "@/storage/meals";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import CopyButton from "@/components/CopyButton";
import ReminderToggle from "@/components/ReminderToggle";

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
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>MacroZone</Text>
        <ShareButton meals={meal} />
      </View>

      <HomeHeader />
      <MacroGrid meals={meal} />
      <CopyButton meals={meal} />
      <ReminderToggle />
      <RecentMeals meals={meal} onDelete={loadMeals} />
    </ScrollView>
  );
}
