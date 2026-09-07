import "../styles/whatsapp.css";

function WhatsAppButton() {

  const whatsappNumber = "917902977698";

  const message =
    "Hello LNE Technology, I am interested in your services. I would like to know more.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-wrapper">

      <span className="whatsapp-tooltip">
        Chat with Us
      </span>

      <a
        href={whatsappUrl}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LNE Technology on WhatsApp"
      >

        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z"
          />

          <path
            d="M16.02 3.2c-7.07 0-12.82 5.75-12.82 12.82 0 2.26.59 4.47 1.71 6.42L3.1 28.8l6.51-1.71a12.78 12.78 0 0 0 6.41 1.73h.01c7.07 0 12.82-5.75 12.82-12.82S23.1 3.2 16.02 3.2zm0 23.38h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-3.86 1.01 1.03-3.76-.25-.39a10.57 10.57 0 1 1 8.87 4.85z"
          />
        </svg>

      </a>

    </div>
  );
}

export default WhatsAppButton;