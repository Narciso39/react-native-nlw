import { Stack } from "expo-router";
import { colors } from "@/styles/theme";
import { useAppFonts, fontFamily } from "@/styles/font-family";
import { Loading } from "@/components/loading";

const Layout = () => {
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  );
};

export default Layout;
