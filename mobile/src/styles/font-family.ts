import {
  useFonts,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";

export const fontFamily = {
  bold: "Rubik_700Bold",
  medium: "Rubik_500Medium",
  regular: "Rubik_400Regular",
  semiBold: "Rubik_600SemiBold",
};

export const useAppFonts = () =>
  useFonts({
    [fontFamily.bold]: Rubik_700Bold,
    [fontFamily.medium]: Rubik_500Medium,
    [fontFamily.regular]: Rubik_400Regular,
    [fontFamily.semiBold]: Rubik_600SemiBold,
  });
