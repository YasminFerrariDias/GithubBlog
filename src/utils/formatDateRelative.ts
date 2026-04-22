export function formatDateRelative(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  if (years === 1) return "Há 1 ano"
  if (years > 1) return `Há ${years} ano`
  if (minutes < 1) return "Agora mesmo";
  if (minutes < 60) return `Há ${minutes} minutos`;
  if (hours < 24) return `Há ${hours} horas`;
  if (days === 1) return "Ontem";
  return `Há ${days} dias`
}