import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar dois comentarios', () => {
        render(<PostComment/>)
       fireEvent.change(screen.getByTestId('input-form'), {
        target: {
            value: 'Teste!'
        }
       })
       fireEvent.click(screen.getByTestId('btn-form'))

       fireEvent.change(screen.getByTestId('input-form'), {
        target: {
            value: 'Teste!'
        }
       })
       fireEvent.click(screen.getByTestId('btn-form'))

       expect(screen.getAllByText('Teste!')).toHaveLength(2)
    })
});