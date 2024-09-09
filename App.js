import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  console.log(Constants.statusBarHeight);
  console.log(Platform.OS);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
          backgroundColor: "black",
        }}
      >
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
            }}
            style={styles.imglogo}
          />
        </View>

        <ScrollView style={{ gap: 20 }} contentContainerStyle={{ gap: 20 }}>
          <View style={styles.section}>
            <Text style={styles.title}>Interstellar</Text>
            <View style={styles.infos}>
              <Text style={styles.info}>2014</Text>
              <Text style={styles.info}>PG-13</Text>
              <Text style={styles.info}>2h 49min</Text>
              <Text style={styles.info}>Adventure,Drama,Scifi</Text>
            </View>
            <View style={styles.picanddesc}>
              <Image
                style={styles.affiche}
                source={{
                  uri: "https://antreducinema.fr/wp-content/uploads/2020/04/INTERSTELLAR.jpg",
                }}
              />
              <View style={styles.descandbutton}>
                <Text style={styles.description}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival
                </Text>
                <Pressable style={styles.addbutton}>
                  <Text style={styles.buttontext}>+ ADD TO WATCHLIST</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.reviewpart}>
              <View style={styles.review}>
                <FontAwesome name="star" size={24} color="yellow" />
                <Text style={styles.note}>8.6/10</Text>
                <Text style={styles.notenumber}>1.1M</Text>
              </View>
              <View style={styles.review}>
                <FontAwesome name="star-o" size={24} color="white" />
                <Text style={styles.rate}>RATE THIS</Text>
              </View>
              <View style={styles.review}>
                <Text style={styles.hardmetascore}>74</Text>
                <Text style={styles.metascore}>Metascore</Text>
                <Text style={styles.criticreview}>46 critic reviews</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.castupperpart}>
              <Text style={styles.casttitle}>Top Billed Cast</Text>
              <Text style={styles.seeall}>SEE ALL</Text>
            </View>
            <ScrollView
              style={styles.castscroll}
              contentContainerStyle={{ gap: 8 }}
              horizontal={true}
            >
              <View style={styles.actorview}>
                <Image
                  style={styles.actorpic}
                  source={{
                    uri: "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg",
                  }}
                />
                <View style={styles.actordesc}>
                  <Text style={styles.actorname}>Matthew McConnaughey</Text>
                  <Text style={styles.charactername}>Cooper</Text>
                </View>
              </View>
              <View style={styles.actorview}>
                <Image
                  style={styles.actorpic}
                  source={{
                    uri: "https://i.pinimg.com/originals/15/bf/d0/15bfd0ab2478e2feba20a3dc39d60e70.jpg",
                  }}
                />
                <View style={styles.actordesc}>
                  <Text style={styles.actorname}>Anne Hathaway</Text>
                  <Text style={styles.charactername}>Brand</Text>
                </View>
              </View>
              <View style={styles.actorview}>
                <Image
                  style={styles.actorpic}
                  source={{
                    uri: "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_.jpg",
                  }}
                />
                <View style={styles.actordesc}>
                  <Text style={styles.actorname}>Jessica</Text>
                  <Text style={styles.charactername}>Murph</Text>
                </View>
              </View>
            </ScrollView>
            <Text style={styles.director}>Director</Text>
            <Text style={styles.directorname}>Christopher Nolan</Text>
            <Text style={styles.writers}>Writters</Text>
            <Text style={styles.directorname}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "rgb(57, 57, 57)",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 1,
    // shadowOpacity: 1,
    // zIndex: 4,
  },
  imglogo: {
    width: 60,
    height: 30,
    resizeMode: "contain",
  },
  section: {
    backgroundColor: "rgb(33, 33, 33)",
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  infos: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },
  info: {
    color: "rgb(186, 186, 186)",
  },
  picanddesc: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  affiche: {
    height: 200,
    width: 130,
    resizeMode: "cover",
  },
  descandbutton: { flex: 1, gap: 15 },

  description: {
    textAlign: "justify",
    color: "white",
    fontSize: 15,
    lineHeight: 15,
  },
  addbutton: {
    backgroundColor: "rgb(2, 119, 189)",
    width: "100%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttontext: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  reviewpart: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  review: {
    alignItems: "center",
    gap: 2,
  },
  note: {
    color: "white",
    fontWeight: "bold",
  },
  notenumber: {
    color: "rgb(115, 115, 115)",
  },
  rate: {
    color: "white",
  },
  criticreview: { color: "rgb(115, 115, 115)", fontSize: 10 },
  hardmetascore: {
    backgroundColor: "rgb(98, 199, 80)",
    padding: 1,
    color: "white",
  },
  metascore: { color: "white" },
  castupperpart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  casttitle: {
    color: "white",
    fontSize: 25,
  },
  seeall: {
    color: "rgb(6, 163, 236)",
  },
  castscroll: { marginBottom: 20 },
  actorview: {
    width: 140,
    backgroundColor: "rgb(42, 42, 42)",
    borderRadius: 3,
  },
  actorpic: {
    width: 140,
    height: 220,
    resizeMode: "cover",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    // objectPosition: "center",
  },
  actordesc: {
    padding: 8,
  },
  actorname: {
    // overflow: "hidden",
    // height: 20,
    fontSize: 15,
    // fontWeight: "bold",
    color: "white",
  },
  charactername: {
    color: "rgb(204, 204, 204)",
  },
  director: {
    marginBottom: 2,
    color: "white",
    fontSize: 15,
  },
  directorname: {
    color: "rgb(204, 204, 204)",
    fontSize: 13,
    marginBottom: 15,
  },
  writers: {
    color: "white",
    fontSize: 15,
    marginBottom: 2,
  },
});
