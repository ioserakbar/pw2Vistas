import React from 'react';
import { Button, Emoji, Title, Content } from './styles'

export const Category = ({
  path = 'http://www.youtube.com',
  emoji = '😂',
  bgColor = '#linear-gradient(to right,#ff8a00,#da1b60)',
  bgColor2 = '#lineradial-gradient(ellipse farthest-corner at top left, white 0%, black 50%)ar-gradient(to right,hsl(63, 69%, 85%),hsl(358, 60%, 75%))',
  text = 'Frutas y verduras'
}) =>(
  <div>
    <Button href={path} bgColor={bgColor}>
      <Content >
        <Title>{text}</Title>
        <Emoji bgColor={bgColor2}>{emoji}</Emoji>
      </Content>
    </Button>
  </div>
);