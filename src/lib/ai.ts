import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import type { plantFormSchema } from "../schemas/plant-form-schema";
import type { z } from "zod";

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function askAI(data: z.infer<typeof plantFormSchema>) {
  if (!data) return;

  const result = await generateText({
    system: `Eres un experto en plantas de interior, tu objetivo es recomendar de 2 o 3 plantas para el usuario basado en los datos que te proporciona.
            El texto debe ser claro e informativo, dando consejos de cuidados y mantenimiento, origen de la planta, etc.
            El formato debe ser en HTML usando estilos de Tailwind CSS. Evita usar los tags: <html>, <head>, <body>, no los necesito. Solo dame un <div> como contenedor 
            y ahi dentro el contenido formateado como te comente mas arriba. No muestres imagenes, solo texto.
            No uses simbolos ni caracteres especiales, solo usa letras, numeros y espacios. No coloques ningun titulo.
            Si recomendas mas de una planta, separa cada una con un <hr class="my-4" /> y con un gap de 1rem entre cada recomendacion.
            Al terminar la descripcion de cada planta agrega un link (que abra en otra pestaña) al buscador google con el nombre de la planta. El link llamalo "Mas información".
    `,
    model: google("gemini-1.5-flash"),
    prompt: `Quiero que me recomiendes una planta. 
    Las caracteristicas de la planta que me recomiendas son:
    - Estilo ${data.desiredStyle}
    - Espacio: ${data.spaceAvailable}
    - La condicion de luz: ${data.lightConditions}
    - Temperatura: ${data.temperature}
    - Humedad: ${data.humidity}
    - Cuidado: ${data.careLevel}
    - Mi experiencia: ${data.experienceLevel}
    `,
  });

  return result.text.replace(/```html|```/g, "").trim();
}
