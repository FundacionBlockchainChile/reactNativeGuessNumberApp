import * as React from 'react'
import { Alert, ScrollView, StyleSheet } from 'react-native'
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  useTheme,
} from 'react-native-paper'

const CardExample = () => {
  const {
    colors: { background },
  } = useTheme()

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: background }]}
      contentContainerStyle={styles.content}
    >
      <Card style={styles.card}>
        {/* <Card.Cover source={require('../../assets/images/wrecked-ship.jpg')} /> */}
        <Card.Cover
          source={{
            uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Card.Title title="Abandoned Ship" />
        <Card.Content>
          <Paragraph>
            The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
            originally being a ship named the S.S. Cactus. The second part of
            the ship can only be accessed by using Dive and contains the
            Scanner.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Card.Actions>
          <Button onPress={() => {}}>Share</Button>
          <Button onPress={() => {}}>Explore</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.card}>
        <Card.Title
          title="Berries that are trimmed at the end"
          subtitle="Omega Ruby"
          left={(props: any) => <Avatar.Icon {...props} icon="folder" />}
          right={(props: any) => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />
        <Card.Content>
          <Paragraph>
            Dotted around the Hoenn region, you will find loamy soil, many of
            which are housing berries. Once you have picked the berries, then
            you have the ability to use that loamy soil to grow your own
            berries. These can be any berry and will require attention to get
            the best crop.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Card.Title
          title="Just Strawberries"
          subtitle="... and only Strawberries"
          right={(props: any) => (
            <IconButton {...props} icon="chevron-down" onPress={() => {}} />
          )}
        />
      </Card>
      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('The Chameleon is Pressed')
        }}
      >
        <Card.Cover
          source={{
            uri: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Card.Title title="Pressable Chameleon" />
        <Card.Content>
          <Paragraph>
            This is a pressable chameleon. If you press me, I will alert.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card
        style={styles.card}
        onLongPress={() => {
          Alert.alert('The City is Long Pressed')
        }}
      >
        <Card.Cover
          source={{
            uri: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Card.Title
          title="Long Pressable City"
          left={(props: any) => <Avatar.Icon {...props} icon="city" />}
        />
        <Card.Content>
          <Paragraph>
            This is a long press only city. If you long press me, I will alert.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

CardExample.title = 'Card'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
})

export default CardExample
