import PasswordValidator from "password-validator";

const passwordSchema = new PasswordValidator();
passwordSchema.is().min(8).is().max(32).has().letters().has().digits();

export function isStrongPass(password: string) {
  return passwordSchema.validate(password);
}
