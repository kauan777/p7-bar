export function valueToReal(valor: number): string {
  // Arredonda o valor para 2 casas decimais, caso necessário
  const valueFormated = valor.toFixed(2);

  // Utiliza a função toLocaleString para formatar o valor como moeda brasileira (BRL)
  const currency = Number(valueFormated).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return currency;
}
