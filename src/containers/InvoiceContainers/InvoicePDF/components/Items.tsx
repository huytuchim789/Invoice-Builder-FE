import { Text, View } from '@react-pdf/renderer'

import { IItemContent } from 'src/@core/components/Invoice/ItemInfo/store'

const ItemPdf = ({ item }: { item: IItemContent }) => {
  return (
    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
      <View style={{ minWidth: 100, padding: '10px' }}>
        <Text style={{ fontSize: 12 }}>{item?.name}</Text>
      </View>
      <View style={{ minWidth: 100, padding: '10px' }}>
        <Text style={{ fontSize: 12 }}>{item?.description}</Text>
      </View>
      <View style={{ minWidth: 50, padding: '10px' }}>
        <Text style={{ fontSize: 12 }}>{item?.quantity}</Text>
      </View>
      <View style={{ minWidth: 50, padding: '10px' }}>
        <Text style={{ fontSize: 12 }}>{item?.cost}</Text>
      </View>
      <View style={{ minWidth: 50, padding: '10px' }}>
        <Text style={{ fontSize: 12 }}>{item?.hours}</Text>
      </View>
      <View style={{ minWidth: 50, padding: '10px' }}>
        <Text style={{ fontSize: 12 }}>{item.cost}</Text>
      </View>
    </View>
  )
}
export default ItemPdf
