import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ViewArticle from "./screens/ViewArticle";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from "react-native-elements";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import PopularArticles from "./screens/PopularArticles";
import RecommendedArticles from "./screens/RecommendedArticles";

export default function App() {
    return <AppContainer/>;
}

const AppStackNavigator = createStackNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "All Articles",
      headerTitleStyle: {
        color: '#FFFF',
        alignSelf: 'center',
        fontSize: 30
      },
      headerStyle: {
        backgroundColor: '#485696'
      }
    })
  },
  ViewArticle : {
    screen: ViewArticle,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <Icon name = "arrow-left" color = "#FFF" size = {30} onPress = {() => {navigation.goBack()}} type = "feather" containerStyle = {{margin: 10}}/>,
      headerTitle: "View Article",
      headerTitleStyle: {
        color: '#FFFF',
        fontSize: 30
      },
      headerStyle: {
        backgroundColor: '#485696'
      }
    })
  }
},
{
  initialRouteName: "Home"
});

const TopTabNavigator = createMaterialTopTabNavigator({
	StackNavigator: {
		screen: AppStackNavigator,
		navigationOptions: {
			tabBarLabel: "All Articles"
		}
	},
	RecommendedArticles: {
		screen: RecommendedArticles,
		navigationOptions: {
			tabBarLabel: "Recommended Articles"
		}
	},
	PopularArticles: {
		screen: PopularArticles,
		navigationOptions: {
			tabBarLabel: "Popular Articles"
		}
	}
},
{
  initialRouteName: "StackNavigator"
})

const AppContainer = createAppContainer(TopTabNavigator)