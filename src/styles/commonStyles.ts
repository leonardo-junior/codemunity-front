import styled, { css } from 'styled-components'

type DivProps = {
  display?: 'flex' | 'block' | 'inline-block' | 'inline-flex' | 'none'
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: string
  padding?: string
  margin?: string
  maxWidth?: string
  width?: string
  height?: string
}

export const Flex = styled.div<DivProps>`
  ${({ ...props }) => css`
    display: ${props.display || 'flex'};
    flex-wrap: ${props.flexWrap};
    gap: ${props.gap};
    margin: ${props.margin};
    padding: ${props.padding};
    height: ${props.height};
    width: ${props.width};
    flex-direction: ${props.flexDirection};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    max-width: ${props.maxWidth};
  `}
`

export const Box = styled.div<DivProps>`
  ${({ ...props }) => css`
    display: ${props.display};
    flex-wrap: ${props.flexWrap};
    gap: ${props.gap};
    margin: ${props.margin};
    padding: ${props.padding};
    height: ${props.height};
    width: ${props.width};
    flex-direction: ${props.flexDirection};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    max-width: ${props.maxWidth};
  `}
`
