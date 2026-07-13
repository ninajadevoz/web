const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    status.textContent = "Enviando...";

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {

        status.textContent = "✅ ¡Muchas gracias! He recibido tu mensaje y te responderé lo antes posible.";

        form.reset();

    } else {

        status.textContent = "❌ Ha ocurrido un error. Inténtalo de nuevo.";

    }

});
