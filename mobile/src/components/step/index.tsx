import { Text, View } from "react-native";
import { s } from "./styles";
import { StepProps } from "@/types/step.types";
import { colors } from "@/styles/colors";

export const Step = ({ title, description, icon: Icon }: StepProps) => {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
};
