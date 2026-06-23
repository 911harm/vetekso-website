interface Props {
  currentLocale: string;
  equivalentPath: string;
}

const LangSwitcher = ({ currentLocale, equivalentPath }: Props) => {
  const targetLocale = currentLocale === "es" ? "en" : "es";

  const handleSwitch = () => {
    // Persist preference for one year
    document.cookie = `lang=${targetLocale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    window.location.href = equivalentPath;
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all duration-200 text-sm font-semibold tracking-wide select-none cursor-pointer"
      aria-label={`Switch to ${targetLocale === "en" ? "English" : "Español"}`}
    >
      <span className="text-base leading-none">{targetLocale === "en" ? "🇺🇸" : "🇨🇴"}</span>
      <span>{targetLocale.toUpperCase()}</span>
    </button>
  );
};

export default LangSwitcher;
