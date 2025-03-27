import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { allRoutes } from "@/constants/Routes";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // const backgroundColor = useThemeColor(
    //   { light: "red", dark: "indigo" },
    //   "background"
    // );
    
  // Usar color de fondo por defecto
  const backgroundColor = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: backgroundColor }}
    >
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={colorScheme === 'dark' ? "light-content" : "dark-content"}
        translucent={false}
      />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* Test de estilos con modo oscuro y claro */}
        {/* <ThemedView margin safe>
          <ThemedText
            className="text-center mt-40"
            type="h1"
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            animi, temporibus Lorem, ipsum. Lorem ipsum, dolor sit amet
            consectetur!
          </ThemedText>
        </ThemedView> */}

        <Stack
          screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            contentStyle: { backgroundColor },
            headerStyle: { backgroundColor },
          }}
        >
          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{ title: route.title }}
            />
          ))}
        </Stack>

      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
