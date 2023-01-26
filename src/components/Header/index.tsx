import { Badge, Container, LocationButton, ShoppingCartButton } from './styles'
import { ShoppingCart, MapPin } from "phosphor-react"


import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <div>
        <LocationButton
          disabled
        >
          <MapPin
            size={22}
            color={'var(--purple-dark)'}
            weight="fill"
          />
          <p>São Paulo, SP</p>
        </LocationButton>
        <ShoppingCartButton>
          <div>
            <ShoppingCart
              size={22}
              weight="fill"
            />
          </div>
          <Badge>5</Badge>
        </ShoppingCartButton>
      </div>
    </Container>
  )
}