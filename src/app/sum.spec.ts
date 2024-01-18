// https://nextjs.org/docs/app/building-your-application/testing/jest
// sum.espec.ts
// pnpm test

describe('Soma', () => {
  it('deve somar dois números corretamente', () => {
    const resultado = 1 + 1
    expect(resultado).toBe(2)
  })

  // Adicione mais testes conforme necessário
})
