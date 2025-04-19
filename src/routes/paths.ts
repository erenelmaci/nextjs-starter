const ROOTS = {
  AUTH: `/auth`,
  DASHBOARD: `/dashboard`,
};

export const paths = {
  auth: {
    signIn: `${ROOTS.AUTH}/sign-in`,
    signUp: `${ROOTS.AUTH}/sign-up`,
    emailConfirmation: `${ROOTS.AUTH}/email-confirmation`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
    passwordRecovery: `${ROOTS.AUTH}/password-recovery`,
    newPassword: `${ROOTS.AUTH}/new-password`,
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    settings: `${ROOTS.DASHBOARD}/settings`,
  },
};
