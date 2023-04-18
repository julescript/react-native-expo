# React Native Cheat Sheet

> by **Julien Hosri**
> 

# Introduction

React Native is a framework developed by Facebook for building mobile applications using JavaScript and React. It is a popular choice among developers since it allows for the creation of high-performance, native mobile applications for both iOS and Android platforms using a single codebase. If you are familiar with React JS and have some knowledge of TypeScript and functional components, then learning React Native will be a breeze.

## Differences Between React JS and React Native

While React JS and React Native share many similarities, there are some key differences that you should be aware of:

| Differences | React JS | React Native |
| --- | --- | --- |
| Styling | Uses CSS for styling | Uses a set of pre-defined styles in JavaScript objects |
| Components | Uses standard web components | Uses mobile-specific components optimized for performance |
| Native APIs | Limited access to native APIs, relies on web APIs | Provides access to native APIs for both iOS and Android |

# **React Native CLI vs Expo**

![Untitled](React%20Native%20Cheat%20Sheet%20bded0fb8e33e4a45b92034c1bfe2777f/Untitled.png)

React Native CLI and Expo are two popular tools used for building React Native applications. Each has its own advantages and trade-offs, which you should consider when choosing a tool for your project.

## **React Native CLI**

React Native CLI is the official command-line interface for creating and managing React Native projects. It provides a minimal setup with more control over the native modules and the build process. This makes it a suitable choice for projects that require custom native code or have specific platform requirements.

Advantages:

- Full control over native modules and build process
- Easier integration of native code and third-party libraries

Drawbacks:

- Steeper learning curve for developers unfamiliar with native development
- Requires separate setup for iOS and Android development environments

## **Expo**

Expo is a third-party platform and a set of tools built around React Native that simplifies the app development process. It provides a managed workflow and handles many aspects of app development, such as build, release, and updates.

Advantages:

- Simplified development process with a managed workflow
- Over-the-air (OTA) updates for app deployment and updates
- Cross-platform development with a single codebase

Drawbacks:

- Limited access to native modules and APIs
- Custom native code cannot be easily integrate

### **Creating an Expo project with TypeScript**

To create an Expo project with TypeScript, follow these steps:

1. First, ensure you have the latest version of Node.js and npm installed on your machine. You can check this by running **`node -v`** and **`npm -v`** in your terminal.
2. Next, install the Expo CLI globally by running:
    
    ```bash
    Copy code
    npm install -g expo-cli
    ```
    
3. Create a new Expo project using the TypeScript template:
    
    ```bash
    arduinoCopy code
    expo init my-expo-project --template expo-template-blank-typescript
    ```
    
    Replace **`my-expo-project`** with your desired project name.
    
4. Change to the newly created project directory:
    
    ```bash
    bashCopy code
    cd my-expo-project
    ```
    
5. Start the development server by running:
    
    ```bash
    sqlCopy code
    expo start
    ```
    
    This will open the Expo DevTools in your browser, from which you can run your app on an emulator or a physical device using the Expo Go app.
    

# Components & Styles

## Built-in Components

| Component | Description |
| --- | --- |
| View | Basic building block for layout; similar to a 'div' in HTML |
| Text | Used for displaying text; similar to a 'p' or 'span' in HTML |
| Image | Used for displaying images; similar to an 'img' tag in HTML |
| TextInput | Input field for text; similar to an 'input' tag with type "text" in HTML |
| ScrollView | A scrollable container for views; useful for long content that requires scrolling |
| FlatList | Optimized list component for rendering long lists with performance in mind |
| TouchableOpacity | A wrapper for making views respond to touch events, like a button |
| TouchableHighlight | A wrapper for making views respond to touch events, with a highlight effect |
| StyleSheet | A way to manage and define styles for React Native components |
| Animated | A library for creating smooth animations and transitions |
| SafeAreaView | A container that automatically adjusts its children to respect the device's safe areas |

## Safe Area

![Untitled](React%20Native%20Cheat%20Sheet%20bded0fb8e33e4a45b92034c1bfe2777f/Untitled%201.png)

Safe areas are the regions of the screen that are visible and usable on all devices, regardless of their size or shape. 

React Native provides a component called `SafeAreaView` that automatically adjusts its children to respect the device's safe areas:

```jsx
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Your app content here */}
    </SafeAreaView>
  );
}
```

## StyleSheet

In React Native, **`StyleSheet`** is an abstraction layer provided by the framework for creating, managing, and optimizing styles. It allows you to define and organize styles in a more performant and structured way, similar to how you would use CSS stylesheets in web development.

**`StyleSheet`** enables you to create a JavaScript object containing style properties and their corresponding values. These styles can then be applied to React Native components using the **`style`** prop.

Here's a brief example of how to use **`StyleSheet`** in React Native:

1. Import **`StyleSheet`** from the **`react-native`** package:

```jsx
import { StyleSheet } from 'react-native';
```

1. Create a **`StyleSheet`** object containing your styles:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
```

1. Apply the styles to your React Native components using the **`style`** prop:

```jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};
```

In this example, we've created a **`styles`** object using **`StyleSheet.create()`** and defined several styles. These styles are then applied to the components using the **`style`** prop.

# State Management

State management is an important part of building any React Native app, as it allows you to manage changes to your application's data over time. React Native provides several built-in hooks for managing state, including `useState` and `useEffect`.

## useState

**`useState`** is a React hook that allows you to manage local state within a functional component. It provides a simpler and more direct way to manage state compared to Redux. However, it's limited to the component scope, making it less suitable for managing global state.

Example of useState:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
```

While Redux and **`useState`** serve different purposes, they share some similarities: both help manage state in a React application, and both use actions (in the case of **`useState`**, the state updater function) to update the state.

## Redux

Redux is a state management library for JavaScript applications, often used with React. It helps you manage global state in a predictable and scalable way. Redux uses a single store for the entire application state, and state updates are made through actions and reducers.

A "slice" in Redux refers to a part of the global state, usually representing a specific feature or domain. With the Redux Toolkit, you can create slices using the **`createSlice`** function, which automatically generates actions and reducers based on the provided configuration.

Example of a Redux slice:

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a Redux slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Dispatch actions to update the state
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement());
```

## Local Storage

AsyncStorage is a simple, unencrypted, asynchronous, key-value storage system for React Native applications. It can be used to store small amounts of data on the user's device. AsyncStorage is often used for caching data, persisting user preferences, and managing authentication tokens.

Example of AsyncStorage usage:

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save a value
async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Retrieve a value
async function getData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}
```

## useEffect

**`useEffect`** is a hook in React that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulation. It's used to handle actions that should occur in response to changes in component state or props.

**`useEffect`** accepts two arguments:

1. A function (called the "effect") that contains the side effect code.
2. An optional dependency array that lists the values the effect depends on.

The behavior of **`useEffect`** differs depending on the dependency array:

1. **No dependency array provided**: The effect will run after every render. This is similar to the combined behavior of **`componentDidMount`**, **`componentDidUpdate`**, and **`componentWillUnmount`** lifecycle methods in class components.

```jsx
useEffect(() => {
  console.log('This runs after every render.');
});
```

1. **Empty dependency array (`[]`)**: The effect will run only once, when the component mounts. This is similar to the **`componentDidMount`** lifecycle method in class components. It's useful for actions that only need to occur on component initialization, such as data fetching or setting up event listeners.

```jsx
useEffect(() => {
  console.log('This runs once, when the component mounts.');
}, []);
```

1. **Dependency array with values**: The effect will run when the component mounts and whenever any of the values in the dependency array change. This is useful for actions that depend on changing values, such as updating the component based on new data or changes in props.

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log('This runs when the component mounts and whenever "count" changes.');
}, [count]);
```

In this example, the effect will run when **`count`** changes, allowing you to perform actions in response to the updated value.

It's important to provide the correct dependencies to ensure that your effect runs when necessary but doesn't cause unnecessary re-renders. If your effect doesn't depend on any values, it's best to provide an empty dependency array to prevent the effect from running on every render.

# Navigation

## Navigation from web to mobile

In web development, navigation typically occurs between different pages or views by changing the URL. Browsers handle most of the navigation logic, and developers use HTML anchor tags or JavaScript to navigate between different pages.

In mobile applications, navigation is more complex, as it involves transitions between screens, passing data between them, and handling different navigation patterns (e.g., stack, tab, and drawer navigation). React Native does not include a built-in navigation library, so developers often use third-party libraries like React Navigation.

## **Setting up React Navigation**

To set up React Navigation, follow these steps:

1. Install the required packages:
    
    ```jsx
    npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
    ```
    
2. Import the necessary components and set up the navigation container in your **`App.js`**:
    
    ```jsx
    import { NavigationContainer } from '@react-navigation/native';
    
    const App = () => {
      return (
        <NavigationContainer>
          {/* Navigator components go here */}
        </NavigationContainer>
      );
    };
    
    export default App;
    ```
    

## Navigation types

| Type | Description |
| --- | --- |
| Stack Navigation | A linear navigation pattern where new screens are stacked on top of each other; allows for easy forward and backward navigation |
| Tab Navigation | A navigation pattern that displays a set of screens as tabs; allows for quick switching between screens |
| Drawer Navigation | A navigation pattern that displays a hidden menu (drawer) that can be accessed by swiping or tapping a menu button; useful for less frequently accessed screens or settings |
| Modal Navigation | A navigation pattern that displays a screen as an overlay on top of the current screen; useful for displaying additional content or options without leaving the current screen |

In React Native, navigation can be managed using libraries like React Navigation. Different types of navigators are available, such as Stack, Tab, and Drawer navigators. You can also nest navigators to create complex navigation structures.

### Stack Navigation

Stack Navigator provides a way to transition between screens, where each new screen is placed on top of the stack.

![Untitled](React%20Native%20Cheat%20Sheet%20bded0fb8e33e4a45b92034c1bfe2777f/Untitled%202.png)

To implement a Stack Navigator, follow these steps:

1. Import the **`createStackNavigator`** function:
    
    ```jsx
    import { createStackNavigator } from '@react-navigation/stack';
    ```
    
2. Create a Stack Navigator and define the screens:
    
    ```jsx
    const Stack = createStackNavigator();
    
    const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };
    ```
    

### Bottom Tab Navigation

Bottom Tab Navigator provides a tab-based navigation pattern, displaying tabs at the bottom of the screen

![Untitled](React%20Native%20Cheat%20Sheet%20bded0fb8e33e4a45b92034c1bfe2777f/Untitled%203.png)

To implement a Bottom Tab Navigator, follow these steps:

1. Import the **`createBottomTabNavigator`** function:
    
    ```jsx
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    ```
    
2. Create a Bottom Tab Navigator and define the screens:
    
    ```jsx
    const Tab = createBottomTabNavigator();
    
    const App = () => {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    };
    ```
    

### Drawer Navigation

Drawer Navigator provides a side menu navigation pattern, allowing users to slide a menu from the side to access different app sections

![Untitled](React%20Native%20Cheat%20Sheet%20bded0fb8e33e4a45b92034c1bfe2777f/Untitled%204.png)

1. Import the **`createDrawerNavigator`** function:
    
    ```jsx
    import { createDrawerNavigator } from '@react-navigation/drawer';
    ```
    
2. Create a Drawer Navigator and define the screens:
    
    ```jsx
    const Drawer = createDrawerNavigator();
    
    const App = () => {
      return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    };
    ```
    

### Modal Navigation

Modal Navigation is a common pattern in mobile apps, where a screen is presented as a modal dialog on top of the current screen. You can achieve this using the Stack Navigator in React Navigation

![Untitled](React%20Native%20Cheat%20Sheet%20bded0fb8e33e4a45b92034c1bfe2777f/Untitled%205.png)

Here's how you can implement a modal navigation:

1. First, set up your Stack Navigator and import necessary components:
    
    ```jsx
    import { createStackNavigator } from '@react-navigation/stack';
    import { NavigationContainer } from '@react-navigation/native';
    
    const RootStack = createStackNavigator();
    const MainStack = createStackNavigator();
    ```
    
2. Create a Main Stack Navigator to hold your main app screens:
    
    ```jsx
    const MainStackScreen = () => (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Details" component={DetailsScreen} />
      </MainStack.Navigator>
    );
    ```
    
3. Create the Root Stack Navigator, which will include the Main Stack and the modal screen:
    
    ```jsx
    const App = () => {
      return (
        <NavigationContainer>
          <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Main" component={MainStackScreen} />
            <RootStack.Screen name="Modal" component={ModalScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      );
    };
    ```
    
    Note the **`mode="modal"`** and **`headerMode="none"`** props for the Root Stack Navigator. These will configure the Root Stack Navigator to present screens modally and hide the header for the modal screen.
    
4. To open the modal screen from within your app, you can use the **`navigate`** function:
    
    ```jsx
    const HomeScreen = ({ navigation }) => (
      <View>
        <Text>Home Screen</Text>
        <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
      </View>
    );
    ```
    
5. To close the modal screen, you can use the **`goBack`** function from the navigation prop:
    
    ```jsx
    const ModalScreen = ({ navigation }) => (
      <View>
        <Text>Modal Screen</Text>
        <Button title="Close Modal" onPress={() => navigation.goBack()} />
      </View>
    );
    ```
    

With this setup, you can have a modal navigation pattern in your app, where the **`ModalScreen`** will be presented on top of the main app screens when needed.

## Nested Stack and Tab navigation

Here's an example of nested navigation using Stack and Tab navigators:

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
```

In this example, we've created a Tab navigator with three screens: Home, Profile, and Settings. The Home and Profile screens are Stack navigators, which allows for more complex navigation within those sections of the app. By nesting the Stack navigators within the Tab navigator, we've created a flexible and organized navigation structure.

## Nested Drawer and Tab navigation

Continuing with the navigation example, let's add a Drawer navigator to the existing Tab and Stack navigators to provide another level of navigation hierarchy:

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
```

In this example, we've added a Drawer navigator that wraps the existing Tab navigator. The Drawer navigator includes the Tab navigator as the "Main" screen and an additional "About" screen. Now, the app has a combination of Drawer, Tab, and Stack navigators, allowing for a rich and organized navigation experience.