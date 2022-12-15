export type AuthMode = "auth" | "register";

export interface AuthComponentProps {
    handleChangeAuthMode: (newMode: AuthMode) => void
} 