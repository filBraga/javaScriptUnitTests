const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const expected = [
      { name: 'teste', details: { productId: 'teste123' } },
      { name: 'teste', details: { productId: 'teste123' } }
    ];
    expect(productDetails('teste', 'teste')).toEqual(expect.arrayContaining(expected));
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('teste', 'teste')).toHaveLength(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const objectInside = productDetails('a','b');
    expect(typeof objectInside[0]).toBe('object');
    expect(typeof objectInside[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(objectInside[0]).not.toBe(objectInside[1])
    // Teste se os dois productIds terminam com 123.
    expect(objectInside[0].details.productId).toEqual(expect.stringMatching('123'));
    expect(objectInside[1].details.productId).toEqual(expect.stringMatching('123'));
  });
});
