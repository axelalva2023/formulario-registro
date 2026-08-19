const formulario = document.querySelector("form");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

     const inputNombre = document.querySelector("#nombre");
    const inputPrecio = document.querySelector("#precio");
    const inputImagen = document.querySelector("#imagen");
    const inputCategoria = document.querySelector("#categoria");

    const nombre = document.querySelector("#nombre").value;
    const contenido = document.querySelector("#precio").value;
    const edad = document.querySelector("#imagen").value
    const pose = document.querySelector("#categoria").value;

    const producto = {
        nombre,
        contenido,
        edad,
        pose
    };

    try {
        const respuesta = await fetch("https://formulario-registro-edza.onrender.com/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        const datos = await respuesta.json();

        console.log(datos);

        Swal.fire({
  title: "Mensaje enviado!",
  text: "Pronto recibira su contenido!",
  icon: "success"
});

    // Limpiar los campos
        inputNombre.value = "";
        inputPrecio.value = "";
        inputImagen.value = "";
        inputCategoria.value = "";

        // Volver al primer campo
        inputNombre.focus();



    } catch (error) {
        console.log("Error:", error);
    }
});