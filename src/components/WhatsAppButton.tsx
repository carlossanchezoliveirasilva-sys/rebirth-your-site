export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5564992253474?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-40" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-whatsapp transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-whatsapp-foreground" aria-hidden>
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.6A11.96 11.96 0 0 0 12.02 24C18.63 24 24 18.63 24 12c0-3.2-1.25-6.21-3.48-8.52ZM12.02 22a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.58-.24-.37A9.94 9.94 0 1 1 22.02 12c0 5.51-4.48 10-10 10Zm5.46-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
        </svg>
      </span>
    </a>
  );
}
