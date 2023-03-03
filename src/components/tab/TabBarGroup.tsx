import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const tabs: TabBar[] = [
    {
        "id":1,
        "name":"Beskrivelse",
        "isSelected":true
    },
    {
        "id":2,
        "name":"Detaljer",
        "isSelected":false
    }
]

type TabBarGroupProps = {
  headline: string;
  headlineColor: string;
};

type TabBar = {
  id: number
  name: string;
  isSelected: boolean;
}

function TabBarGroup() {
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    tabs.map((item) => {
      if(item.isSelected){
        setSelectedTab(item.id);
      }
    })
  }, []);
  
  const onSelect = (id: number) => setSelectedTab(id);

  return (
    <View style={styles.tabBarGroupContainer}>
      {tabs.map((tab: TabBar, index: number) => (
        <TouchableHighlight
        activeOpacity={1}
        underlayColor={selectedTab === tab.id ? "none" : "#e7e7e7"}
          onPress={() => onSelect(tab.id)}
          key={index}
          style={
            [styles.tabButton, index === 0 && styles.firstTabButton, 
                index === tabs.length - 1 && styles.lastTabButton,
                selectedTab === tab.id && styles.selectedButton
            ]}
            >
            <Text>{tab.name}</Text>
        </TouchableHighlight>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBarGroupContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    firstTabButton: {
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    lastTabButton: {
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    },
    tabButton: {
        backgroundColor: 'lightgrey',
        height: 36,
        flexGrow: 1,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexBasis: 0
    },
    selectedButton: {
        backgroundColor: 'seagreen'
    }
});

export default TabBarGroup;