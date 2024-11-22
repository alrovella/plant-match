import { z } from "zod";

export const lightConditionsOptions = [
  {
    key: "directa",
    name: "Directa",
    description: "Luz directa, como una ventana.",
  },
  {
    key: "indirecta",
    name: "Indirecta",
    description: "Puede ser una ventana, o una fuente de luz indirecta.",
  },
  {
    key: "tenue",
    name: "Tenue",
    description: "Puede ser una ventana, o una fuente de luz no tan cercana.",
  },
  {
    key: "artificial",
    name: "Artificial",
    description: "Puede ser una bombilla u otra fuente de luz artificial.",
  },
];

export const spaceAvailableOptions = [
  {
    key: "pequeño",
    name: "Pequeño",
    description: "Un espacio pequeño, como un escritorio o un dormitorio.",
  },
  {
    key: "mediano",
    name: "Mediano",
    description: "Un espacio mediano, como una sala o un balcón cerrado.",
  },
  {
    key: "grande",
    name: "Grande",
    description:
      "Un espacio grande, como un jardín de invierno o un balcón terraza cerrado.",
  },
];

export const temperatureOptions = [
  {
    key: "menos de 10°C",
    name: "Menos de 10°C",
  },
  {
    key: "10-20°C",
    name: "10-20°C",
  },
  {
    key: "20-30°C",
    name: "20-30°C",
  },
  {
    key: "más de 30°C",
    name: "Más de 30°C",
  },
];

export const careLevelOptions = [
  {
    key: "bajo",
    name: "Bajo",
    description: "Requiere poca atención y cuidados básicos.",
  },
  {
    key: "medio",
    name: "Medio",
    description: "Requiere atención y cuidados moderados.",
  },
  {
    key: "alto",
    name: "Alto",
    description: "Requiere mucha atención y cuidados intensivos.",
  },
];

export const humidityOptions = [
  {
    key: "baja",
    name: "Baja",
    description: "Requiere poca humedad, como un ambiente seco.",
  },
  {
    key: "moderada",
    name: "Moderada",
    description: "Requiere humedad moderada, como un ambiente con poca luz.",
  },
  {
    key: "alta",
    name: "Alta",
    description: "Requiere alta humedad, como un ambiente húmedo.",
  },
];

export const experienceLevelOptions = [
  {
    key: "principiante",
    name: "Principiante",
    description: "No tengo experiencia en el cuidado de plantas.",
  },
  {
    key: "intermedio",
    name: "Intermedio",
    description: "Tengo experiencia en el cuidado de plantas.",
  },
  {
    key: "experto",
    name: "Experto",
    description: "Soy un experto en el cuidado de plantas.",
  },
];

export const desiredStyleOptions = [
  {
    key: "decorativa",
    name: "Decorativa",
    description: "Busco una planta que sea decorativa.",
  },
  {
    key: "funcional",
    name: "Funcional",
    description: "Busco una planta que sea funcional.",
  },
  {
    key: "minimalista",
    name: "Minimalista",
    description: "Busco una planta que sea minimalista.",
  },
];

export const plantFormSchema = z.object({
  lightConditions: z.enum(["directa", "indirecta", "tenue", "artificial"]),
  spaceAvailable: z.enum(["pequeño", "mediano", "grande"]),
  temperature: z.enum(["menos de 10°C", "10-20°C", "20-30°C", "más de 30°C"]),
  careLevel: z.enum(["bajo", "medio", "alto"]),
  humidity: z.enum(["baja", "moderada", "alta"]),
  experienceLevel: z.enum(["principiante", "intermedio", "experto"]),
  desiredStyle: z.enum(["decorativa", "funcional", "minimalista"]),
});
