export function createLabel(settlementName, settlementType, settlementAria) {
  const type = settlementType.includes('селище міського типу')
    ? `cмт.`
    : `${settlementType[0]}.`;
  const settlement = settlementName.includes('(')
    ? `${settlementName.split(' ')[0]},`
    : `${settlementName},`;
  const aria = `${settlementAria.split(' ')[0]} обл.`;
  return `${type} ${settlement} ${aria}`;
}
