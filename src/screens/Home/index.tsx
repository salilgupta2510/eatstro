import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useGetItems } from "../../agent";
import useStore from "../../store";
import { HomeScreenProps } from "../../types/home";
import { colors } from "../../utilities/styles/colors";
import { fonts } from "../../utilities/styles/fonts";
import { fp, hp, spH, spV, wp } from "../../utilities/styles/normalize";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Items } from "../../store/types";
import HearFilled from "../../svg/heartFilled";
import FireIcon from "../../svg/fireIcon";
import ChilliFilled from "../../svg/chilliFilled";
import ChilliBlank from "../../svg/chilledBlank";
import { Box, useToast } from "native-base";

export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
  route,
}: HomeScreenProps): JSX.Element => {
  const toast = useToast();
  const [searchText, setSearchText] = useState<string>("");
  const items = useStore((state) => state.items);
  const setItems = useStore((state) => state.setItems);
  const { data } = useGetItems();

  useEffect(() => {
    if (data) {
      setItems(data.items);
    }
  }, [data]);

  const listItem = ({ item, index }: { item: Items; index: number }) => {
    let favCount = item.favoriteCount
    return (
      <View key={`${item.name}_${item.desc}_${index}`} style={styles.cardContainer}>
        <View>
          <Image
            style={styles.listImage}
            source={{ uri: item.photo }}
            resizeMode="cover"
          />
          <View style={styles.favContainer}>
            <Text style={styles.favCount}>{favCount}</Text>
            <Pressable onPress={() => favCount = favCount + 1} style={styles.favIconContainer}>
              <HearFilled />
            </Pressable>
          </View>
          <Pressable onPress={() => {
            toast.show({
              render: () => {
                return (
                  <Box
                    bg="emerald.500"
                    px="2" py="1" rounded="sm" mb={5}
                    _text={{ color: 'white', fontFamily: fonts.bold,}}
                  >
                    Added to Cart
                  </Box>
                );
              },
            });
          }} style={styles.addToCartButton}>
            <View>
              <Ionicons name={"add"} size={hp(35)} color={"#fff"} />
            </View>
          </Pressable>
        </View>

        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>{item.name}</Text>
          <View style={styles.kCalConatiner}>
            <FireIcon />
            <Text style={styles.kCalText}>749 kcal</Text>
          </View>
        </View>

        <View style={styles.itemDescription}>
          <Text style={styles.descriptionText}>{item.desc}</Text>
        </View>
        <View style={styles.bottomSection}>
        <View style={styles.priceContainer}>
          <Text style={styles.currencyText}>$</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.spiceContainer}>
          <ChilliFilled />
          <ChilliBlank />
          <ChilliBlank />
        </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeConatiner}>
      <View style={styles.greetings}>
        <Text style={styles.greetingsText}>Hi, User!</Text>
      </View>
      <View style={styles.searchDescriptionContainer}>
        <Text style={styles.searchTextDescription}>
          What would you like to eat today?
        </Text>
      </View>
      <View style={styles.searchInputContainer}>
        <Ionicons name={"search-outline"} size={hp(28)} />
        <TextInput
          style={styles.searchInput}
          placeholder={"Search something..."}
          placeholderTextColor={colors.primary_text}
          returnKeyType="done"
          onChangeText={(val: string) => {
            setSearchText(val);
          }}
          value={searchText}
        />
      </View>
      <View style={styles.resultsTextContainer}>
        <Text style={styles.resultsText}>Search results for ...</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => listItem({ item, index })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeConatiner: {
    flex: 1,
    marginHorizontal: spH(20),
  },
  greetings: {
    marginTop: spV(44),
    marginLeft: spH(22),
  },
  greetingsText: {
    fontFamily: fonts.abel,
    fontSize: fp(32),
    color: colors.primary_text,
  },
  searchDescriptionContainer: {
    marginLeft: spH(20),
    marginTop: spV(8),
  },
  searchTextDescription: {
    fontFamily: fonts.regular,
    fontSize: fp(16),
    color: colors.primary_text,
  },
  searchInputContainer: {
    height: hp(56),
    backgroundColor: "#fff",
    paddingHorizontal: spH(15),
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: hp(12),
    marginLeft: spH(15),
    marginRight: spH(17),
    marginTop: spV(6),
    flexDirection: "row",
  },
  searchInput: {
    marginLeft: spH(13),
  },
  resultsTextContainer: {
    marginLeft: spH(16),
    marginTop: spV(12),
  },
  resultsText: {
    fontFamily: fonts.abel,
    fontWeight: "400",
    fontSize: fp(20),
  },
  listContainer: {
    marginHorizontal: spH(16),
    marginTop: spV(20),
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: hp(16),
    shadowOffset: { width: 0, height: hp(8) },
    shadowColor: "rgba(34, 43, 50, 0.1)",
    shadowOpacity: 0.6,
    marginVertical: spV(10),
  },
  listImage: {
    height: hp(194),
    width: "100%",
    borderRadius: hp(16),
  },
  favContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: spV(16),
    right: spH(16),
  },
  favCount: {
    color: "#fff",
    fontFamily: fonts.regular,
    fontWeight: "700",
    marginRight: spH(8),
    fontSize: fp(18),
  },
  favIconContainer: {
    height: hp(40),
    width: wp(32),
    borderRadius: 50,
    paddingHorizontal: spH(10),
    paddingVertical: spV(10),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    borderBottomRightRadius: hp(16),
    borderTopLeftRadius: hp(16),
    width: wp(40),
    height: hp(40),
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    marginTop: spV(16),
    marginLeft: spV(16),
  },
  itemTitleText: {
    fontFamily: fonts.bold,
    fontWeight: "700",
    fontSize: fp(22),
  },
  kCalConatiner: {
    marginVertical: spV(4),
    flexDirection: "row",
    alignItems: "center",
  },
  kCalText: {
    marginLeft: spH(5),
    fontFamily: fonts.regular,
    fontSize: fp(18),
    color: colors.primary_text,
  },
  itemDescription: {
    marginLeft: spV(16),
    marginBottom: spV(4),
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fp(18),
    color: colors.primary_text,
  },
  priceContainer: {
    // marginLeft: spV(16),
    flexDirection: "row",
    marginBottom: spV(16),
    alignItems: "flex-end",
  },
  currencyText: {
    fontFamily: fonts.bold,
    fontSize: fp(18),
    color: colors.primary_text,
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: fp(22),
    color: colors.primary_text,
    marginLeft: spH(3),
  },
  bottomSection: {
    flexDirection: 'row',
    marginHorizontal: spH(16),
    justifyContent: 'space-between',
  },
  spiceContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
