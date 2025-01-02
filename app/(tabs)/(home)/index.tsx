import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate("/new")}
        />
      }
      renderItem={({ item }) => <PlantCard plant={item} />}
    >
      <StatusBar style="dark" />
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
