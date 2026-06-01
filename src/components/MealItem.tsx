import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { deleteMeal } from "@/storage/meals";
import { colors } from "@/styles/global";

type MealItemProps = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  onDelete: () => void;
  
};

export default function MealItem({
  id,
  name,
  calories,
  protein,
  carbs,
  fat,
  onDelete,
}: MealItemProps) {
  const handleDelete = async () => {
    await deleteMeal(id);
    onDelete();
  };

  const handleLongPress = () => {
    Alert.alert("Delete Meal", `Are you sure you want to delete "${name}"?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: onDelete },
    ]);
  };

  return (
    <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.macros}>
            {calories} cal • {protein}g P • {carbs}g C • {fat}g F
          </Text>
        </View>
        {Platform.OS === "web" && (
          <Pressable onPress={handleDelete} style={styles.deleteButton}>
            <Text style={styles.deleteText}>✕</Text>
          </Pressable>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  macros: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },
  deleteButton: {
    backgroundColor: colors.alert,
    borderRadius: 4,
    marginLeft: 12,
    padding: 4,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: 900,
    color: colors.textSecondary,
  },
});
