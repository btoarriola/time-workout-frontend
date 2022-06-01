import { GestureHandlerRootView } from "react-native-gesture-handler";

//* import the main navigator within a NavigatioinContainer
import LoginNav from "./app/components/loginNavigator";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginNav />
    </GestureHandlerRootView>
  );
}
