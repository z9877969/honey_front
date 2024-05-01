export function createSettlementDescription(
  deliveryType,
  settlementName,
  settlementType,
  settlementAria,
  settlementRegion
) {
  const type = settlementType.includes('селище міського типу')
    ? `cмт.`
    : `${settlementType[0]}.`;
  if (deliveryType === 'Доставка до відділення') {
    const settlement = `${settlementName},`;
    const aria = `(${settlementAria.split(' ')[0]} обл, ${settlementRegion.includes('р-н') ? `${settlementRegion}` : `${settlementRegion} р-н`})`;
    return `${type} ${settlement} ${aria}`;
  } else {
    const settlement = settlementName.includes('(')
      ? `${settlementName.replace(' (', ', (')}`
      : `${settlementName},`;
    const aria = settlementName.includes('(') ? '' : `(${settlementAria} обл.)`;
    return `${type} ${settlement} ${aria}`;
  }
}
