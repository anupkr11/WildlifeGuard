import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());

/* GOOGLE APPS SCRIPT URL */
const wildlife =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLihNaQS6pK3dZBcJHI2D32FZIOnZpjOtgTF4JJgYp6OxYxHSlpWBBJCvk-Skhrivg4w7SsapGLbeLhIIhQKfjXRNyzYl2Kx60X28J8dDBIHmuZiNamwpZrfN47T8dzIcuVK716-c5FGj-bxJzaOYyNiwyeAljnPMAU6NrrsB23J-YK01u0osWdvvNNHABA5MzkKSlwMQwjQp30sJ2cm6sI9B0ZER26z9hCEvWsu_eec6jKz5XJFMObcmg9pQRhypo1oOvszmTs5BAqrVpJFPXbQMlC9ZQ&lib=MebllEQsQdgBONyv3zIS7uarteZ-4Vjhy";

// const program = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjq7eWyhBuPcbM41H-XElgKzX868ggjB1cCUA7zIIow3G6sVWlP9h6SKKXxknQ_Qzb1HlrPBcHGSdFk_F0fG5TcEh9im6wzGNF7Rog8D-7kMFRpzEXxboi5zJ4tAsgCLUiGtQYSEyBIIBShsYeGSUhdTjiHrzsZHklGgEi6Q11fAvq9qU0irSOIges2peOrswtQraP9UO1aGJSdwbs1nxnqG5bw31orXQcFY0FGe0eVL-rBFM6iYbivjYN0NjuDd7b-tBV7dFJLkiS65WSThz0xY9l1-Q&lib=Mpd88FQneDVa8-1Bj_5Hw7yrr0JJxHR-J"
// const blog = ""  

/* API ENDPOINT */
app.get("/api/wildlife", async (req, res) => {
  try {
    const response = await fetch(wildlife);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch wildlife data",
      error: error.message,
    });
  }
});

// app.get("/api/program", async (req, res) => {
//   try {
//     const response = await fetch(program);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch program data",
//       error: error.message,
//     });
//   }
// });

// app.get("/api/blog", async (req, res) => {
//   try {
//     const response = await fetch(blog);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch blog",
//       error: error.message,
//     });
//   }
// });

/* START SERVER */
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
