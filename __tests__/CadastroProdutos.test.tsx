import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
// import { TouchableOpacity } from 'react-native';
import { CadastroProdutos } from '@/components/CadastroProdutos';

// Mock dos componentes filhos
// jest.mock('./elementos/CampoFormulario', () => ({
//   CampoFormulario: ({ titulo, placeholder, change }: any) => (
//     <TouchableOpacity onPress={() => change(`${titulo}-valor`)}>{placeholder}</TouchableOpacity>
//   ),
// }));

// jest.mock('./elementos/BtnEnviar', () => ({
//   BtnEnviar: ({ onEnviar }: any) => (
//     <TouchableOpacity testID="btn-enviar" onPress={onEnviar}>Incluir</TouchableOpacity>
//   ),
// }));

// Mock global do fetch
global.fetch = jest.fn();

describe('CadastroProdutos', () => {
  const mockSetVisivel = jest.fn();
  const mockBuscaProdutos = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('não renderiza o modal quando visivel é false', () => {
    const { queryByText } = render(
      <CadastroProdutos visivel={false} setVisivel={mockSetVisivel} buscaProdutos={mockBuscaProdutos} />
    );
    expect(queryByText('Incluir')).toBeNull();
  });

  it('renderiza os campos e botão quando visivel é true', () => {
    const { getByTestId } = render(
      <CadastroProdutos visivel={true} setVisivel={mockSetVisivel} buscaProdutos={mockBuscaProdutos} />
    );

    expect(getByTestId('formularioCadastro')).toBeTruthy();
  });

  it('executa cadastro de produto e chama funções auxiliares', async () => {
    // Simula resposta do GET e POST
    (fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: async () => [{ id: 1 }, { id: 2 }],
      })
      .mockResolvedValueOnce({
        json: async () => ({ id: 3, nome: 'Nome do Produto', prazomaximo: '12', txjurosanual: '15.5' }),
      });

    const { getByTestId } = render(
      <CadastroProdutos visivel={true} setVisivel={mockSetVisivel} buscaProdutos={mockBuscaProdutos} />
    );

    fireEvent.press(getByTestId('BtnEnviar'));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(mockBuscaProdutos).toHaveBeenCalled();
      expect(mockSetVisivel).toHaveBeenCalledWith(false);
    });
  });
});