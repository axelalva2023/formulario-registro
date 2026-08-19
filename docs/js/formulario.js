const formulario = document.querySelector("form");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

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
        const respuesta = await fetch("http://localhost:3000/productos", {
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

    nombre.value = ""
    precio.value = ""
    imagen.value = ""
    categoria.value = ""
    formulario.focus()



    } catch (error) {
        console.log("Error:", error);
    }
});