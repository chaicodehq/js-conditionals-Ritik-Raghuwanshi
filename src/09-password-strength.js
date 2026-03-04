/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if(password === "" || typeof(password) !== "string"){
    return "weak"
  }
  function regexChecker(pattern,argument){
    return pattern.test(argument);
  }
  const criteria1 = password.length >= 8;
  const criteria2 = regexChecker(/[A-Z]/,password)
  const criteria3 = regexChecker(/[a-z]/,password)
  const criteria4 = regexChecker (/[0-9]/,password)
  const criteria5 = regexChecker(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/,password)


  let strength = 0;
  if(criteria1){
    strength++;
  }
  if(criteria2){
    strength++
  }
  if(criteria3){
    strength++
  }
  if(criteria4){
    strength++
  }
  if(criteria5){
    strength++;
  }

  if(strength == 5){
    return "very strong"
  }else if(strength == 4){
    return "strong"
  }else if(strength == 3 || strength ==2){
    return "medium"
  }else{
    return "weak"
  }
  
}
