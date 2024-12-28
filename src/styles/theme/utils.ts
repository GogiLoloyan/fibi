export type Theme = "light" | "dark";

export const setTheme = (theme: Theme): void => {
  if (typeof window === "undefined") return; // Avoid execution on the server
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") return null; // Avoid accessing localStorage on the server
  return (localStorage.getItem("theme") as Theme) || "light";
};

export const initializeTheme = (): void => {
  if (typeof window === "undefined") return; // Prevent execution on the server

  // Check for stored theme
  const storedTheme = getStoredTheme();

  // Check for system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
  setTheme(initialTheme);

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
};

export const toggleTheme = () => {
  if (typeof window === "undefined") return; // Avoid execution on the server
  const currentTheme = document.documentElement.getAttribute(
    "data-theme"
  ) as Theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
};
