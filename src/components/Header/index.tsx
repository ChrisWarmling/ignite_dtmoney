import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  openModal: () => void
}

export function Header({openModal}: HeaderProps) {

  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={openModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}