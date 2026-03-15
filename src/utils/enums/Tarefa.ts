export enum Prioridade {
  URGENTE = 0,
  IMPORTANTE = 1,
  NORMAL = 2
}

export enum Status {
  PENDENTE = 0,
  CONCLUIDA = 1
}

export const exibePrioridade = (prioridade: Prioridade) => {
  if (prioridade == Prioridade.URGENTE) return 'Urgente'
  if (prioridade == Prioridade.IMPORTANTE) return 'Importante'

  return 'Normal'
}
