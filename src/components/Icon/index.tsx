import React, { MouseEventHandler } from 'react'
import IcoMoon from 'react-icomoon'

const iconSet = require('./selection.json')

import styles from './Icon.module.css'

export interface IIconProps {
  icon: string
  onClick?: MouseEventHandler<Element>
}

const Icon = (props: IIconProps) => {
  return <IcoMoon iconSet={iconSet} className={styles.Icon} {...props} />
}

export default Icon
