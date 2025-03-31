import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin>
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={state ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={value => setState({...state, isActive: value})}
        value={state.isActive}
      /> */}

      <ThemedCard>
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
        />
        <ThemedSwitch
          text="Feliz"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mt-4"
        />
      </ThemedCard>
    </ThemedView>
  );
};

export default Switches;
