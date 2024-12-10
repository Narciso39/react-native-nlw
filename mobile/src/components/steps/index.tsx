import { View, Text } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { object } from "@/utils/Object";

export const Steps = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona</Text>
      {object.map((items) => (
        <Step
          key={items.id}
          icon={items.icon}
          title={items.title}
          description={items.description}
        />
      ))}
    </View>
  );
};
