


export async function LoginData(data) {
  try {
    console.log(data);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST", // Utilizza il metodo POST per inviare i dati al backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}


export async function RegisterImg(id, data) {
  try {
    console.log(data);
    const response = await fetch("http://localhost:3000/insert.js", {
      method: "POST", // Utilizza il metodo POST per inviare i dati al backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id, data),
    });
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}


