import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Rate, Icon, Button } from 'antd'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <Rate character={<Icon type='heart' />} allowHalf />
    <Button type='primary'>Primary</Button>
  </div>
)

export default HomeView
