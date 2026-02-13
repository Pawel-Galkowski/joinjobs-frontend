import React from 'react'
import { Card as MuiCard, CardContent, CardHeader, type CardProps as MuiCardProps } from '@mui/material'

interface CardProps extends MuiCardProps {
  title?: string
  subtitle?: string
}

export const Card: React.FC<CardProps & { children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
  ...props
}) => {
  return (
    <MuiCard {...props}>
      {title && <CardHeader title={title} subheader={subtitle} />}
      <CardContent>{children}</CardContent>
    </MuiCard>
  )
}

export default Card
