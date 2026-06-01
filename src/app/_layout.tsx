import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["props.pointerEvents is deprecated"]);

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
// https://www.youtube.com/watch?v=XCifkDC0yXA
//! 51:31

// Jobb
//! https://www.finn.no/job/ad/461526633
//! https://www.finn.no/job/ad/464513965
//!
