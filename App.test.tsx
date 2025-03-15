import { render, screen } from '@testing-library/react'
import App from './App'

describe('Renderizar todos os componentes', () => {
    test('Deve renderizar todos os componentes corretamente.', () => {
        render(<App/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
})