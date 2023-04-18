import { Button, ButtonProps, FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './styles'
import EmptyState from '../../components/EmptyState'
import CardItem from '../../components/CardItem'
import { useSelector } from 'react-redux'
import { populate } from '../../redux/slices/HomeSlice'
import { useDispatch } from 'react-redux'

interface HomeScreenProps  {}

const HomeScreen: FC<HomeScreenProps> = (props) => {
  const data = useSelector(state => state.home).data
  const dispatch = useDispatch()
  const [inputvalue, setInputValue] = useState("");
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          ...styles.container,
          flexDirection: "column",
        }}
      >
        {/* <View style={{
          ...styles.container1,
          ...styles.container2
        }}>
          <Text style={styles.text}>hello world!</Text>
        </View>
        <View style={[styles.container1, styles.container2]}>
          <Text style={styles.text}>hello world!</Text>
        </View> */}
        {/* <EmptyState /> */}
        {/* text component */}
        {/* <Text style={{
          fontWeight: "900",
          fontSize: 50,
        }}>
          <Text style={{
            color: "green"
          }}>
            Hello
          </Text> world!
        </Text> */}
        <ScrollView
          style={styles.Scrollview}
          contentContainerStyle={{ padding: 50, backgroundColor: "magenta" }}
        >
          {/* <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia laboriosam quas dignissimos itaque, illum beatae quisquam quis nesciunt numquam! Illo eligendi rerum quas omnis qui ab repellat ipsum sapiente? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque laudantium neque nam consectetur! Enim dicta nihil debitis et vel voluptatum? Sed consectetur voluptate aut vel illum excepturi optio consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur reiciendis nesciunt voluptates, autem tempora cupiditate corrupti sunt consequuntur eaque fuga at accusantium? Eum quod commodi dolor tempore, distinctio doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit, repudiandae vero sed, incidunt quisquam accusamus officiis omnis ipsa enim, blanditiis optio. Maiores error saepe enim nihil qui ab! Voluptates. Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi recusandae doloremque corrupti provident, nulla id dicta ducimus hic ratione! Harum alias incidunt beatae, doloribus repellendus voluptates totam nesciunt neque quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero quo et nulla saepe dicta dignissimos, earum delectus aut reiciendis officiis error. Nisi perspiciatis illo ipsam, nam eum voluptates dolore.</Text> */}
          {data?.length > 0 ? data?.map((el, index) => (
            <CardItem id={`${index}`} />
          )) : null}
        </ScrollView>
        <FlatList
          style={styles.Flatlist}
          contentContainerStyle={{ padding: 50, backgroundColor: "cyan" }}
          data={data}
          renderItem={({ item, index }) => <CardItem id={`${index}`} />}
          numColumns={2}
          keyExtractor={(item, index) => `${index * 123}-${item}`}
          ListEmptyComponent={<EmptyState title="noting to show" description="start by pressing add elow" action={{title: "add", onPress: () => dispatch(populate([1,2,3,4,5,6,7,8,9,10]))}}/>}
          ListHeaderComponent={() => (
            <>
              {/* <TextInput
                value={inputvalue}
                placeholder="enter anything"
                onChangeText={setInputValue}
                // onChangeText={(value) => {setInputValue(value)}}
              />
              <Image
                source={{
                  uri: "https://placehold.co/600x100",
                }}
                style={{ width: "100%", height: 100 }}
              /> */}
              <Text>this is your header 2</Text>
            </>
          )}
          ListFooterComponent={() => (
            <>
              <Text>this is your footer</Text>
              {/* <FullWidthButton
                buttonprops={{
                  title: "press me",
                  onPress: () => console.log("pressed"),
                }}
              /> */}
            </>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen