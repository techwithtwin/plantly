import { Image, useWindowDimensions } from "react-native";

interface Props {
  imageUri?: string | undefined;
  size?: number;
}
export function PlantlyImage({ imageUri, size }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? width / 1.5;
  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize, borderRadius: 6 }}
    />
  );
}
