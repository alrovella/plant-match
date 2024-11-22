import { Radio, RadioGroup } from "@headlessui/react";
import {
  BookOpenIcon,
  CheckCircleIcon,
  CloudIcon,
  FireIcon,
  HeartIcon,
  HomeIcon,
  LightBulbIcon,
  SwatchIcon,
} from "@heroicons/react/16/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  careLevelOptions,
  desiredStyleOptions,
  experienceLevelOptions,
  humidityOptions,
  lightConditionsOptions,
  plantFormSchema,
  spaceAvailableOptions,
  temperatureOptions,
} from "../schemas/plant-form-schema";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import Button from "./ui/Button";
import { motion } from "motion/react";

export default function PlantForm() {
  const [step, setStep] = useState(0);
  const duration = 0.075;
  const { handleSubmit, setValue, watch } = useForm<
    z.infer<typeof plantFormSchema>
  >({
    resolver: zodResolver(plantFormSchema),
    defaultValues: {
      lightConditions: "indirecta",
      spaceAvailable: "mediano",
      temperature: "10-20°C",
      careLevel: "medio",
      humidity: "moderada",
      desiredStyle: "decorativa",
      experienceLevel: "principiante",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof plantFormSchema>> = (data) =>
    console.log(data);

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 0 && (
        <motion.section
          className="flex flex-col gap-4"
          transition={{ duration }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="p-4 text-pretty text-sm">
            "Encontrá tu planta perfecta 🌱" ¿Buscás darle vida a tu espacio con
            una planta que se adapte a vos y a tu hogar? Hace click en el botón
            y descubrí qué planta es ideal según las características de tu
            espacio.🌿
          </div>
          <Button onClick={() => setStep(1)}>
            Ayudame a encontrar mi planta perfecta
          </Button>
        </motion.section>
      )}

      {step === 1 && (
        <motion.section
          className="flex flex-col gap-4"
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <LightBulbIcon className="size-6" />
            Condiciones de Luz
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("lightConditions", e);
            }}
            className="space-y-2"
            value={watch("lightConditions")}
          >
            {lightConditionsOptions.map((condition) => (
              <Radio
                key={condition.key}
                value={condition.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{condition.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{condition.description}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => setStep(2)}>Continuar</Button>
        </motion.section>
      )}

      {step === 2 && (
        <motion.section
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          className="flex flex-col gap-4"
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <HomeIcon className="size-6" />
            Espacio disponible
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("spaceAvailable", e);
            }}
            className="space-y-2"
            value={watch("spaceAvailable")}
          >
            {spaceAvailableOptions.map((option) => (
              <Radio
                key={option.key}
                value={option.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{option.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{option.description}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => setStep(3)}>Continuar</Button>
          <Button
            type="button"
            onClick={() => setStep(1)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-normal text-white"
          >
            Volver atrás
          </Button>
        </motion.section>
      )}

      {step === 3 && (
        <motion.section
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          className="flex flex-col gap-4"
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <FireIcon className="size-6" />
            Temperatura
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("temperature", e);
            }}
            className="space-y-2"
            value={watch("temperature")}
          >
            {temperatureOptions.map((option) => (
              <Radio
                key={option.key}
                value={option.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{option.name}</p>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => setStep(4)}>Continuar</Button>
          <Button
            type="button"
            onClick={() => setStep(2)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-normal text-white"
          >
            Volver atrás
          </Button>
        </motion.section>
      )}

      {step === 4 && (
        <motion.section
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          className="flex flex-col gap-4"
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <HeartIcon className="size-6" />
            Nivel de cuidado
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("careLevel", e);
            }}
            className="space-y-2"
            value={watch("careLevel")}
          >
            {careLevelOptions.map((option) => (
              <Radio
                key={option.key}
                value={option.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{option.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{option.description}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => setStep(5)}>Continuar</Button>
          <Button
            type="button"
            onClick={() => setStep(3)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-normal text-white"
          >
            Volver atrás
          </Button>
        </motion.section>
      )}

      {step === 5 && (
        <motion.section
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          className="flex flex-col gap-4"
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <CloudIcon className="size-6" />
            Humedad
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("humidity", e);
            }}
            className="space-y-2"
            value={watch("humidity")}
          >
            {humidityOptions.map((option) => (
              <Radio
                key={option.key}
                value={option.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{option.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{option.description}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => setStep(6)}>Continuar</Button>
          <Button
            type="button"
            onClick={() => setStep(4)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-normal text-white"
          >
            Volver atrás
          </Button>
        </motion.section>
      )}

      {step === 6 && (
        <motion.section
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          className="flex flex-col gap-4"
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <SwatchIcon className="size-6" />
            Estilo deseado
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("desiredStyle", e);
            }}
            className="space-y-2"
            value={watch("desiredStyle")}
          >
            {desiredStyleOptions.map((option) => (
              <Radio
                key={option.key}
                value={option.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{option.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{option.description}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button onClick={() => setStep(7)}>Continuar</Button>
          <Button
            type="button"
            onClick={() => setStep(5)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-normal text-white"
          >
            Volver atrás
          </Button>
        </motion.section>
      )}

      {step === 7 && (
        <motion.section
          transition={{ duration }}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          className="flex flex-col gap-4"
        >
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <BookOpenIcon className="size-6" />
            Nivel de experiencia
          </h2>

          <RadioGroup
            onChange={(e) => {
              setValue("experienceLevel", e);
            }}
            className="space-y-2"
            value={watch("experienceLevel")}
          >
            {experienceLevelOptions.map((option) => (
              <Radio
                key={option.key}
                value={option.key}
                className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{option.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{option.description}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="opacity-0 group-data-[checked]:opacity-100 transition fill-white size-6" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <Button type="submit">Buscar mi planta perfecta</Button>
          <Button
            type="button"
            onClick={() => setStep(6)}
            className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-normal text-white"
          >
            Volver atrás
          </Button>
        </motion.section>
      )}
    </form>
  );
}