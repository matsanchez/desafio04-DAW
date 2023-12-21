import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../global/colors.js'

import products_data from '../data/products_data.json'


const ProductDetailScreen = ({ route }) => {

  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { product } = route.params
  const productId = product.id

  useEffect(()=>{
    const productFound = products_data.find(product => product.id === productId)
    setProductSelected(productFound)
    setIsLoading(false)
  }, [productId])


  return (
    <>
      {
        !productSelected
        ?
        <ActivityIndicator />
        :
        <>
          <ScrollView >
            <Image
              style={styles.imageProduct}
              resizeMode='cover'
              source={{uri: productSelected.thumbnail }}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{productSelected.title}</Text>
              <Text style={styles.description}>{productSelected.description}</Text>
              <Text style={styles.price}>$ {productSelected.price}</Text>
              <TouchableOpacity onPress={() => null}>
                <Text style={styles.buyText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      }

    </>
  )
}



export default ProductDetailScreen


const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,

  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 32,
    color: colors.secondary
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buyText: {
    color: '#000'
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  }
})