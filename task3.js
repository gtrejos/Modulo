export function ageCalculator(year, month, day) { 
    const today = new Date();
    const birthDate = new Date(year, month - 1, day)
  
    let age = today.getFullYear() - birthDate.getFullYear();
      if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  