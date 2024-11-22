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
    system: `Eres un experto en plantas, tu objetivo es recomendar una planta para el usuario basado en los datos que te proporciona.
            El texto debe ser claro e informativo, dando consejos de cuidados y mantenimiento.
            El formato debe ser en HTML usando estilos de Tailwind CSS. Evita usar los tags: <html>, <head>, <body>, no los necesito. Solo dame un <div> como contenedor 
            y ahi dentro el contenido formateado como te comente mas arriba. No muestres imagenes, solo texto.
            No uses simbolos ni caracteres especiales, solo usa letras, numeros y espacios. No coloques ningun titulo.
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
