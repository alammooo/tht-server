export function calculateAge(birthDate: Date): number {
  const today: Date = new Date();
  const birth: Date = new Date(birthDate);

  let age: number = today.getFullYear() - birth.getFullYear();
  const monthDiff: number = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}
