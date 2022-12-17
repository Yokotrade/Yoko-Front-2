export const getSelectedLanguage = () => {
    const storage = window.localStorage
    const selectedLanguage = storage.getItem("i18nextLng") || "ru"
    return selectedLanguage
}