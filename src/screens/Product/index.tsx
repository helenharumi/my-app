import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { BorderlessButton as Button } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import * as indexApi from "../../service/servicesApi";

export default function PageProduct() {

  const navigation = useNavigation();
  
  const [products, setProducts] = useState(Object);

  function goSignUp() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
  }

  useEffect(() => {
    indexApi.getProducts().then(list => {
      setProducts(list)
    });

    navigation.setOptions({
      headerLeft: ()=> null,
      headerRight: () => (
          <Button onPress={goSignUp} style={styles.logoutBtn}>
            <Text>Logout</Text>
          </Button>
      ),
    });
  }, []);

  if (!products) {
    return <View><ActivityIndicator size="large" /></View>;
  }

  return (
    <View style={styles.container}>
      
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.produto}>
            <View style={styles.block}>
              <Text style={styles.nomeProduto}>{item.name}</Text>
              <Text style={styles.nomeFabricante}>Fabricante: {item.factory.name}</Text>
              <Text style={styles.qtdTag}>Qtd. em Estoque: <Text style={styles.qtdEstoque}>{item.amount}</Text></Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.nomePreco}>Preço</Text>
              <Text  style={styles.preco}>
                R$ {item.price.toFixed(2).replace(".", ",")}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
