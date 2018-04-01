import React from 'react'
import { ViewProperties } from 'react-native'

declare module 'react-native-safe-area-view' {
  export type SafeAreaViewForceInsetValue = 'always' | 'never'

  export interface SafeAreaViewProps extends ViewProperties {
    forceInset?: {
      top?: SafeAreaViewForceInsetValue
      bottom?: SafeAreaViewForceInsetValue
      left?: SafeAreaViewForceInsetValue
      right?: SafeAreaViewForceInsetValue
      horizontal?: SafeAreaViewForceInsetValue
      vertical?: SafeAreaViewForceInsetValue
    }
  }

  export const SafeAreaView: React.ComponentClass<SafeAreaViewProps>
  
  export default SafeAreaView
}
