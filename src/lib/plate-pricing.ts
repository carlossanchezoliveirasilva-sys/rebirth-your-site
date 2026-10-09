export const tabelaPrecos: Record<string, number> = {
  "1.2": 1350,
  "1.5": 1500,
  "2.0": 1650,
  "3.0": 1875,
  "4.76": 2290,
};

export function calculatePlate(widthCm: number, heightCm: number, thickness: string) {
  const rate = tabelaPrecos[thickness];
  if (!Number.isFinite(widthCm) || widthCm <= 0 || !Number.isFinite(heightCm) || heightCm <= 0 || rate === undefined) {
    return null;
  }
  const area = (widthCm / 100) * (heightCm / 100);
  const precoOriginal = area * rate;
  const desconto = precoOriginal * 0.1;
  return { area, precoOriginal, desconto, precoPromocional: precoOriginal - desconto };
}